"""
Description: Handles getting querying the database for the the workout focuses.
 
Authors: Sharan, Steve, Eric, Jaz
"""


# External imports
from flask import make_response, jsonify  # Flask packages
from requests.exceptions import HTTPError  # To access HTTPError

# Internal imports
from ...config import db, create_error_message  


class BodyParts:
    """
    This class acts as the Bodyparts model for our database. It contains
    methods to query the database and get the workout body focuses. 
    """

    @staticmethod
    def get_body_parts():
        """
        Gets the body part focuses formt eh database

        Expected response:
        Returns object-> if valid call, returns the workout focuses:
        Arms, Legs, Chest, Back, Core
        """

        try:
            # Get the data for the user in the users DB table and return it
            query = db.child("body_parts").get().val()
            return make_response(jsonify(query), 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)
