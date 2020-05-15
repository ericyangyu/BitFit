from __future__ import annotations
from typing import Dict
from typing import List

from ...config import db
from .user import User


class Trophy():
    def __init__(self, id: int, name: str, requirement: float, desc: str):
        self.id = id
        self.name = name
        self.requirement = requirement
        self.description = desc

    def to_json(self) -> Dict[str, str]:
        to_return = {}
        to_return['id'] = self.id
        to_return['name'] = self.name
        to_return['requirement'] = self.requirement
        to_return['description'] = self.description

        return to_return

    @staticmethod
    def get_all_trophies(self) -> List[Trophy]:
        all_trophies = db.child('trophies').get()
        trophies = []

        for data in all_trophies.each():
            trophy_info = data.val()

            trophies.append(Trophy(trophy_info['id'], trophy_info['name'],
                            trophy_info['requirement'],
                            trophy_info['description']))

        return trophies

    @staticmethod
    def get_trophy_by_id(self, trophy_id) -> Trophy:
        trophies = self.get_all_trophies(self)

        # get the first trophy that corresponds to the given trophy id
        return next((x for x in trophies if x.id == trophy_id), None)

    @staticmethod
    def get_user_trophies(self, user: User) -> List[Trophy]:
        trophies = []

        # get all trophies earned..
        all_trophies = db.child('earned_trophies').get()
        for data in all_trophies.each():
            trophy_info = data.val()
            user_id = trophy_info['user_id']

            if user_id == user.id:
                trophy_id = trophy_info['trophy_id']
                trophies.append(self.get_trophy_by_id(trophy_id))
        return trophies
