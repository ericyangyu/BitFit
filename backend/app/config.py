"""Configuration file for the Flask backend object and Pyrebase connection.

Description: Initializes the Flask backend object and connectes pyrebase to
the backend
by creating a pyrebase instance.
Authors: Imran, Sharan, Nour
"""

# External imports #######
# import pyrebase for Firebase interaction
import pyrebase

# import supporting flask backend packages
from flask_api import FlaskAPI
from flask.cli import FlaskGroup

# define the Flask backend object and set configuration parameters
app = FlaskAPI(__name__)
app.config["CORS_HEADERS"] = "Content-Type"
cli = FlaskGroup(app)

# initalize a firebase connection to the databse using pyrebase
firebase = pyrebase.initialize_app(
    {
        "apiKey": "AIzaSyDtxf_1m144v64a8gJra4khyQZXnyNYfEk",
        "authDomain": "cse110-bitfit.firebaseapp.com",
        "databaseURL": "https://cse110-bitfit.firebaseio.com",
        "projectId": "cse110-bitfit",
        "storageBucket": "cse110-bitfit.appspot.com",
        "messagingSenderId": "140684277401",
        "appId": "1:140684277401:web:42a04b6e00773d52856a08",
        "measurementId": "G-PHN7BE72HF",
    }
)

# create firebase database variable to access database
db = firebase.database()
# create firebase authentication variable for authentication
auth = firebase.auth()
