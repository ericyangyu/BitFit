"""
description: completed workouts routes to receive workout-related api calls from the frontend.
delegates to the completed_workouts model to interact with the database. handles request data
and only accepts post requests (this makes it easier to pass in data in
frontend code)

Author: Jeremy, Steven
"""


# Flask packages
from flask import Blueprint, request
from flask_cors import CORS

# Internal imports
from ..models.completed_workouts import CompletedWorkouts  # User model

# Define the user_api blueprint route for all user-related api calls
user_api = Blueprint("user_api", __name__)
CORS(user_api, supports_credentials=True)


@completed_workouts.route("/add_workout", methods=["POST"])
def add_Workout():
    """
    Updates a user's information based on their uid.

    Expected data:
        uid -> user's uid
        workout_id -> the type of workout 
        duration -> the time spent on workout

    Expected response:
        empty json with 200 status code
    """
    # Read incoming request data body
    uid = request.json["uid"]
    workout_id = request.json["workout_id"]
    duration = request.json["duration"] 

    # Delegate to user model
    return CompletedWorkouts.add_Workout(uid, workout_id, duration)