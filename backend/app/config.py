"""
Configuration file for the Flask backend object and Pyrebase connection.
Initializes a Flask backend object and a Pyrebase instance to be used by the
rest of the backend.

Authors: Imran, Sharan, Nour
"""

# For Firebase interaction
import pyrebase

# Flask packages
from flask_api import FlaskAPI
from flask.cli import FlaskGroup

# Define the Flask backend object and set configuration parameters
app = FlaskAPI(__name__)
app.config["CORS_HEADERS"] = "Content-Type"
cli = FlaskGroup(app)

# Initalize a Firebase connection to the databse using pyrebase
firebase = pyrebase.initialize_app({
    "apiKey": "AIzaSyDtxf_1m144v64a8gJra4khyQZXnyNYfEk",
    "authDomain": "cse110-bitfit.firebaseapp.com",
    "databaseURL": "https://cse110-bitfit.firebaseio.com",
    "projectId": "cse110-bitfit",
    "storageBucket": "cse110-bitfit.appspot.com",
    "messagingSenderId": "140684277401",
    "appId": "1:140684277401:web:42a04b6e00773d52856a08",
    "measurementId": "G-PHN7BE72HF",
})

# Create database and authentification variables for Firebase
db = firebase.database()
auth = firebase.auth()
