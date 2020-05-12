from __future__ import annotations

from backend.src.setup import db

class User():
    def __init__(self, username: str, name: str, email: str, photo: str):
        self.username = username
        self.name = name
        self.email = email
        self.photo = photo
    
    def add_to_db(self):
        db.child("names").push({"username": self.username, "name": self.name,
                                "email": self.email, "photo": self.photo})

    @staticmethod
    def create_user(username: str, name: str, email: str, photo: str):
        user = User(name, username, email, photo)
        user.add_to_db()
