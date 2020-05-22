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
                A list of dictionaries containing the details of each trophy.
        """
        all_trophies = db.child("trophies").get()
        trophies = []

        for data in all_trophies.each():
            trophy_info = data.val()

            trophies.append(trophy_info)

        return trophies

    @staticmethod
    def get_trophy_by_id(self, trophy_id: int):
        """
            Retrieves a single trophy by its corresponding id.

            Arguments:
                trophy_id {int}: The trophy's unique id.

            Returns:
                A dictionary containing information about the trophy that
                corresponds to the given id.

                Returns None if not found.
        """
        trophies = self.get_all_trophies(self)

        # get the first trophy that corresponds to the given trophy id
        return next((x for x in trophies if x.id == trophy_id), None)

    # @staticmethod
    # def get_user_trophies(self, u_id: int):
    #     """
    #         Retrieves all of the user's trophies.

    #         Arguments:
    #             u_id {int}: The user's unique id.

    #         Returns:
    #             response_object -> If valid call, returns the list of user's
    #             trophies and a 200 status code.
    #     """
    #     all_trophies = self.get_all_trophies()
    #     user_trophies = []

    #     # get all trophies earned..
    #     all_trophies = db.child("earned_trophies").get()
    #     for data in all_trophies.each():
    #         trophy_info = data.val()

    #         if trophy_info["user_id"] == u_id:
    #             trophy_id = trophy_info["trophy_id"]
    #             trophy_info["trophy_details"] = self.get_trophy_by_id(trophy_id)
    #             user_trophies.append(trophy_info)

    #     # question: do we need to handle the case where the user isn't found?
    #     #           it doesn't seem to cause a problem b/c it'll just
    #     #           return a list of empty trophies.
    #     return make_response(user_trophies, 200)

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
        results = db.child("trophies").get()
        return make_response(results, 200)
