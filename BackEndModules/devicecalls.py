"""Collection of functions that get data from a device using Restconf"""

from json.decoder import JSONDecodeError
from netmiko import ConnectHandler, ssh_exception
from paramiko.ssh_exception import PasswordRequiredException
import requests
import json
import warnings

warnings.filterwarnings('ignore', message='Unverified HTTPS request')
headers = {"Content-Type": 'application/yang-data+json', 'Accept': 'application/yang-data+json'}


def send_command(command, username, password, host) -> list:
    """Logs into device and returns a connection object to the caller. """

    response = []
    credentials = {
        'device_type': 'cisco_ios',
        'host': host,
        'username': username,
        'password': password,
        'port': 22,
        "fast_cli": False,
        'session_log': 'my_file.out'}

    try:
        with ConnectHandler(**credentials) as connection:
            response = connection.send_command(command)
    except (ssh_exception.AuthenticationException, EOFError, ssh_exception.NetmikoTimeoutException, PasswordRequiredException):
        pass
    
    return response

def _check_api_error(response) -> bool:

    is_error = False

    try:
        if list(response.keys())[0] == 'errors':
            is_error = True
    except IndexError:
        pass
    
    return is_error



def get_arps(ip, port, username, password) -> list:
    """Collects arp for the matching"""

    entries = []

    try:
        uri = f"https://{ip}:{port}/restconf/data/Cisco-IOS-XE-arp-oper:arp-data/arp-vrf"
        response = requests.get(uri, headers=headers, verify=False, auth=(username, password))
        arp_entries = json.loads(response.text, strict=False)

        check_error = _check_api_error(arp_entries)

        if check_error:
            raise AttributeError

        try:
            for i in  arp_entries.get('Cisco-IOS-XE-arp-oper:arp-vrf'):
                for entry in i.get('arp-oper'):
                    entry.pop('interface')
                    entry['vrf'] = i.get('vrf')
                    entry['interface'] = 'n/a'
                    entry['time'] = entry.get('time').split('.')[0].strip('T00')
                    entries.append(entry)
        except (TypeError, AttributeError):
            pass

    except (JSONDecodeError, requests.exceptions.ConnectionError, requests.exceptions.InvalidURL, AttributeError):
        entries = InCaseRestDoesntWork.get_arp(username, password, ip)

    return entries

def get_interfaces(ip, port, username, password) -> dict:
    """Gets real time interface statistics using IOS-XE\n
        Cisco-IOS-XE-interfaces-oper:interfaces and live arp data via Cisco-IOS-XE-arp-oper:arp-data/arp-vrf"""

    data = {}
    interface_data = {}

    try:
        uri = f"https://{ip}:{port}/restconf/data/Cisco-IOS-XE-interfaces-oper:interfaces"
        response = requests.get(uri, headers=headers, verify=False, auth=(username, password))
        interface_data = json.loads(response.text).get('Cisco-IOS-XE-interfaces-oper:interfaces').get('interface')
        check_error = _check_api_error(interface_data)

        if check_error:
            raise AttributeError

    except (JSONDecodeError, requests.exceptions.ConnectionError, requests.exceptions.InvalidURL,UnboundLocalError, AttributeError):
        pass
    
    if interface_data:
        try:
            uri = f"https://{ip}:{port}/restconf/data/Cisco-IOS-XE-arp-oper:arp-data/arp-vrf"
            response = requests.get(uri, headers=headers, verify=False, auth=(username, password))

            for interface in interface_data:
                #Collect inter qos statistics. Commence policy breakdown
                qos_stats = collect_qos_stats(interface, ip, port, username, password)
                convert_bandwidth = convert_to_mbps(interface)
                data[interface.get('name')] = {'interface': interface.get('name'), 'data': convert_bandwidth, 'qos': qos_stats}
                
        except (JSONDecodeError, requests.exceptions.ConnectionError, requests.exceptions.InvalidURL):
            for interface in interface_data:
                convert_bandwidth = convert_to_mbps(interface)
                data[interface.get('name')] = {'interface': interface.get('name'), 'data': convert_bandwidth, 'qos': [[]]}

    return data

def collect_qos_stats(interface, ip, port, username, password) -> list:
    """Collect interface service policies, breaks down policy."""

    qos = []

    # The following code will compare two sets of data. Interface queue stats and service policy config. Unfortunently we cant get this data as one

    for policy in interface.get('diffserv-info', {}):
        try:
            #Get qos policy map details using rest and a name filter in out url path
            uri = f"https://{ip}:{port}/restconf/data/Cisco-IOS-XE-native:native/policy/policy-map={policy.get('policy-name')}"
            response = requests.get(uri, headers=headers, verify=False, auth=(username, password))
            check_error = _check_api_error(json.loads(response.text))

            if check_error:
                raise AttributeError

            #Get policy detials. Type, Allocation etc.
            allocation = _get_qos_bandwidth(json.loads(response.text))

            if not policy.get('diffserv-target-classifier-stats'):
                qos = []
            elif isinstance(policy.get('diffserv-target-classifier-stats'), list):
                #Use list comp to get out queue details, also map other details

                if not allocation:
                    qos = []
                elif len(allocation) == 1:
                    qos = [{'interface_policy': policy.get('policy-name', {}), 'allocation': allocation[0].get('allocation', {}), 
                    'direction': policy.get('direction', {}).split('-')[1], 'queues': _map_queues(allocation[0], policy)}]
                else:
                    qos = [
                        
                        {'interface_policy': policy.get('policy-name', {}), 'allocation': i.get('allocation', {}), 
                        'direction': policy.get('direction', {}).split('-')[1], 'queues': _map_queues(i, policy)}
                        
                        for i in allocation
                    
                        ]
        except AttributeError:
             pass

    return qos

