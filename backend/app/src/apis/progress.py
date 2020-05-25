"""
description: completed workouts routes to receive workout-related api calls

Author: Jeremy, Steven
"""


# Flask packages
from flask import Blueprint, request
from flask_cors import CORS

# Internal imports
from ..models.progress import Progress  # User model

# Define the user_api blueprint route for all user-related api calls
progress_api = Blueprint("progress", __name__)
CORS(progress_api, supports_credentials=True)


@progress_api.route("/update_stats", methods=["post"])
def update_stats():
    """
    updates a user's stats.

    expected data:
        uid -> user's uid
        body_part -> the body
        exp -> the experience of the body part
        level -> the level of the body part

    expected response:
        empty json with 200 status code
    """
    print(request.json)
    # read incoming request data body
    uid = request.json["uid"]
    body_part_id = request.json["body_part_id"]
    exp = request.json["exp"]
    level = request.json["level"]

    # delegate to user model
    return Progress.update_stats(uid, body_part_id, exp, level)


@progress_api.route("/reset_stats", methods=["post"])
def reset_stats():
    """
    resets a user's stats.
    """
    # read incoming request data body
    uid = request.json["uid"]

    # delegate to user model
    return Progress.reset_stats(uid)


@progress_api.route("/get", methods=["POST"])
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
    return Progress.get(uid)
