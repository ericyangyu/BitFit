"""
Initialization file for Python backend. Registers the blueprint of each API so
they can be called separately by the frontend.

Author: Nour
"""

# Flask import
from .config import app

# Import routes
from .src.apis.user import user_api
from .src.apis.completed_workouts import completed_workouts
from .src.apis.progress import progress

# Register blueprints
app.register_blueprint(user_api, url_prefix='/apis/user')
app.register_blueprint(completed_workouts,
                       url_prefix='/apis/completed_workouts')

app.register_blueprint(progress,
                       url_prefix='/apis/progress')