"""
Configuration file for the Flask backend object and Pyrebase connection.
Initializes a Flask backend object and a Pyrebase instance to be used by the
rest of the backend.

Authors: Imran, Sharan, Nour
"""

# Flask packages
from flask import make_response
from flask_api import FlaskAPI
from flask.cli import FlaskGroup

import pyrebase  # For Firebase interaction
import json  # To load json
from requests.exceptions import HTTPError  # To access HTTPError

# Define the Flask backend object and set configuration parameters
app = FlaskAPI(__name__)
app.config["CORS_HEADERS"] = "Content-Type"
cli = FlaskGroup(app)

test_config = {
    "apiKey": "AIzaSyA0hD_tLfUMLsfZ1HtDtXa99mnE4IP0Cm8",
    "authDomain": "bitfit-test.firebaseapp.com",
    "databaseURL": "https://bitfit-test.firebaseio.com",
    "projectId": "bitfit-test",
    "storageBucket": "bitfit-test.appspot.com",
    "messagingSenderId": "65353048050",
    "appId": "1:65353048050:web:2815ddc89a40a78084556b",
    "measurementId": "G-N9YH6R58VW",
}

real_config = {
    "apiKey": "AIzaSyDtxf_1m144v64a8gJra4khyQZXnyNYfEk",
    "authDomain": "cse110-bitfit.firebaseapp.com",
    "databaseURL": "https://cse110-bitfit.firebaseio.com",
    "projectId": "cse110-bitfit",
    "storageBucket": "cse110-bitfit.appspot.com",
    "messagingSenderId": "140684277401",
    "appId": "1:140684277401:web:42a04b6e00773d52856a08",
    "measurementId": "G-PHN7BE72HF",
}


# Initalize a Firebase connection to the databse using pyrebase
# Choose which credentials to initalize the app with
firebase = pyrebase.initialize_app(test_config)
# firebase = pyrebase.initialize_app(real_config)

# Create database and authentification variables for Firebase
db = firebase.database()
auth = firebase.auth()
storage = firebase.storage()


def create_error_message(e):
    """
    Handles exceptions in firebase calls, and returns correct error response.

    Arguments:
        e {Exception} -> wants HTTPError exception, but can handle other types

    Returns:
        A response object with an error code and no data
    """
    try:
        # Access the JSON object from error that contains JSON info
        error_json = e.args[1]
        # Access message filed in JSON error object
        code = json.loads(error_json)["error"]["code"]
        # Return the given code if this is an HTTPEror
        return make_response(error_json, code)

    except HTTPError:
        # Return 400 if it is another type of error
        return make_response({}, 400)


def raise_error(r):
    """
    Used to raise an HTTPError if firebase calls are made internally and not
    through pyrebase.

    Argument:
        request_object {[type]} -> from requests.post/get/...() methods.

    Raises:
        HTTPError
    """
    try:
        r.raise_for_status()
    except HTTPError as e:
        # Raise detailed error message
        # TODO: Check if we get a { "error" : "Permission denied." } and
        # handle automatically
        raise HTTPError(e, r.text)
