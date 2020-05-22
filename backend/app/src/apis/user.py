"""
description: user routes to receive user-related api calls from the frontend.
delegates to the user model to interact with the database. handles request data
and only accepts post requests (this makes it easier to pass in data in
frontend code)

NOTE: Data parsing should be handeled here before delegating to user model to
access the database.

NOTE: Database calls should not be made in this file.

Authors: Imran, Sharan, Nour
"""

# External imports

# Flask packages
from flask import Blueprint, request
from flask_cors import CORS

# Internal imports
from ..models.user import User  # User model

# Define the user_api blueprint route for all user-related api calls
user_api = Blueprint("user_api", __name__)
CORS(user_api, supports_credentials=True)


@user_api.route("/signup", methods=["POST"])
def signup():
    """
    Creates a user based on provided email and password.

    Expected data:
        username -> user's username
        fullname -> user's full name
        email -> user's email
        password -> user's password
        avatar -> link to user's avatar

    Expected response:
        uid -> user's local id (key when accessing user in db)
    """
    # Read incoming request data body
    username = request.json["username"]
    fullname = request.json["fullname"]
    email = request.json["email"]
    password = request.json["password"]
    avatar = request.json["avatar"]

    # Delegate to user model
    return User.signup(email, password, fullname, username, avatar)


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
    # Read incoming request data body
    email = request.json["email"]
    password = request.json["password"]

    # Delegate to user model
    return User.login(email, password)


@user_api.route("/get", methods=["POST"])
def get():
    """
    Fetches a user's information based on their uid.

    Expected data:
        uid -> user's uid

    Expected response:
        username -> user's username
        fullname -> user's full name
        email -> user's email
        password -> user's password
        avatar -> link to user's avatar
    """
    # Read incoming request data body
    uid = request.json["uid"]

    # Delegate to user model
    return User.get(uid)


@user_api.route("/update", methods=["POST"])
def update():
    """
    Updates a user's information based on their uid.

    Expected data:
        uid -> user's uid
        The following are optional (depends on field being updated):
        username -> user's username
        fullname -> user's full name
        avatar -> link to user's avatar

    Expected response:
        empty json with 200 status code
    """
    # Read incoming request data body
    uid = request.json["uid"]
    username = request.json["username"] if "username" in request.json else None
    fullname = request.json["fullname"] if "fullname" in request.json else None
    avatar = request.json["avatar"] if "avatar" in request.json else None

    # Delegate to user model
    return User.update(uid, fullname, username, avatar)


# NOTE: In progress, needs user idToken to work
# @user_api.route("/delete", methods=["POST"])
# def delete():
# """
# Deletes a user with specific uid.
#
# Expected data:
#
# Expected response:
#
# """
#     # Read incoming request data body
#     uid = request.json["uid"]
#     tid = request.json["tid"]
#
#     # Delegate to user model
#     return User.delete(uid, tokenId)
