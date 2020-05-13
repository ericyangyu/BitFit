from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'hello'

@app.route('/create_user', method=['POST'])
def create_user():
    return "Great success"

if __name__ == '__main__':
    app.run(debug=True)