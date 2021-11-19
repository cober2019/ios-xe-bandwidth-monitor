"""Bandwidth calculator class used to poll and calculate various statistics"""

import collections
import requests
import json
import warnings
from json.decoder import JSONDecodeError

warnings.filterwarnings('ignore', message='Unverified HTTPS request')
headers = {"Content-Type": 'application/yang-data+json', 'Accept': 'application/yang-data+json'}

def _check_api_error(response) -> bool:

    is_error = False

    try:
        if list(response.keys())[0] == 'errors':
            is_error = True
    except IndexError:
        pass
    
    return is_error

def get_interface_details(ip, port, username, password) -> list:
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

def get_interface_stats(ip, port, username, password) -> list:
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
        for ints_stats, int_details in zip(interfaces_stats, interface_details):
            try:
                ints_stats['ip_address'] = f"{int_details.get('ietf-ip:ipv4', {}).get('address', {})[0].get('ip')} {int_details.get('ietf-ip:ipv4', {}).get('address', {})[0].get('netmask')}"
                ints_stats['description'] = int_details.get('description', 'n/a')
            except KeyError:
                ints_stats['ip_address'] = 'Not Assigned'
                ints_stats['description'] = int_details.get('description', 'n/a')


    except (JSONDecodeError, requests.exceptions.ConnectionError, requests.exceptions.InvalidURL, AttributeError) as e:
        pass

    return interfaces_stats


class CalcBandwidth:
    """Bandwidth calculation class"""

    def __init__(self,  host, port, username, password):

        self.host = host
        self.port = port
        self.username = username
        self.password = password
        self.last_poll = None
        self.poll_interval = 0


    def get_interface_bandwith_all(self) -> list:
        """Calculate outbound bandwidth"""

        mbps_out = 0
        #Get Interface stats
        interface_stats = get_interface_stats(self.host, self.port, self.username, self.password)

        #Check interval, the program will show really larger numbers if will dont skip interval one
        if self.last_poll is not None or self.poll_interval > 1:
            self.poll_interval = 2
            for interface in interface_stats:
                for i in self.last_poll:
                    if interface.get("name") == i.get("name"):
                        try:
                            #Calculate stats subtract old stats from new. Conver from bytes to bits and divide. O yea, add new k/v to dictionary witht the calculated value
                            bytes_out_diff =  int(interface.get("statistics").get("out-octets", {})) - int(i.get('previos_octets_out', 0))
                            interface.update({'previos_octets_out': interface.get("statistics").get("out-octets", {})})
                            calc_1 = bytes_out_diff * 8 / 20
                            mbps_out = calc_1 / 1e+6 

                            bytes_in_diff = int(interface.get("statistics").get("in-octets", {})) - int(i.get('previos_octets_in', 0))
                            interface.update({'previos_octets_in': interface.get("statistics").get("in-octets", {})})
                            calc_1 = bytes_in_diff * 8 / 20
                            mbps_in = calc_1 / 1e+6 

                        except (AttributeError, OSError, ValueError) as e:
                            pass
                        finally:
                            # We dont want negative number. This will happen of there is a counter rollover
                            if mbps_out < 0:
                                mbps_out = 0

                            interface['mbps_out'] = mbps_out

                            if mbps_in < 0:
                                mbps_in = 0

                            interface['mbps_in'] = mbps_in
            # store the modifed data structure as our last poll for comparison with next poll
            self.last_poll = interface_stats

        else:
            self.poll_interval = self.poll_interval =+ 1
            #Create new k/v for next poll calculations
            for interface in interface_stats:
                interface['previos_octets_out'] = int(interface.get("statistics").get("out-octets", {}))
                interface['previos_octets_in'] = int(interface.get("statistics").get("in-octets", {}))
            #store the modifed data structure as our last poll for comparison with next poll
            self.last_poll = interface_stats


        return interface_stats

    
