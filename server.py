import json
from pprint import pprint

import requests
from flask import Flask, jsonify, request, make_response
from requests.exceptions import HTTPError

from config import auth, db

app = Flask(__name__)


@app.route("/api/user/create_user", methods=["POST"])
def create_user():
    email = request.json["email"]
    password = request.json["password"]

    data = {
        "username": request.json["username"],
        "fullname": request.json["fullname"],
        "photo": request.json["photo"],
    }
    user = auth.create_user_with_email_and_password(email, password)
    pprint(user)
    # creates a user entry in the DB with unique key, if use set() then no unique key used
    results = db.child("users").child(user["localId"]).set(data, user["idToken"])
    return jsonify(results)


@app.route("/api/user/get_user", methods=["GET"])
def get_user():
    try:
        email = request.args.get("email")
        password = request.args.get("password")
        user = auth.sign_in_with_email_and_password(email, password)
        data = {"localId": user["localId"]}
        data = jsonify(data)
        results = db.child("users").child(user["localId"]).get(user["idToken"]).val()
        return make_response(data, 200)
    except HTTPError as e:
        return create_error_response(e)


@app.route("/api/user/update_user", methods=["POST"])
def update_user():
    email = request.json["email"]
    password = request.json["password"]
    user = auth.sign_in_with_email_and_password(email, password)
    data = {"username": request.json["username"]}
    results = db.child("users").child(user["localId"]).update(data, user["idToken"])
    return jsonify(results)


@app.route("/api/user/delete_user", methods=["DELETE"])
def delete_user():
    """TODO, does not delete user authentication table, but does delete it from users table.

    Returns:
        [type] -- [description]
    """
    # sign the user in with email and password
    email = request.json["email"]
    password = request.json["password"]
    user = auth.sign_in_with_email_and_password(email, password)

    # remove the user from the database users table
    results = db.child("users").child(user["localId"]).remove(user["idToken"])

    # remove the user from the firebase authentication table
    request_ref = "https://identitytoolkit.googleapis.com/v1/accounts:delete?key={0}".format(
        auth.api_key
    )
    headers = {"content-type": "application/json; charset=UTF-8"}
    data = json.dumps(
        {
            "email": email,
            "password": password,
            "returnSecureToken": True,
            "idToken": user["idToken"],
        }
    )
    request_object = requests.post(request_ref, headers=headers, data=data)
    raise_detailed_error(request_object)

    return jsonify(results)


def raise_detailed_error(request_object):
    """This function is used by Pyrebase for error checking.

    Arguments:
        request_object {[type]} -- [description]

    Raises:
        detailed: [description]
        HTTPError: [description]
    """
    try:
        request_object.raise_for_status()
    except HTTPError as e:
        # raise detailed error message
        # TODO: Check if we get a { "error" : "Permission denied." } and handle automatically
        raise HTTPError(e, request_object.text)


def create_error_response(e):
    # access the JSON object from error that contains JSON info
    error_json = e.args[1]
    # access message filed in JSON error object
    error = json.loads(error_json)["error"]["message"]
    code = json.loads(error_json)["error"]["code"]
    # create response error
    response = make_response(error, code)
    return response


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000", debug=True)
