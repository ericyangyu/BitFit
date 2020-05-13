from __future__ import annotations #MODEL
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

    def get_username(self) -> str:
        return self.username

    def get_name(self) -> str:
        return self.name

    def get_email(self) -> str:
        return self.email

    def get_photo(self) -> str:
        return self.photo

    def write_to_db(self):
        db.child('users').push({'username': self.username, 'name': self.name,
                                'email': self.email, 'photo': self.photo})

    @staticmethod
    def read_from_db(username: str) -> User:
        user = db.child('users').child('username').get()
        return User(user['username'], user['name'], user['email'],
                    user['photo'])

    @staticmethod
    def create_user(username: str, name: str, email: str, photo: str) -> User:
        user = User(name, username, email, photo)
        user.write_to_db()
        return user
