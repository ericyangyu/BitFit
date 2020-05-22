"""
Description: Recieves data from the middleware, and makes the correct Pyrebase

Authors: Jeremy, Steven
"""

# External imports
from flask import make_response # Flask packages
from requests.exceptions import HTTPError  # To access HTTPError

# Internal imports
from ...config import db, create_error_message  # , raise_detailed_error


class UpdateStats:
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
            query = db.child("update_stats").child(uid).child(body_part).update(data)

            # Return the user uid
            return make_response(query, 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)
