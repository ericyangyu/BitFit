"""
Description: Trophy routes to receive trophy-related API calls from the frontend.
Delegates to the trophy model to interact with the database. Handles request data
and only accepts POST requests (this makes it easier to pass in data in
frontend code)

NOTE: Data parsing should be handeled here before delegating to user model to
access the database.

NOTE: CREATE, DELETE method for a single user Trophy is in Fire model.

NOTE: Database calls should not be made in this file.

Authors: Jeffrey
"""

# External imports

# Flask packages
from flask import Blueprint, request
from flask_cors import CORS

# Internal imports
from ..models.trophy import Trophy  # Trophy model

# Define the trophy_api blueprint route for all trophy-related api calls
trophy_api = Blueprint("trophy_api", __name__)
CORS(trophy_api, supports_credentials=True)


@trophy_api.route("/get_user_trophies", methods=["POST"])
def get_user_trophies():
    """
    Gets all the trophies for this specific user.

    Expected data:
        uid -> user's uid

    Expected response:
        trophy -> dictionary containing each trophy for this user
    """
    # Read incoming request data body
    uid = request.json["uid"]

    # Delegate to user model
    return Trophy.get_user_trophies(uid)


@trophy_api.route("/update_user_trophies", methods=["POST"])
def update_user_trophies():
    """
    Updates a a trophy for this specific user.

    Expected data:
        uid -> user's uid

    Expected response:
        trophy -> dictionary containing each trophy for this user
    """
    # Read incoming request data body
    uid = request.json["uid"]
    date = request.json["date"]

    # Delegate to user model
    return Trophy.update_user_trophies(uid, date)
