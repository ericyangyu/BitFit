"""
Description: Handles Firebase Database initalization calls

Authors: Imran
"""

# External imports
from flask import make_response, jsonify, request  # Flask packages
from requests.exceptions import HTTPError  # To access HTTPError
import requests  # To make cURL requests
import json

# Internal imports
from ...config import db, auth, create_error_message, raise_error
from ...constants import *


class Fire:
    """
    This class acts as the fire model for our database. It contains all the
    methods related to initalizing the firebase database.
    """

    @classmethod
    def create_child(cls, table, name, data):
        db.child(table).child(name).update(data)
        return

    ############### BODY PARTS ################
    # Initializes the body parts table
    @classmethod
    def create_body_parts_table(cls):
        table_name = "body_parts"
        for body_part in ALL_BODY_PARTS:
            Fire.create_child(table_name, *body_part)
        return

    ############### WORKOUTS ################
    # Initializes the workouts table
    @classmethod
    def create_workouts_table(cls):
        table_name = "workouts"
        for workout in ALL_WORKOUTS:
            Fire.create_child(table_name, *workout)
        return

    ############### TROPHIES ################
    # initalizes the trophy table
    @classmethod
    def create_trophies_table(cls):
        table_name = "trophies"

        # create 9 base trophies
        for trophy in ALL_TROPHIES:
            Fire.create_child(table_name, *trophy)
        return

    @staticmethod
    def create():
        """
        Creates the trophies, workouts, and body parts tables.

        Arguments:
            None

        Returns:
            response object -> If valid call, returns the uid of the user and a
            200 status code. Otherwise, returns a blank body and an error code.
        """
        try:
            Fire.create_trophies_table()
            Fire.create_workouts_table()
            Fire.create_body_parts_table()
            return make_response({}, 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)
