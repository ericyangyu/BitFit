"""
Description: Recieves data from the middleware, and makes the correct Pyrebase
API calls to update data about the user's workouts in Firebase. Contains error
checking for errors in calls to Firebase.

Authors: Jeremy, Steven
"""

# External imports
from flask import make_response # Flask packages
from requests.exceptions import HTTPError  # To access HTTPError

# Internal imports
from ...config import db, create_error_message  # , raise_detailed_error


class CompletedWorkouts:
    """
    This class shows the completed workouts of a user
    """

    @staticmethod
    def add_workouts(uid: str, workout_name: str, duration: int):
        """

        Arguments:
            uid {string} -> user's unique id
            workout_id {string} -> the unique id of the workout
            workout_name {string} -> the workout name
            duration {integer} -> time (in seconds) spent on workout

        Returns:
            response object -> If valid call, returns the uid of the user and a
            200 status code. Otherwise, returns a blank body and an error code.
        """
        try:

            


            # Data to be added into DB for the user
            data = {
                "duration": duration,
                "date": date
            }

            ref = db.child("completed_workouts")
            key = ref.generate_key()

            # Insert user to DB with local id as key
            query = db.child("completed_workouts").child(uid).child(key).child(workout_name).update(data)

            # Return the user uid
            return make_response(query, 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)
