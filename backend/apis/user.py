"""File to recieve API calls from the front about the user.

Description: Recieves the intial REST API calls from the frontend related to users. 
Handles the request data and only accepts POST requests. 
Calls the related backend user API calls to firebase.

NOTE: Any parsing of the data should be handled here before calls are made to the DB.

Authors: Imran, Sharan, Nour
"""
####### External imports #######
# import related flask packages
from flask import Blueprint, request, jsonify
from flask_cors import CORS

####### Interal imports #######
# import the User class
from models.user import User

# define the user_api blueprint route for all user related api calls
user_api = Blueprint("user_api", __name__)
CORS(user_api, supports_credentials=True)


@user_api.route("/create_user", methods=["POST"])
def create_user():
    """Creates a user based on provided email and password.

    Returns:
        Reponse object that contins data and a status code.
    """
    # read incoming request data body
    email = request.json["email"]
    password = request.json["password"]
    fullname = request.json["fullname"]
    username = request.json["username"]
    avatar = request.json["avatar"]

    # make call to create user using firebase
    response = User.create_user(email, password, fullname, username, avatar)

    return response


@user_api.route("/login_user", methods=["POST"])
def login_user():
    """Logins in a user based on provided email and password.

    Returns:
        Reponse object that contins data and a status code.
    """
    # read incoming request data body
    email = request.json["email"]
    password = request.json["password"]
    # make call to login user using firebase
    response = User.login_user(email, password)
    return response


@user_api.route("/get_user", methods=["POST"])
def get_user():
    """Gets information about a user with specific UID.

    Returns:
        Reponse object that contins data about the user and a status code.
    """
    # read incoming request data body
    UID = request.json["UID"]
    # make call to get user data using firebase
    response = User.get_user(UID)
    return response


@user_api.route("/update_user", methods=["POST"])
def update_user():
    """Updates data about a user with specific UID.

    Returns:
        Reponse object that contains only a status code.
    """
    # read incoming request data body
    UID = request.json["UID"]
    fullname = request.json["fullname"]
    username = request.json["username"]
    avatar = request.json["avatar"]
    # make call to update user data using firebase
    response = User.update_user(UID, fullname, username, avatar)

    return response


# NOTE: In progress, needs user idToken to work
# @user_api.route("/delete_user", methods=["POST"])
# def delete_user():
# """Deletes a user with specific UID.

# Returns:
#     Reponse object that contains only a status code.
# """
#     # read incoming request data body
#     UID = request.json["UID"]
#     tokenId = request.json["tokenId"]
#     # make call to delete user data using firebase
#     response = User.delete_user(UID, tokenId)
#     return response
