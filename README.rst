.. image:: https://static.production.devnetcloud.com/codeexchange/assets/images/devnet-published.svg
    :target: https://developer.cisco.com/codeexchange/github/repo/cober2019/ios-xe-bandwidth-monitor
    
XE-Bandwidth Monitoring
========================

View interface bandwdith for Cisco devices running XE Code. Device must be able to use Restconf protocol. Demo: http://40.114.68.103:3000/live_interfaces

Requirements:
--------------

Check to see if your device is compatible to use this program. Use the following instructions - https://developer.cisco.com/docs/ios-xe/#!enabling-restconf-on-ios-xe

**Tested Models**
    
    |   -ASR 1000 Series
    |   -ISR 4000 Series
    |   -CSR 1000v
    |   -CAT 3000 Series

Easy With Docker
-----------------
Visit https://hub.docker.com/r/cober2019/cisco_xe_bandwidth_monitor or just execute "docker pull cober2019/cisco_xe_bandwidth_monitor" from docker CLI.
When running the image set Local Host option to 3000. The container port should display 3000/tcp to the right.

Install:Linux
--------------
The following dependencies are required. If you don't have the following dependencies installed, execute:  "sudo bash install_dependencies.sh"
    |
    |   -NPM && Node.js https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
    |   -Python: https://docs.python-guide.org/starting/install3/linux/
    |   -Open SSL
    
**Once Dependecies Are Installed:**
    |
    |   **Note: If you're using windows 10, you can use built-in Ubuntu** 
    |   
    |   1. Clone this repo to you server and navigate to the /ios-xe-bandwidth-monitor (root) directory. 
    |   2. Execute command "sudo bash init_app_routes" which will take care of everything below. When running the script, SSL certs will be created for app to api security.                TLSv1.3 for transport.
    |
    |   **If you want to manualy install then continue with these steps:**
    |
    |   2. Located package.json and execute code "npm install package.json"
    |   3. Once packages are installed, execute code "node server.js&"
    |   4. Navigate to 127.0.0.1:3000
    |   5. Create a virtual environment by executing "python3.8 -m venv ios-xe-bandwdith-monitor-env" and activate the env using "source ios-xe-bandwdith-monitor-env/bin/activate"
    |   6. Install python modules using pip "pip install -r requirements.txt"
    |   7. Start the API using "Python3 api_routes.py"
    |   8. Go back to the web app and login to your device

**Other**
  This program communicates  using two protocols, ssh and https/restconf. All connectivity is located in BackendModules/device_calls.py
  
.. image:: https://github.com/cober2019/ios-xe-bandwidth-monitor/blob/main/images/bandwdith.PNG
