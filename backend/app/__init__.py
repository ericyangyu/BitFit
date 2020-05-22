"""
Initialization file for Python backend. Registers the blueprint of each API so
they can be called separately by the frontend.

Author: Nour
"""

# Flask import
from .config import app

# Import routes
from .src.apis.user import user_api
from .src.apis.trophy import trophy_api

# Register blueprints
app.register_blueprint(user_api, url_prefix="/apis/user")
app.register_blueprint(trophy_api, url_prefix="/apis/trophy")
