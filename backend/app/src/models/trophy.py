"""
Description: Recieves data from the middleware, and makes the correct Pyrebase
API calls to update data about the user's trophies in Firebase.
Contains error checking for errors in calls to Firebase.

Authors: Jeffrey
"""

# External imports
from flask import make_response, jsonify  # Flask packages
from requests.exceptions import HTTPError  # To access HTTPError

# Internal imports
from ...config import db, auth, create_error_message


class Trophy:
    """
    This class acts as the trophy model for our database. It contains all the
    methods related to trophies in the firebase database.
    """

    @staticmethod
    def get_all_trophies(self):
        """
            Retrieves every single trophy in the trophy database.

            Returns:
                A dictionary in which the keys correspond to a trophy id and
                its value corresponds to its actual trophy data.
        """
        trophies = {}

        for data in db.child("trophies").get().each():
            trophy = data.val()
            trophies[trophy['id']] = trophy

        return trophies

    @staticmethod
    def get_user_trophies(self, uid: int):
        """
            Retrieves all of the user's trophies.

            Arguments:
                uid {int}: The user's unique id.
            
            Returns:
                response_object -> If valid call, returns the list of user's
                trophies and a 200 status code.
        """

        all_trophies = self.get_all_trophies()

        results = db.child("earned_trophies").order_by_child("user_id").equal_to(uid).get()
        trophies = []

        for troph in results:
            data = troph.val()

            # include another field that includes the trophy details
            #   to avoid an extra API call on front-end
            data['details'] = all_trophies[data['trophy_id']]
            trophies.append(data)
        
        return make_response(trophies, 200)
