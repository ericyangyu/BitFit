# BitFit Backend

## Description
This folder contains a Flask-API backend for BitFit. The main components are the
app/src/apis and app/src/models folders. Models contain database calls and are 
used by API methods. API methods send data to the frontend.

## File Descriptions

### app/config.py
- Don't change anything in this file

### app/_\_init__.py
Whenever you add a new API file you must import it into this file.
1. Add the path to this file
    - `from .src.apis.[API NAME] import [API NAME]_api`
2. Register the blueprint for this API
    - `app.register_blueprint([API NAME], url_prefix='/apis/[API NAME]')`

### app/src/apis
1. It is very important to have a correspoding [API NAME].py file in the 
   /app/src/models directory. THEY ARE DIFFERENT.
2. Must import corresponding model from the /app/src/models directory 
   - `from ..models.[API NAME] import [API NAME]`
3. Must create a blueprint for this API
   - `[API NAME]_api = Blueprint("[API NAME]_api", __name__)`
4. For each API method:
     - Define the name of the route. [ROUTE NAME] should match name of 
       corresponding method in model.
         - `@[API NAME]_api.route("/[ROUTE NAME]", methods=["POST"])`
     - Only accept POST calls 
         - `methods=["POST"]`
     - You can access the request body data passed in from the frontend through 
       `request.json["key"]`
     - Call the static method in the model to make the firebase call 
         - `[CLASS NAME IN MODEL].[ROUTE_NAME]()`

### app/src/models
1. It is very important to have a corresponding [API NAME].py file in the 
   /app/src/apis directory. THEY ARE DIFFERENT.
2. Inport Flask, Firebase configurations, methods, and variables
   - `from ...config import db, auth, create_error_message, raise_detailed_error`
3. Define a class that has the name of the model you are creating.
   - `class [API NAME W/ CAPITAL LETTER]:`
4. Each method must be static
   - `@staticmethod`
5. Define the parameters and their types recieved for each function from the 
   corresponding api call from /app/src/apis
   - `def [ROUTE_NAME](param1: param1type, param2: param2type, ...):`
6. A user object returned Firebase has a `localId` which is their `uid`
7. The data that you will pass into database update/set calls must be in a 
     dictionary
8. To reference a certain field of a table use the `.child()` method.
9. Use `make_response` to create the response object for the return value
10. `make_response(data, 200)`, where `data = jsonify(dictionary)`, and the 
    second arg is a status code.
11. Always use a try and except block for the function, where except block calls   
    `create_error_message(e)`

## Setup
1. Download [Docker](https://www.docker.com/products/docker-desktop "Download Docker ") (if you do not already have it)
2. Download [Postman](https://www.postman.com/downloads/ "Download Postman") (if you do not already have it)
3. Clone this repo (if you have not already).
4. Download Flake8 (You'll hate it, but it'll make styling so much better)
    - cd to BitFit directory
    - run `pip3 install flake8`

## How to Build
1. Navigate to the backend subdirectory
2. Start docker
3. Run `docker-compose up --build` (this takes over your terminal window so
   make sure you have another one opened)
NOTE for Windows: You need to run the following command in terminal first: `dos2unix.exe entrypoint.sh`

The app is now running on the Docker image.

4. When done, run `docker-compose down --volumes` to shut down the image

## How to Test
1. Make sure the app is running on the Docker image.
2. Launch the Firebase instance if you want to see the results
3. Launch Postman
4. Click on 'Create a Request'
5. Enter the request URL
    - Requests URL's have the following format:
        - http://localhost:4200/(path_to_API_method)
    - i.e. calling the login method in the User API is done as such:
        - http://localhost:4200/apis/user/login
6. Change the request type to POST
7. Click on Body > raw and change the type to JSON (instead of Text most
   likely)
8. Enter the body of your request in the text box.
    - You can know the required fields by at the 'Expected data' in the header
      of the API method being called
    - i.e. the login method requires a body like this:
        - {
              "email": "pro_bitfitter",
              "password": "password123"
          }
9. Click 'Send'

You should now see the request response below the body and pro_bitfitter should
appear in the database (if they weren't already there)

10. If there is an error, you can see the best description of it in the
    teminal window where you ran `docker-compose up --build`. You can also see
    it in postman by scrolling down and looking at the little textbox.

11. Don't forget to shut don the docker image if you care about your battery
