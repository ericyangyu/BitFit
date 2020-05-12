from flask import Blueprint
from flask_cors import CORS

from backend.src.models.user import User

user_api = Blueprint('user_api', __name__)
CORS(user_api, supports_credentials=True)