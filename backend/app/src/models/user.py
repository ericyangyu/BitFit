from __future__ import annotations
from typing import Dict

from ...config import db


class User():
    def __init__(self, username: str, name: str, email: str, photo: str):
        self.username = username
        self.name = name
        self.email = email
        self.photo = photo

    def to_json(self) -> Dict[str, str]:
        to_return = {}
        to_return['username'] = self.username
        to_return['name'] = self.name
        to_return['email'] = self.email
        to_return['photo'] = self.photo
        return to_return

    def edit_user(self, name: str, email: str, photo: str) -> User:
        if not db.child('users').child(self.username).get().val():
            return None

        data = {}
        if name is not None:
            self.name = name
            data['name'] = name
        if email is not None:
            self.email = email
            data['email'] = email
        if photo is not None:
            self.photo = photo
            data['photo'] = photo

        db.child('users').child(self.username).update(data)

        return self

    @staticmethod
    def get_user(username: str) -> User:
        if not db.child('users').child(username).get().val():
            return None

        name = db.child('users').child(username).child('name').get().val()
        email = db.child('users').child(username).child('email').get().val()
        photo = db.child('users').child(username).child('photo').get().val()

        return User(username, name, email, photo)

    @staticmethod
    def create_user(username: str, name: str, email: str, photo: str) -> User:
        if User.get_user(username) is not None:
            return None

        data = {'username': username, 'name': name, 'email': email,
                'photo': photo}
        db.child('users').child(username).set(data)

        return User(username, name, email, photo)
