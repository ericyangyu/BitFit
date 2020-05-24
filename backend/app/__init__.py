"""
Initialization file for Python backend. Registers the blueprint of each API so
they can be called separately by the frontend.

Author: Nour
"""

# Flask import
from .config import app

# Import routes
from .src.apis.user import user_api
from .src.apis.bodyparts import bodyparts_api
from .src.apis.workouts import workouts_api
from .src.apis.trophy import trophy_api
from .src.apis.fire import fire_api

# Register blueprints
app.register_blueprint(user_api, url_prefix="/apis/user")
app.register_blueprint(bodyparts_api, url_prefix="/apis/bodyparts")
app.register_blueprint(workouts_api, url_prefix="/apis/workouts")
app.register_blueprint(trophy_api, url_prefix="/apis/trophy")
app.register_blueprint(fire_api, url_prefix="/apis/fire")
