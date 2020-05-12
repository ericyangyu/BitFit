from flask import Flask

app = Flask(__name__)

from .src.apis.user import user_api

app.register_blueprint(user_api, url_prefix="/apis/user")