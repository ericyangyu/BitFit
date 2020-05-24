"""
Description: Recieves data from the middleware, and makes the correct Pyrebase
API calls to update data about the user in Firebase. Contains error checking
for errors in calls to Firebase.

Authors: Imran, Sharan, Nour
"""

# External imports
from flask import make_response, jsonify, request  # Flask packages
from requests.exceptions import HTTPError  # To access HTTPError
import requests  # To make cURL requests
import json  # jsonify dictionaries
import zlib  # to compress base64 str

# Internal imports
from ...config import db, auth, create_error_message, raise_error


class User:
    """
    This class acts as the user model for our database. It contains all the
    methods related to users in the firebase database.
    """

    # creates progress bars specific for this user
    @classmethod
    def create_user_progress_levels(cls, uid):
        # reference to body_parts table
        ref = db.child("body_parts")
        # get all the body_parts
        body_parts = ref.get()

        # create a new progress bar specific for this user for each body_part in db
        for bp in body_parts.each():
            User.create_user_progress_level(uid, bp.key())
        return

    # create a progress bar and update the database
    @classmethod
    def create_user_progress_level(cls, uid, bpid):
        # reference to body_parts table
        ref = db.child("progress")

        data = {"exp": "0.0", "level": "0.0"}

        # add these user specific progress bars to the progress table in db
        ref.child(uid).child(bpid).update(data)
        return

    @classmethod
    def create_user_earned_trophies(cls, uid):
        # reference to trophy table
        ref = db.child("trophies")

        # get all the trophies
        trophies = ref.get()

        # store all trophies fo this user
        user_trophies = []

        for trophy in trophies.each():
            key = trophy.key()
            data = {
                "date_earned": "",
                "progress_to_req": "0.0",
            }
            user_trophies.append((uid, key, data))

        # create 9 base trophies
        for trophy in user_trophies:
            User.create_user_earned_trophy(*trophy)
        return

    @classmethod
    def create_user_earned_trophy(cls, uid, name, trophy):
        # reference to trophies table
        ref = db.child("earned_trophies")

        # add these user specific progress bars to the progress table in db
        ref.child(uid).child(name).update(trophy)
        return

    @staticmethod
    def signup(email: str, password: str, fullname: str, username: str, avatar: str):
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
                "avatar": avatar,
            }

            # Insert user to DB with local id as key
            db.child("users").child(user["localId"]).set(data)

            # Initalize new users progress levels and earned trophies
            User.create_user_progress_levels(user["localId"])
            User.create_user_earned_trophies(user["localId"])

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
                data["username"] = username
            if fullname is not None:
                data["fullname"] = fullname
            if avatar is not None:
                data["avatar"] = avatar

            # Update the data in the DB for this user and return a status code
            query = db.child("users").child(uid).update(data)
            return make_response(query, 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)

    @staticmethod
    def update_credentials(
        uid: str, email: str, password: str, u_email: str, u_password: str
    ):
        try:
            # sign user in for "idToken"
            user = auth.sign_in_with_email_and_password(email, password)

            # update the user from the firebase authentication table
            request_ref = "https://identitytoolkit.googleapis.com/v1/accounts:update?key={0}".format(
                auth.api_key
            )
            headers = {"content-type": "application/json; charset=UTF-8"}

            # Either update email or password
            if u_email:
                data = json.dumps(
                    {
                        "email": u_email,
                        "password": password,
                        "returnSecureToken": True,
                        "idToken": user["idToken"],
                    }
                )
            else:
                data = json.dumps(
                    {
                        "password": u_password,
                        "returnSecureToken": True,
                        "idToken": user["idToken"],
                    }
                )

            # get the response
            request_object = requests.post(request_ref, headers=headers, data=data)

            # check if valid response
            if request_object.status_code != requests.codes.ok:
                raise_error(request_object)

            # define the response
            if u_email:
                reason = "Email updated."
            else:
                reason = "Password updated"

            # update the DB
            if u_email:
                db.child("users").child(uid).update({"email": u_email})

            return make_response({"reason": reason}, 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)

    @staticmethod
    def delete(uid: str, email: str, password: str):
        try:
            # sign user in for "idToken"
            user = auth.sign_in_with_email_and_password(email, password)

            # remove the user from the firebase authentication table
            request_ref = "https://identitytoolkit.googleapis.com/v1/accounts:delete?key={0}".format(
                auth.api_key
            )
            headers = {"content-type": "application/json; charset=UTF-8"}
            data = json.dumps(
                {
                    "email": email,
                    "password": password,
                    "returnSecureToken": True,
                    "idToken": user["idToken"],
                }
            )
            # get the response
            request_object = requests.post(request_ref, headers=headers, data=data)

            # check if valid response
            if request_object.status_code != requests.codes.ok:
                raise_error(request_object)

            # remove the users data from the database
            db.child("users").child(uid).remove()
            db.child("earned_trophies").child(uid).remove()
            db.child("progress").child(uid).remove()

            return make_response({"reason": "User deleted."}, 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)
