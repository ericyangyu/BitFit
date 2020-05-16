from __future__ import annotations
from typing import Dict
import json
from flask import make_response, jsonify
from requests.exceptions import HTTPError
import sys

sys.path.append("../")
from config import db, auth


class User:
    def __init__(self, username: str, name: str, email: str, photo: str):
        self.username = username
        self.name = name
        self.email = email
        self.photo = photo

    def to_json(self):
        to_return = {}
        to_return["username"] = self.username
        to_return["name"] = self.name
        to_return["email"] = self.email
        to_return["photo"] = self.photo
        return to_return

    @staticmethod
    def create_user(
        email: str, password: str, fullname: str, username: str, avatar: str
    ):
        try:
            user = auth.create_user_with_email_and_password(email, password)

            data = {
                "email": email,
                "fullname": fullname,
                "username": username,
                "avatar": avatar,
            }

            results = (
                db.child("users").child(user["localId"]).set(data, user["idToken"])
            )

            data = jsonify({"localId": user["localId"]})
            return make_response(data, 200)
        except HTTPError as e:
            # access the JSON object from error that contains JSON info
            error_json = e.args[1]
            # access message filed in JSON error object
            code = json.loads(error_json)["error"]["code"]
            print(json.loads(error_json)["error"]["message"])
            return make_response({}, code)
        except:
            return make_response({}, 400)

    @staticmethod
    def login_user(email: str, password: str):
        try:
            user = auth.sign_in_with_email_and_password(email, password)
            data = jsonify({"localId": user["localId"]})
            return make_response(data, 200)
        except HTTPError as e:
            # access the JSON object from error that contains JSON info
            error_json = e.args[1]
            # access message filed in JSON error object
            code = json.loads(error_json)["error"]["code"]
            return make_response({}, code)
        except:
            return make_response({}, 400)

    @staticmethod
    def edit_user(self, name: str, email: str, photo: str):
        if not db.child("users").child(self.username).get().val():
            return None

        data = {}
        if name is not None:
            self.name = name
            data["name"] = name
        if email is not None:
            self.email = email
            data["email"] = email
        if photo is not None:
            self.photo = photo
            data["photo"] = photo

        db.child("users").child(self.username).update(data)

        return self

    @staticmethod
    def get_user(username: str):
        if not db.child("users").child(username).get().val():
            return None

        name = db.child("users").child(username).child("name").get().val()
        email = db.child("users").child(username).child("email").get().val()
        photo = db.child("users").child(username).child("photo").get().val()

        return User(username, name, email, photo)
