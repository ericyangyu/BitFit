"""
Description: Recieves data from the middleware, and makes the correct Pyrebase
API calls to update data about the user in Firebase. Contains error checking
for errors in calls to Firebase.

Authors: Imran, Sharan, Nour
"""

# External imports
from flask import make_response, jsonify  # Flask packages
from requests.exceptions import HTTPError  # To access HTTPError
import requests  # To make cURL requests
import zlib  # to compress base64 str

# Internal imports
from ...config import db, auth, api_key, create_error_message, raise_error


class User:
    """
    This class acts as the user model for our database. It contains all the
    methods related to users in the firebase database.
    """

    @staticmethod
    def signup(email: str, password: str, fullname: str, username: str,
               avatar: str):
        """
        Creates a user with an email and password. Also adds provided info into
        database.

        Arguments:
            username {str} -> user's username
            fullname {str} -> user's full name
            email {str} -> user's email
            password {str} -> user's password
            avatar {str} -> link to user's  avatar

        Returns:
            response object -> If valid call, returns the uid of the user and a
            200 status code. Otherwise, returns a blank body and an error code.
        """
        try:
            # Create a user object through firebase call
            user = auth.create_user_with_email_and_password(email, password)

            # Data to be added into DB for the user
            data = {
                "username": username,
                "fullname": fullname,
                "email": email,
                "avatar": avatar
            }

            # Insert user to DB with local id as key
            db.child("users").child(user["localId"]).set(data)

            # Return the user uid
            data = jsonify({"uid": user["localId"]})
            return make_response(data, 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)

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
        try:
            # Sign in the user with firebase
            user = auth.sign_in_with_email_and_password(email, password)

            # Return the user uid
            data = jsonify({"uid": user["localId"]})
            return make_response(data, 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)

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
        try:
            # Get the data for the user in the users DB table and return it
            query = db.child("users").child(uid).get().val()
            return make_response(jsonify(query), 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)

    @staticmethod
    def update(uid: str, username: str, fullname: str, avatar: str):
        """
        Update a user's information based on their uid.

        Arguments:
            uid {str} -> The user's unique id
            username {str} -> The user's new username (if set)
            fullname {str} -> The user's new full name (if set)
            avatar {str} -> The user's new avatar (if set)

        Returns:
            response object -> If valid call, returns the user's new info and a
            200 status code. Otherwise, returns a blank body and an error code.
        """
        try:
            # Set the fields to be updated
            data = {}
            if username is not None:
                data['username'] = username
            if fullname is not None:
                data['fullname'] = fullname
            if avatar is not None:
                data['avatar'] = avatar

            # Update the data in the DB for this user and return a status code
            query = db.child("users").child(uid).update(data)
            return make_response(query, 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)

    @staticmethod
    def update_credentials(uid: str, email: str, password: str, u_email: str,
                           u_password: str):
        try:
            user = auth.sign_in_with_email_and_password(email, password)

            headers = {'Content-Type': 'application/json'}
            params = {'key': api_key}

            data = ('{"idToken":"' + user['idToken'] + '",'
                    '"email":"' + u_email + '",'
                    '"returnSecureToken":true}' if u_email else
                    '{"idToken":"' + user['idToken'] + '",'
                    '"password":"' + u_password + '",'
                    '"returnSecureToken":true}')

            request = requests.post('https://identitytoolkit.googleapis.com/'
                                    'v1/accounts:update',
                                    headers=headers, params=params, data=data)

            if request.status_code != requests.codes.ok:
                raise_error(request)

            reason = ('Email updated.' if u_email else 'Password updated')

            if u_email:
                db.child("users").child(uid).update({'email': u_email})

            return make_response({'reason': reason}, 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)

    @staticmethod
    def delete(uid: str, email: str, password: str):
        try:
            user = auth.sign_in_with_email_and_password(email, password)

            headers = {'Content-Type': 'application/json'}
            params = {'key': api_key}
            data = ('{"idToken":"' + user['idToken'] +
                    '", "returnSecureToken":true}')

            request = requests.post('https://identitytoolkit.googleapis.com/'
                                    'v1/accounts:delete',
                                    headers=headers, params=params, data=data)

            if request.status_code != requests.codes.ok:
                raise_error(request)

            db.child("users").child(uid).remove()

            return make_response({'reason': 'User deleted.'}, 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)
