"""Bandwidth calculator class used to poll and calculate various statistics"""

from datetime import time
import requests
import json
import warnings
from json.decoder import JSONDecodeError
import time

warnings.filterwarnings('ignore', message='Unverified HTTPS request')
headers = {"Content-Type": 'application/yang-data+json', 'Accept': 'application/yang-data+json'}

def convert_to_mbps(interface) -> dict:
    """Convert Kbps to Mbps"""

    interface['statistics']['tx-kbps'] = int(interface['statistics']['tx-kbps']) / 1000
    interface['statistics']['rx-kbps'] = int(interface['statistics']['rx-kbps']) / 1000
    if interface['oper-status'] == 'if-oper-state-ready':
        interface['oper-status'] = 'up'
    else:
        interface['oper-status'] = 'down'

    return interface

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
            for interface in interface_data:
                #Collect inter qos statistics. Commence policy breakdown
                convert_bandwidth = convert_to_mbps(interface)
                data[interface.get('name')] = {'interface': interface.get('name'), 'data': convert_bandwidth}
                
        except (JSONDecodeError, requests.exceptions.ConnectionError, requests.exceptions.InvalidURL):
            for interface in interface_data:
                convert_bandwidth = convert_to_mbps(interface)
                data[interface.get('name')] = {'interface': interface.get('name'), 'data': convert_bandwidth}

    return data

def _check_api_error(response:json) -> bool:

    is_error = False

    try:
        if list(response.keys())[0] == 'errors':
            is_error = True
    except IndexError:
        pass
    
    return is_error

def get_interface_details(ip:str, port:int, username:str, password:str) -> list:
    """Gets interface IP information using IETF model"""

    interfaces_details = []
    
    try:
        uri = f"https://{ip}:{port}/restconf/data/ietf-interfaces:interfaces/interface"
        response = requests.get(uri, headers=headers, verify=False, auth=(username, password))
        interfaces = json.loads(response.text)

        check_error = _check_api_error(interfaces)

        if check_error:
            raise AttributeError

        interfaces_details = interfaces.get('ietf-interfaces:interface', {})

    except (JSONDecodeError, requests.exceptions.ConnectionError, requests.exceptions.InvalidURL, AttributeError) as e:
        pass

    return interfaces_details

def get_interface_stats(ip:str, port:int, username:str, password:str) -> list:
    """Collects interface stats"""

    interfaces_stats = []

    try:
        uri = f"https://{ip}:{port}/restconf/data/ietf-interfaces:interfaces-state"
        response = requests.get(uri, headers=headers, verify=False, auth=(username, password))
        interfaces = json.loads(response.text)

        #Check for valid json, raise error if data isnt valid
        check_error = _check_api_error(interfaces)
        if check_error:
            raise AttributeError

        interfaces_stats = interfaces.get('ietf-interfaces:interfaces-state', {}).get('interface', {})
        #Since the interface-state yang model doesnt give ip, make another api call to get the details
        interface_details = get_interface_details(ip, port, username, password)

        #Iterate through bother lists and add k/v pairs for the missing data
        for ints_stats in interfaces_stats:
            for int_details in interface_details:
                if ints_stats.get("name") == int_details.get("name"):
                    try:
                        ints_stats['ip_address'] = f"{int_details.get('ietf-ip:ipv4', {}).get('address', {})[0].get('ip')} {int_details.get('ietf-ip:ipv4', {}).get('address', {})[0].get('netmask')}"
                        ints_stats['description'] = int_details.get('description', 'n/a')
                    except KeyError:
                        ints_stats['ip_address'] = 'Not Assigned'
                        ints_stats['description'] = int_details.get('description', 'n/a')


    except (JSONDecodeError, requests.exceptions.ConnectionError, requests.exceptions.InvalidURL, AttributeError) as e:
        pass

    return interfaces_stats

def bandwidth_calculation(interface_stats:dict, i:dict, polling_interval:int):

    mbps_out = 0
    mbps_in = 0

    if interface_stats.get("name") == i.get("name"):
        try:
            #Calculate stats subtract old stats from new. Conver from bytes to bits and divide. O yea, add new k/v to dictionary witht the calculated value
            bytes_out_diff =  int(interface_stats.get("statistics").get("out-octets", {})) - int(i.get('previos_octets_out', 0))
            interface_stats.update({'previos_octets_out': interface_stats.get("statistics").get("out-octets", {})})
            calc_1 = bytes_out_diff * 8 / polling_interval
            mbps_out = calc_1 / 1e+6 

            bytes_in_diff = int(interface_stats.get("statistics").get("in-octets", {})) - int(i.get('previos_octets_in', 0))
            interface_stats.update({'previos_octets_in': interface_stats.get("statistics").get("in-octets", {})})
            calc_1 = bytes_in_diff * 8 / polling_interval / 1000
            mbps_in = calc_1 / 1e+6 

        except (AttributeError, ValueError, TypeError):
            pass
        finally:
            # We dont want negative number. This will happen of there is a counter rollover
            if mbps_out < 0:
                mbps_out = 0

            interface_stats['mbps_out'] = mbps_out

            if mbps_in < 0:
                mbps_in = 0

            interface_stats['mbps_in'] = mbps_in

    return interface_stats

class CalcBandwidth:
    """Bandwidth calculation class"""

    def __init__(self,  host:str, port:int, username:str, password:str):

        self.host = host
        self.port = port
        self.username = username
        self.password = password
        self.last_poll = None
        self.poll_iteration = 0
        self.polling_interval = 20

    def get_interface_bandwith_all(self, polling_interval:int=None):
    
        #Get Interface stats
        interface_stats = get_interface_stats(self.host, self.port, self.username, self.password)

        #Check interval, the program will show really larger numbers if will dont skip interval one
        if self.last_poll is not None or self.poll_iteration > 1:
            self.poll_iteration = 2

            for interface in interface_stats:
                for i in self.last_poll:
                    bandwidth_calculation(interface, i, polling_interval)

            # store the modifed data structure as our last poll for comparison with next poll
            self.last_poll = interface_stats

        else:
            self.poll_iteration = self.poll_iteration =+ 1
            #Create new k/v for next poll calculations

            for interface in interface_stats:
                interface['previos_octets_out'] = int(interface.get("statistics").get("out-octets", {}))
                interface['previos_octets_in'] = int(interface.get("statistics").get("in-octets", {}))

            #store the modifed data structure as our last poll for comparison with next poll
            self.last_poll = interface_stats


        return interface_stats

if __name__ == '__main__':

    print('Bandwidth Monitor')
    ip = input('Host: ')
    username = input('Username: ')
    password = input('Password')
    port = input('Port:')

    bandwidth = CalcBandwidth(ip, port, username, password)
    polling_interval = input('Polling Interval: ')
    while True:
        stats = bandwidth.get_interface_bandwith_all(polling_interval)
        for i in stats:
            try:
                print(f"{i.get('name'):>25} {i.get('mbps_out'):>25} {i.get('mbps_in'):>25}")
            except TypeError:
                pass
        time.sleep(int(polling_interval))

    