from setup import app
from apis.user import user_api

app.register_blueprint(user_api, url_prefix="/apis/user")