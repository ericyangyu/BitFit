"""
Description: Handles Firebase Database initalization calls.

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
        """
        Creates a specified child in the table with that key and data.

        Arguments:
            table {str} -> The table name to update
            name {str} -> The name of the child object
            data {dict} -> The data for the child object

        Returns:
            response object -> If valid call, returns the the updated data and a
            200 status code. Otherwise, returns a blank body and an error code.
        """
        return db.child(table).child(name).update(data)

    @classmethod
    def create_body_parts_table(cls):
        """
        Initalizes the body parts table.

        Arguments:
            None

        Returns:
            response object -> If valid call, returns a
            200 status code. Otherwise, returns a blank body and an error code.
        """
        table_name = "body_parts"
        for body_part in ALL_BODY_PARTS:
            Fire.create_child(table_name, *body_part)
        return make_response({}, 200)

    @classmethod
    def create_workouts_table(cls):
        """
        Initalizes the workouts table.

        Arguments:
            None

        Returns:
            response object -> If valid call, returns a
            200 status code. Otherwise, returns a blank body and an error code.
        """
        table_name = "workouts"
        for workout in ALL_WORKOUTS:
            Fire.create_child(table_name, *workout)
        return

    @classmethod
    def create_trophies_table(cls):
        """
        Initalizes the trophies table.

        Arguments:
            None

        Returns:
            response object -> If valid call, returns a
            200 status code. Otherwise, returns a blank body and an error code.
        """
        table_name = "trophies"
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
            response object -> If valid call, returns a
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

    @staticmethod
    def create_object(table: str, name: str, data: dict):
        """
        Creates a object in the specified table.

        Arguments:
            None

        Returns:
            response object -> If valid call, returns the object created and a
            200 status code. Otherwise, returns a blank body and an error code.
        """
        try:
            query = Fire.create_child(table, name, data)
            return make_response(jsonify(query), 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)