def _get_qos_bandwidth(policy) -> list:
    """Break down each child policy"""

    parent_queues = []

    #Get parent policy actions and action type. ie.e bandwdith, service-policy, fair-queue etc.
    for queue in policy.get('Cisco-IOS-XE-policy:policy-map', {}).get('class', {}):
        try:
            if isinstance(queue.get('action-list', {}), list):
                allocation = [_allocation_type(action) for action in queue.get('action-list', {})]
                if len(allocation) == 1 and str(allocation) != '[(\'---\', \'---\')]':
                    parent_queues.append({'queue': queue.get('name'), 'allocation': allocation[0][0], 'type': allocation[0][1]})
                elif len(allocation) == 2:
                    parent_queues.append({'queue': queue.get('name'), 'allocation': allocation[0][0], 'type': allocation[1]})
        except IndexError:
            pass

    return parent_queues

def _allocation_type(action) -> tuple:
    """Get details of child policy"""

    allocation = '---'
    action_type = '---'

    if action.get("action-type",{}) == 'shape':
        if 'bit-rate' in action.get('shape',{}).get('average',{}):
            allocation = str(round(int(action.get("shape",{}).get("average",{}).get("bit-rate",{})) / 1e+6)) + " Mbps"
        elif 'percent' in action.get('shape',{}).get('average'):
            allocation = str(action.get("shape",{}).get("average",{}).get("percent",{})) + "%"

    elif action.get("action-type",{}) == 'bandwidth':
        if 'kilo-bits' in action.get('bandwidth', {}):
            allocation = str(round(int(action.get("bandwidth",{}).get("kilo-bits",{})) * 1000 / 1e+6)) + " Mbps"
        elif 'percent' in action.get('bandwidth', {}):
            allocation = str(action.get("bandwidth",{}).get("percent",{})) + '%'

    if action.get("action-type",{}) == 'service-policy':
        action_type = 'service-policy'
    elif action.get("action-type",{}) == 'fair-queue':
        action_type = 'fair-queue'

    return allocation, action_type
    
def _map_queues(i, policy) -> list:
    
    queues = []

    # Check if policy type is service policy. When then can get our queue detiials
    if 'service-policy' in i.get('type'):
        for queue in policy.get('diffserv-target-classifier-stats', {}):
            #Parent path provided allows use to check if the queue is a child queue. 1st path part is Parent Policy, second is a paren queue, anything after is child
            if len(queue.get('parent-path').split()) != 2:
                queues.append({'queue-name': queue.get('classifier-entry-name'), 'parent': " ".join(queue.get('parent-path').split(" ")[0:2]),
                'rate': queue.get('classifier-entry-stats').get('classified-rate'), 'bytes': queue.get('classifier-entry-stats').get('classified-bytes'),
                'pkts': queue.get('classifier-entry-stats').get('classified-pkts'), 'drops': queue.get('queuing-stats').get('drop-bytes'), 
                'tail-drops': queue.get('queuing-stats').get('wred-stats').get('tail-drop-bytes')})
            elif len(queue.get('parent-path').split()) == 2 and queue.get('classifier-entry-name') == i.get('queue'):
                queues.append({'queue-name': f'Parent Queue: {queue.get("classifier-entry-name")}'})

    elif '---' in i.get('type'):
        # This maps if the queue is not service policy. A single queue with no child
        queues = [
                    {'queue-name': f'Parent Queue: {queue.get("classifier-entry-name")}'} 
                    for queue in policy.get('diffserv-target-classifier-stats', {}) 
                    if len(queue.get('parent-path').split()) == 2 and queue.get('classifier-entry-name') == i.get('queue')
                ]
    return queues


def convert_to_mbps(interface) -> dict:
    """Convert Kbps to Mbps"""

    interface['statistics']['tx-kbps'] = int(interface['statistics']['tx-kbps']) / 1000
    interface['statistics']['rx-kbps'] = int(interface['statistics']['rx-kbps']) / 1000
    if interface['oper-status'] == 'if-oper-state-ready':
        interface['oper-status'] = 'up'
    else:
        interface['oper-status'] = 'down'

    return interface
    

def get_model(username, password, host):
    """Get self.device model"""

    model = None
    serial = None
    uptime = None
    software = None
    get_model = send_command('show inventory', username, password, host)
    show_version = send_command('show version', username, password, host)


    try:

        for i in get_model.splitlines():
            if i.rfind('Chassis') != -1:
                model = i.split("\"")[3].split()[1][0:3]
            elif i.rfind('NAME') != -1:
                model = i.split("\"")[1]

            if i.rfind('SN') != -1:
                serial = i.split('SN: ')[1]
                break

        for i in show_version.splitlines():
            if i.rfind('Uptime') != -1:
                uptime = i.split("is")[2]
                break
            elif i.rfind('RELEASE SOFTWARE') != -1:
                software = i
    except AttributeError:
        pass

    return model, serial, uptime, software