"""
Description: Recieves data from the middleware, and makes the correct Pyrebase
API calls to grab workouts from Firebase. Contains error checking
for errors in calls to Firebase.

Authors: Jaz, Sharan, Eric, Steven
"""

# External imports
from flask import make_response, jsonify  # Flask packages
from requests.exceptions import HTTPError  # To access HTTPError

# Internal imports
# from ...config import db, auth, create_error_message  # , raise_detailed_error
from ...config import db, create_error_message  # , raise_detailed_error


class Workouts:
    """
    This class acts as the Workouts model for our database. It contains all the
    methods related to workouts in the firebase database.
    """

    @staticmethod
    def get_workouts(body_part_name):
        """
        Gets the workouts from the db

        Arguments:

        Returns:
            response object -> If valid call, returns the workouts and a
            200 status code. Otherwise, returns a blank body and an error code.
        """
        try:
            # Get the data for the user in the users DB table and return it
            query = (
                db.child("workouts")
                .order_by_child("body_part_name")
                .equal_to(body_part_name)
                .get()
                .val()
            )
            return make_response(jsonify(query), 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)

    @staticmethod
    def create_completed_workout(uid: str, name: str, data: str):
        """
        Updates the completed_workouts table with this workout for this user

        Arguments:
            uid {str} -> The user's unique id
            name {str} -> The name of the workout
            data {dict} -> The data for this workout

        Returns:
            response object -> If valid call, returns the user's new info and a
            200 status code. Otherwise, returns a blank body and an error code.
        """
        try:
            # reference to trophies table
            ref = db.child("completed_workouts")
            # new UID to not overwrite previously completed workouts
            key = ref.generate_key()
            # add these user specific progress bars to the progress table in db
            query = ref.child(uid).child(key).child(name).update(data)

            return make_response(jsonify(query), 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)

    @staticmethod
    def get_completed_workouts(uid: str):
        """
        Gets the completed workouts for this user

        Arguments:
            uid {str} -> The user's unique id

        Returns:
            response object -> If valid call, returns the user's new info and a
            200 status code. Otherwise, returns a blank body and an error code.
        """
        try:
            # reference to trophies table
            ref = db.child("completed_workouts")
            # add these user specific progress bars to the progress table in db
            query = ref.child(uid).get().val()

            return make_response(jsonify(query), 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)
