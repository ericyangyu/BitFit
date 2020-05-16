from config import app

# Import routes
from apis.user import user_api

# Register blueprints
app.register_blueprint(user_api, url_prefix="/apis/user")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000", debug=True)
