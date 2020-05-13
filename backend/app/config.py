import os
from flask_api import FlaskAPI
from flask.cli import FlaskGroup

app = FlaskAPI(__name__)
app.config['CORS_HEADERS'] = os.getenv('CORS_HEADERS')
cli = FlaskGroup(app)