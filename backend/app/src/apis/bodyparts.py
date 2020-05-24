"""
Description: Handles getting querying the database for the the workout focuses.
Delegates to the user model to interact with the database.

NOTE: CREATE, UPDATE, DELETE method for a single body part is in Fire model.
 
Authors: Sharan, Steven, Eric, Jaz
"""


# Flask packages
from flask import Blueprint, request
from flask_cors import CORS

# Internal imports
from ..models.bodyparts import BodyParts  # User model

# Define the user_api blueprint route for all user-related api calls
bodyparts_api = Blueprint("bodyparts_api", __name__)
CORS(bodyparts_api, supports_credentials=True)

# READ
@bodyparts_api.route("/get_body_parts", methods=["POST"])
def get_body_parts():
    """
    Gets body part focuses from the database


    Expected response:
        Returns object -> if valid call, returns the workout focuses:
        Arms, Legs, Chests, Back, Core
    """

    # Delegate to user model
    return BodyParts.get_body_parts()
