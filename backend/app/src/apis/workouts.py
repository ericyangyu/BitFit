"""
Description: User routes to receive workouts-related API calls from the frontend.
Delegates to the Workouts model to interact with the database. Handles request data
and only accepts POST requests (this makes it easier to pass in data in
frontend code)

NOTE: Data parsing should be handled here before delegating to user model to
access the database.

NOTE: Database calls should not be made in this file.

Authors: Sharan, Jaz, Steven, Eric
"""

# External imports

# Flask packages
from flask import Blueprint, request
from flask_cors import CORS

# Internal imports
from ..models.workouts import Workouts  # User model

# Define the user_api blueprint route for all user-related api calls
workouts_api = Blueprint("workouts_api", __name__)
CORS(workouts_api, supports_credentials=True)


@workouts_api.route("/get_workouts", methods=["POST"])
def get_workouts():
    """
    Gets all the workouts from the dataase

    Expected data:

    Expected response:
        workouts -> all workouts in database
    """
    body_part_name = request.json["body_part_name"]
    # Delegate to user model
    return Workouts.get_workouts(body_part_name)


@workouts_api.route("/create_completed_workout", methods=["POST"])
def create_completed_workout():
    """
    Completes a workout for this user

    Expected data:
        uid {str} --> The users id
        
    
    Expected response:
        completed workout -> The completed workout object
    """
    uid = request.json["uid"]
    name = request.json["name"]
    data = request.json["data"]

    # Delegate to workouts model
    return Workouts.create_completed_workout(uid, name, data)


@workouts_api.route("/get_completed_workouts", methods=["POST"])
def get_completed_workouts():
    """
    Gets the completed workouts for this user.

    Expected data:
        uid {str} --> The users id
        
    
    Expected response:
        completed workout -> The completed workout object
    """
    uid = request.json["uid"]

    # Delegate to workouts model
    return Workouts.get_completed_workouts(uid)
