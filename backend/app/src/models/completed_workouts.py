"""
Description: Recieves data from the middleware, and makes the correct Pyrebase
API calls to update data about the user's workouts in Firebase. Contains error checking
for errors in calls to Firebase.

Authors: Jeremy, Steven
"""

# External imports
from flask import make_response, jsonify  # Flask packages
from requests.exceptions import HTTPError  # To access HTTPError

# Internal imports
from ...config import db, auth, create_error_message  # , raise_detailed_error

class CompletedWorkouts:
    """
    This class shows the completed workouts of a user
    """

    @staticmethod
    def addWorkouts(uid: integer, workout_id: integer, duration: time):
        """

        Arguments:
            uid {integer} -> user's unique id
            workout_id {integer} -> the type of workout
            duration {time} -> time spent on workout

        Returns:
            response object -> If valid call, returns the uid of the user and a
            200 status code. Otherwise, returns a blank body and an error code.
        """
        try:

            


            # Data to be added into DB for the user
            data = {
                "workout_id": workout_id,
                "duration": duration,
            }

            # Insert user to DB with local id as key
            query = db.child("completed_workouts").child(uid).update(data)

            # Return the user uid
            return make_response(query, 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)
