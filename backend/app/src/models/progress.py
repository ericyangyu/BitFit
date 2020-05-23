"""
Description: Recieves data from the middleware, and makes the correct Pyrebase

Authors: Jeremy, Steven
"""

# External imports
from flask import make_response, jsonify    # Flask packages
from requests.exceptions import HTTPError   # To access HTTPError

# Internal imports
from ...config import db, create_error_message  # , raise_detailed_error


class Progress:
    """
    This class shows the completed workouts of a user
    """

    @staticmethod
    def update_stats(uid: str, body_part: str, exp: float, level: int):
        """

        Arguments:
            uid {str} -> user's unique id
            body_part {str} -> the body part that was worked out
            exp {float} -> the experience of the body part
            level {integer} -> the level of the current body part

        Returns:
            response object -> If valid call, returns the uid of the user and a
            200 status code. Otherwise, returns a blank body and an error code.
        """
        try:
            # Data to be added into DB for the user
            data = {
                "exp": exp,
                "level": level
            }

            # Insert user to DB with local id as key
            query = db.child("progress").child(uid).child(body_part).update(data)

            # Return the user uid
            return make_response(query, 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)

    @staticmethod
    def get(uid: str):
        """
        Fetches user information from the database.

        Arguments:
            uid {str} -> The user's unique id

        Returns:
            response object -> If valid call, returns the user's info and a
            200 status code. Otherwise, returns a blank body and an error code.
        """
        try:
            # Get the data for the user in the users DB table and return it
            query = db.child("progress").child(uid).get().val()
            return make_response(jsonify(query), 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)
