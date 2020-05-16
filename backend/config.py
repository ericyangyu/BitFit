import pyrebase

from flask_api import FlaskAPI
from flask.cli import FlaskGroup

app = FlaskAPI(__name__)
app.config["CORS_HEADERS"] = "Content-Type"
cli = FlaskGroup(app)

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

db = firebase.database()
auth = firebase.auth()
