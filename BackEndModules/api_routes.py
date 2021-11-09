from flask import Flask, request, jsonify
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from werkzeug.utils import secure_filename
import os
import json
import requests
import ssl
import devicecalls as GetThisDataFromDevice

headers_ios = {"Content-Type": 'application/yang-data+json', 'Accept': 'application/yang-data+json'}
ctx = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
ctx.load_cert_chain(f'{os.getcwd()}/domainame.crt', f'{os.getcwd()}/domainame.key')

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
jwt = JWTManager(app)


@app.route('/token', methods=['POST', 'GET'])
def token() -> dict:
    token = create_access_token(identity=request.json.get('username'))
    return jsonify(token)

@app.route('/login', methods=['POST', 'GET'])
def ios_xe_login() -> dict:
    """Authenticates credentials to device. Check device capabilities"""

    auth_dict = {'status': 'null'}

    try:
        response = requests.get(f"https://{request.json.get('ip', {})}:{request.json.get('port', {})}/restconf/data/netconf-state/capabilities",
            headers=headers_ios, verify=False, auth=(request.json.get('username', {}), request.json.get('password', {})))

        if response.status_code == 200:
            model_serial = GetThisDataFromDevice.get_model(request.json.get('username'), request.json.get('password'), request.json.get('ip'))
            auth_dict['status'] = 200
            auth_dict['model'] = model_serial[0]
            auth_dict['serial'] = model_serial[1]
            auth_dict['uptime'] = model_serial[2]
            auth_dict['software'] = model_serial[3]
            auth_dict['capabilities'] = json.loads(response.text)
            
        elif response.status_code == 400:
            auth_dict['status'] = 400
        elif response.status_code == 401:
            auth_dict['status'] = 401
        elif response.status_code == 404:
            auth_dict['status'] = 404
        elif response.status_code == 204:
            auth_dict['status'] = 204
        elif response.status_code == 500:
            auth_dict['status'] = 500

    except (json.decoder.JSONDecodeError, requests.exceptions.ConnectionError, requests.exceptions.InvalidURL, UnboundLocalError):
        auth_dict['status'] = 500
    print(auth_dict)
    return auth_dict

@app.route('/liveinterfaces', methods=['POST', 'GET'])
def live_interfaces():
    """Get device interfaces"""

    interfaces = GetThisDataFromDevice.get_interfaces(request.json.get('ip'), request.json.get('port'), request.json.get('username'), request.json.get('password'))

    return {'interfaces': interfaces}

if __name__ == '__main__':
    app.run(ssl_context=ctx)
