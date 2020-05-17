# BitFit Backend

## Instructions

Run the commands below to run the backend.
```
cd backend
python3 server.py
```

Here are some of the important packges to install.
- pip3 install pyrebase
- pip3 install flask
- pip3 install flask-api
- pip3 install flask_cors
- pip3 install requests

Here are some helpful links.
- https://gist.github.com/fgilio/230ccd514e9381fafa51608fcf137253  
- https://stackoverflow.com/questions/61488376/firebase-error-handling-for-account-creation-and-login-pyrebase

## Notes

### config.py
- Don't change anything in this file

### server.py
- Whenever you add a new api file you must import it into this file.
  - `from apis.user import user_api`
- Whenever you add a new api file you must register a blueprint to it in this file.
  - `app.register_blueprint(user_api, url_prefix="/apis/user")`

### /apis
- It is very important to have correspoding model.py file in the /models directory. THEY ARE DIFFERENT.
- Must import corresponding model from the /models directory 
  - `from models.user import User`
- Must create a blueprint for this api
  - `user_api = Blueprint("user_api", __name__)`
- Define the route for the method   
  - `@user_api.route("/create_user", methods=["POST"])`
- Each method will only accept POST calls 
  - `methods=["POST"]`
- You access the request body data passed in from the frontend through 
  - `request.json["key"]`
- Call the static method in the model to make the firebase call 
  - `model.method()`

### /models
- It is very important to have a corresponding api.py file in the /apis directory. THEY ARE DIFFERENT.
- Add these lines to allow for importation of firebase variables
  - `import sys`
  - `sys.path.append("../")`
  - `from config import db, auth`
- Define a class that has the name of the model you are creating.
  - `class User:`
- Copy the two functions below to your class from the `models/user.py` file.
  - `def raise_detailed_error(self, request_object):`
  - `def create_error_message(self, e):`
- Each method must be static
  - `@staticmethod`
- Define the parameters and their types recieved for each function from the corresponding api call from /apis
  - `def login_user(email: str, password: str):`
- A user object returned Firebase has a `localId` which is their `UID`
- The data that you will pass into database update/set calls must be in a dictionary
- To reference a certain field of a table user the `.child()` method.
- Use `make_response` to create the response object for the return value
  - `make_response(data, 200)`, where `data = jsonify(dictionary)`, and the second arg is a status code.
- Always use a try and except block for the function, where except block calls `create_error_message(e)`

### Front-end and Axios
- Import axios
  - `import axios from "axios";`
- To access a prop from another page
  - `this.props.key`
```
const response = axios({
    method: "post",
    // The URL consists of http://serverIP:serverPort/apis/blueprintRoute/apiCall
    // In this example, the call is made to the localhost on port 5000, it uses the /user/get_user api route to make the call
    url: 'http://10.0.2.2:5000/apis/user/get_user',
    // This is how axios sends request body data to the backend
    // data : dictionary
    // the response is the data returned from the API call
    data: {
        UID: this.props.UID
    }
})
    .then((response) => {
        // IMPORTANT: Sets the state for this page to include the relevant
        // user information returned from the API call
        console.log(response.data);
        this.setState({
            fullname: response.data.fullname
        })

        // IMPORTANT: navigate to the progress page and pass the UID of the user as a prop
        // This allows for the next page to know which user is logged in
        console.log(response.data);
        Actions.progress({ UID: response.data["UID"] })
    })
    .catch((error) => {
        // log error information
        if (error.response) {
            // The call was unsuccessful
            console.log(error.response.data);
            console.log(error.response.status);
        } else if (error.request) {
            // The request was made but no response was received.
            console.log(error.request);
        } else {
            // Something happened in setting up the request and triggered an Error
            console.log('Error', error.message);
        }
    });
```
