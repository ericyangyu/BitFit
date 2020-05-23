"""
Description: Recieves data from the middleware, and makes the correct Pyrebase
API calls to update data about the user in Firebase. Contains error checking
for errors in calls to Firebase.

Authors: Imran, Sharan, Nour
"""

# External imports
from flask import make_response, jsonify  # Flask packages
from requests.exceptions import HTTPError  # To access HTTPError

# Internal imports
# from ...config import db, auth, create_error_message  # , raise_detailed_error
from ...config import db, create_error_message  # , raise_detailed_error


class BodyParts:

    @staticmethod
    def get_body_parts():
        # try:
        #     # Create a user object through firebase call
        #     user = auth.create_user_with_email_and_password(email, password)

        #     # Data to be added into DB for the user
        #     data = {
        #         "username": username,
        #         "fullname": fullname,
        #         "email": email,
        #         "avatar": avatar
        #     }

        #     # Insert user to DB with local id as key
        #     db.child("users").child(user["localId"]).set(data)

        #     # Return the user uid
        #     data = jsonify({"uid": user["localId"]})
        #     return make_response(data, 200)

        try:
            # Get the data for the user in the users DB table and return it
            query = db.child("body_parts").get().val()
            return make_response(jsonify(query), 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)


# class User:
#     """
#     This class acts as the user model for our database. It contains all the
#     methods related to users in the firebase database.
#     """

#     @staticmethod
#     def signup(email: str, password: str, fullname: str, username: str,
#                avatar: str):
#         """
#         Creates a user with an email and password. Also adds provided info into
#         database.

#         Arguments:
#             username {str} -> user's username
#             fullname {str} -> user's full name
#             email {str} -> user's email
#             password {str} -> user's password
#             avatar {str} -> link to user's  avatar

#         Returns:
#             response object -> If valid call, returns the uid of the user and a
#             200 status code. Otherwise, returns a blank body and an error code.
#         """
#         try:
#             # Create a user object through firebase call
#             user = auth.create_user_with_email_and_password(email, password)

#             # Data to be added into DB for the user
#             data = {
#                 "username": username,
#                 "fullname": fullname,
#                 "email": email,
#                 "avatar": avatar
#             }

#             # Insert user to DB with local id as key
#             db.child("users").child(user["localId"]).set(data)

#             # Return the user uid
#             data = jsonify({"uid": user["localId"]})
#             return make_response(data, 200)

#         except HTTPError as e:
#             # Handle exception and return correct response object
#             return create_error_message(e)

#     @staticmethod
#     def login(email: str, password: str):
#         """
#         Logins in a user with an email and password.

#         Arguments:
#             email {str} -> entered email
#             password {str} -> entered password

#         Returns:
#             response object -> If valid call, returns the uid of the user and a
#             200 status code. Otherwise, returns a blank body and an error code.
#         """
#         try:
#             # Sign in the user with firebase
#             user = auth.sign_in_with_email_and_password(email, password)

#             # Return the user uid
#             data = jsonify({"uid": user["localId"]})
#             return make_response(data, 200)

#         except HTTPError as e:
#             # Handle exception and return correct response object
#             return create_error_message(e)

#     @staticmethod
#     def get(uid: str):
#         """
#         Fetches user information from the database.

#         Arguments:
#             uid {str} -> The user's unique id

#         Returns:
#             response object -> If valid call, returns the user's info and a
#             200 status code. Otherwise, returns a blank body and an error code.
#         """
#         try:
#             # Get the data for the user in the users DB table and return it
#             query = db.child("users").child(uid).get().val()
#             return make_response(jsonify(query), 200)

#         except HTTPError as e:
#             # Handle exception and return correct response object
#             return create_error_message(e)

#     @staticmethod
#     def update(uid: str, username: str, fullname: str, avatar: str):
#         """
#         Update a user's information based on their uid.

#         Arguments:
#             uid {str} -> The user's unique id
#             username {str} -> The user's new username (if set)
#             fullname {str} -> The user's new full name (if set)
#             avatar {str} -> The user's new avatar (if set)

#         Returns:
#             response object -> If valid call, returns the user's new info and a
#             200 status code. Otherwise, returns a blank body and an error code.
#         """
#         try:
#             # Set the fields to be updated
#             data = {}
#             if username is not None:
#                 data['fullname'] = fullname
#             if fullname is not None:
#                 data['username'] = username
#             if avatar is not None:
#                 data['avatar'] = avatar

#             # Update the data in the DB for this user and return a status code
#             query = db.child("users").child(uid).update(data)
#             return make_response(query, 200)

#         except HTTPError as e:
#             # Handle exception and return correct response object
#             return create_error_message(e)

    # NOTE: In progress, needs user idToken to work
    # @staticmethod
    # def delete(uid: str, tid: str):
    #     try:
    #         # Remove the user from the database users table
    #         results = db.child("users").child(uid).remove()
    #
    #         # Remove the user from the firebase authentication table
    #         ref = "https://identitytoolkit.googleapis.com/v1/accounts:" +
    #               "delete?key={0}"
    #         request_ref = ref.format(auth.api_key)
    #         headers = {"content-type": "application/json; charset=UTF-8"}
    #         data = json.dumps({
    #            "returnSecureToken": True,
    #             # "idToken": user["idToken"]
    #         })
    #
    #         request_object = requests.post(request_ref, headers=headers,
    #                                        data=data)
    #
    #         raise_detailed_error(request_object)
    #         return make_response(jsonify(request_object.text), 200)
    #
    #     except HTTPError as e:
    #         return create_error_response(e)
