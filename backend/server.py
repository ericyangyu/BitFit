"""Run this file to start up the backend server.

Usage: python3 server.py

Description: Using 0.0.0.0 to accept all incoming connections on port 5000. Register
the blueprints here for your different models/apis.
Authors: Imran, Sharan, Nour
"""

####### Interal imports #######
# import the Flask object needed to run the server
from config import app

# import the api routes that go with your models
from apis.user import user_api

# Register blueprints that go with your models and apis
app.register_blueprint(user_api, url_prefix="/apis/user")

# When this file is run, the server runs on the speicified (HOST, PORT)
if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000", debug=True)
