from flask import Blueprint, request, jsonify
from flask_cors import CORS

from backend.src.models.user import User

user_api = Blueprint('user_api', __name__)
CORS(user_api, supports_credentials=True)

@user_api.route('/create_user', method=['POST'])
def create_user():
    username = request.json['username']
    name = request.json['name']
    email = request.json['email']
    photo = request.json['photo']

    user = User.create_user(username, name, email, photo)

    return jsonify({'reason': 'User created', 'result': user.to_json()})

@user_api.route('/get_username', method=['GET'])
def get_username():
    username = request.json['username']
    user = User.read_from_db(username)

    return jsonify({'username': user.get_username()})