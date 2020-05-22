"""
description: completed workouts routes to receive workout-related api calls

Author: Jeremy, Steven
"""


# Flask packages
from flask import Blueprint, request
from flask_cors import CORS

# Internal imports
from ..models.progress import UpdateStats  # User model

# Define the user_api blueprint route for all user-related api calls
progress = Blueprint("progress", __name__)
CORS(progress, supports_credentials=True)


@progress.route("/update_stats", methods=["POST"])
def update_stats():
    """
    Updates a user's stats.

    Expected data:
        uid -> user's uid
        body_part -> the body
        exp -> the experience of the body part
        level -> the level of the body part

    Expected response:
        empty json with 200 status code
    """
    # Read incoming request data body
    uid = request.json["uid"]
    body_part = request.json["body_part"]
    exp = request.json["exp"]
    level = request.json["level"]

    # Delegate to user model
    return UpdateStats.update_stats(uid, body_part, exp, level)

