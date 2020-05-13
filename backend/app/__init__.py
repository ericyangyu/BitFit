from .config import app

# Import routes
from .src.apis.user import user_api

# Redgister blueprints
app.register_blueprint(user_api, url_prefix='/apis/user')
