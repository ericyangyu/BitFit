# BitFit Backend Style Guide

## General Notes
- Use Flake8 as your linter.
- Please add your name to the file header as an author if you wrote code in that 
  file.
- Please comment your code. Use multi line comments for code that is more
  complex than at first glance.
- Please use consistency in your naming (camelCase or splitting with _)
- Please try to use consistency with your file structure such as ordering 
  functions in a class.
- Please try to keep the code free of commented code.
- Please try to remove imports that are no longer used.
- Please try to think of the other programmers that will be looking at your 
  code in the future so that you comment with that in mind.

## Indentation
- Use four spaces

## File Headers
```
"""
Description: Recieves data from the middleware, and makes the correct Pyrebase
API calls to update data about the user in Firebase. Contains error checking
for errors in calls to Firebase.

TODO: (Optional)
NOTES: (Optional)

Authors: Imran, Sharan, Nour
"""
 ```

## Sort Imports by Group
```
# External imports
from flask import make_response, jsonify  # Flask packages
from requests.exceptions import HTTPError  # To access HTTPError

# Internal imports
from ...config import db, auth, create_error_message, raise_detailed_error
```

## Class Instantiation
- Capitalize the name of the class.
- Only one class per page.
```
class User:
```

## Class Headers
- Please try to make the class header explain at highlevel what the class does.
```
class User:
    """
    This class acts as the user model for our database. It contains all the
    methods related to users in the firebase database.
    """
```

## Class Method Headers
- Please try to make the method headers explain what that method is doing.
```
@staticmethod
def get(uid: str):
    """
    Fetches user information from the database.

    Arguments:
        uid {str} -> The user's unique id

    Returns:
        response object -> If valid call, returns the user's info and a
        200 status code. Otherwise, returns a blank body and an error code.
    """
```

## Method Headers
- Please try to make the method headers explain what that method is doing.
- API method header: 
```
@user_api.route("/login", methods=["POST"])
def login():
    """
    Logs in in a user based on provided email and password.

    Expected data:
        email -> entered email
        password -> entered password

    Expected response:
        uid -> user's local id (key when accessing user in db)
    """
```
- Model Method header:
```
@staticmethod
def login(email: str, password: str):
    """
    Logins in a user with an email and password.

    Arguments:
        email {str} -> entered email
        password {str} -> entered password

    Returns:
        response object -> If valid call, returns the uid of the user and a
        200 status code. Otherwise, returns a blank body and an error code.
    """
 ```
