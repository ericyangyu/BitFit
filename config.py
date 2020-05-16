import pyrebase

config = {
    "apiKey": "AIzaSyAmTYwEjRF3vUN_4bxpRdlqBBtOzQ5YPFY",
    "authDomain": "bitfit-db70a.firebaseapp.com",
    "databaseURL": "https://bitfit-db70a.firebaseio.com",
    "projectId": "bitfit-db70a",
    "storageBucket": "bitfit-db70a.appspot.com",
    "messagingSenderId": "872013219049",
    "appId": "1:872013219049:web:2e6fb41cdbdb3324db1c78",
    "measurementId": "G-1N6YZZJPGT",
}

firebase = pyrebase.initialize_app(config)

db = firebase.database()
auth = firebase.auth()
