"""
Description: Firebase routes to initalize firebase items

NOTE: Database calls should not be made in this file.

Authors: Imran
"""

# External imports

# Flask packages
from flask import Blueprint, request
from flask_cors import CORS

# Internal imports
from ..models.fire import Fire  # Fire model

# Define the user_api blueprint route for all firebase-related api calls
fire_api = Blueprint("fire_api", __name__)
CORS(fire_api, supports_credentials=True)


@fire_api.route("/create", methods=["POST"])
def initalize():
    """
    Create trophies, workouts, and body parts tables in Firebase.

    Expected data:
        None

    Expected response:
        None
    """
    # Delegate to fire model
    return Fire.create()


@fire_api.route("/create_object", methods=["POST"])
def create_object():
    """
    Create a single object the specified table in Firebase.

    Expected data:
        None

    Expected response:
        None
    """
    table = request.json["table"]
    name = request.json["name"]
    data = request.json["data"]
    # Delegate to fire model
    return Fire.create_object(table, name, data)
