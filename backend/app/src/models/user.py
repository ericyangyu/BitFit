"""
File to make API calls to firebase and return reponse objects about a user.

Description: Recieves data from the middleware, and makes the correct Pyrebase
API calls to update data about the user in firebase. Contains error checking
for errors in calls to Firebase.

Authors: Imran, Sharan, Nour
"""
# External imports #
# from __future__ import annotations
# from typing import Dict

# import package to load json
import json

# import flask related packages
from flask import make_response, jsonify

# import requests for api calls
# import requests

# import excpetion for HTTPErrors
from requests.exceptions import HTTPError

# IMPORTANT: Import sys and change the path to correctly import from config
# import sys

# Look above one line, changes path to import necessary firebase/pyrebase
# variables
# sys.path.append("../")
from ...config import db, auth


class User:
    """
    This class contains all of methods related to users in the firebase
    database.
    """

    def raise_detailed_error(self, request_object):
        """
        Used to raise an HTTPError if firebase calls are internally and not
        through pyrebase.

        Arguments:
            request_object {[type]} -- Recieved from requests.post/get/...()
                                       methods.

        Raises:
            HTTPError
        """

        try:
            request_object.raise_for_status()
        except HTTPError as e:
            # raise detailed error message
            # TODO: Check if we get a { "error" : "Permission denied." } and
            # handle automatically
            raise HTTPError(e, request_object.text)

    @staticmethod
    def create_error_message(self, e):
        """
        Handles exceptions in firebase calls, and returns correct error
        repsonses.

        Arguments:
            e {Exception} -- Wants an HTTPError exception, but can handle all
                             excpetions.

        Returns:
            A response object with an error code and no data
        """
        try:
            # access the JSON object from error that contains JSON info
            error_json = e.args[1]
            # access message filed in JSON error object
            code = json.loads(error_json)["error"]["code"]
            return make_response({}, code)
        except HTTPError:
            return make_response({}, 400)

    @staticmethod
    def create_user(
        email: str, password: str, fullname: str, username: str, avatar: str
    ):
        """
        Creates a user with an email and password. Also adds provided info into
        database.

        Arguments:
            email {str} -- The user's email
            password {str} -- The user's password
            fullname {str} -- The user's fullname
            username {str} -- The user's username
            avatar {str} -- The user's avatar

        Returns:
            Response object -- If valid call, returns the UID of the user and a
            status code.
        """
        try:
            # Create a user object through firebase call
            user = auth.create_user_with_email_and_password(email, password)

            # data to be added into DB for the user
            data = {
                "email": email,
                "fullname": fullname,
                "username": username,
                "avatar": avatar,
            }

            # add data into the users's table with the user's localId as its
            # key
            # results = db.child("users").child(user["localId"]).set(data)

            # return the user UID
            data = jsonify({"UID": user["localId"]})
            return make_response(data, 200)
        except HTTPError as e:
            # handle exception and return correct response object
            return User.create_error_message(e)

    @staticmethod
    def login_user(email: str, password: str):
        """
        Logins in a user with an email and password.

        Arguments:
            email {str} -- The user's email
            password {str} -- The user's password

        Returns:
            Response object -- If valid call, returns the UID of the user and a
            status code.
        """
        try:
            # sign in the user with firebase
            user = auth.sign_in_with_email_and_password(email, password)
            # return the user UID
            data = jsonify({"UID": user["localId"]})
            return make_response(data, 200)
        except HTTPError as e:
            # handle exception and return correct response object
            return User.create_error_message(e)

    @staticmethod
    def get_user(UID: str):
        """
        Get's information about the user from the database.

        Arguments:
            UID {str} -- The user's unique id

        Returns:
            Response object -- If valid call, returns the user's data in the DB
            and a status code.
        """
        try:
            # get the data for the user in the users DB table and return it
            results = db.child("users").child(UID).get().val()
            return make_response(jsonify(results), 200)
        except HTTPError as e:
            # handle exception and return correct response object
            return User.create_error_message(e)

    @staticmethod
    def update_user(UID: str, fullname: str, username: str, avatar: str):
        """
        Updates the user's information in the DB table users.

        Arguments:
            UID {str} -- The user's unique id
            fullname {str} -- The user's new full name
            username {str} -- The user's new username
            avatar {str} -- The user's new avatar

        Returns:
            [type] -- [description]
        """
        try:
            # the user's new data to update with
            data = {
                "fullname": fullname,
                "username": username,
                "avatar": avatar,
            }
            # updates the data in the db table users for this user and returns a status code
            results = db.child("users").child(UID).update(data)
            return make_response(results, 200)
        except HTTPError as e:
            # handle exception and return correct response object
            return User.create_error_message(e)

    # NOTE: In progress, needs user idToken to work
    # @staticmethod
    # def delete_user(UID: str):
    #     try:
    #         # remove the user from the database users table
    #         results = db.child("users").child(UID).remove()

    #         # remove the user from the firebase authentication table
    #         request_ref = ("https://identitytoolkit.googleapis.com/v1/accounts:delete?key={0}".format(
    #             auth.api_key
    #         )
    #         headers = {"content-type": "application/json; charset=UTF-8"}
    #         data = json.dumps(
    #             {
    #                 "returnSecureToken": True,
    #                 # "idToken": user["idToken"],
    #             }
    #         )
    #         request_object = requests.post(request_ref, headers=headers, data=data)
    #         # raise_detailed_error(request_object)
    #         return make_response(jsonify(request_object.text), 200)
    #     except HTTPError as e:
    #         return create_error_response(e)
