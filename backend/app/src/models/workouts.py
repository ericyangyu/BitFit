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
    def get_workouts():
        """
        Gets the workouts from the db

        Arguments:

        Returns:
            response object -> If valid call, returns the workouts and a
            200 status code. Otherwise, returns a blank body and an error code.
        """
        try:
            # Get the data for the user in the users DB table and return it
            query = db.child("workouts").get().val()
            return make_response(jsonify(query), 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)

