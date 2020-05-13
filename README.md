# BitFit but Make it Flask

## Description
This branch contains part of a Flask-API backend for BitFit. A
partial User model (backend/app/src/models/user.py) and a partial User API
(backend/app/src/apis/user.py) are implemented. The model contains database
calls and is used by API methods. API methods will send data to the frontend
when implemented (hopefully lol)

## Setup
1. Download [Docker](https://www.docker.com/products/docker-desktop "Download Docker ") (if you do not already have it).
2. Download [Postman](https://www.postman.com/downloads/ "Download Postman") (if you do not already have it).
3. Clone this repo (if you have not already).
4. Checkout the `nour_middle` branch
5. Download Flake8 (optional, but it will help with style if we use Python)
    - cd to BitFit directory
    - run `pip3 install flake8`

## How to Run
1. Navigate to the backend subdirectory
2. Start docker
3. Run `docker-compose up --build` (this takes over your terminal window so
   make sure you have another one opened)

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
    - i.e. calling the create_user method in the User API is done as such:
        - http://localhost:4200/apis/user/create_user
6. Change the request type (GET, POST, PUT, etc...). This should match the
   `methods` parameter of the method that is being called. If it doesn't, an
   error will be thrown
    - i.e. the create_user method requires a POST request
7. Click on Body > raw and change the type to JSON (instead of Text most
   likely)
8. Enter the body of your request in the text box.
    - You can know the required fields by looking for `request.json`'s in the
      method being called
    - i.e. the create_user method requires a body like this:
        {
            "username": "pro_bitfitter",
            "name": "Pro Bitfitter",
            "email": "pro.bitfitter@email.com",
            "photo": "https://www.photos.com/pro_bitfitter"
        }
9. Click 'Send'
10. You should now see the request response below the body and pro_bitfitter
    should appear in the database (if they weren't already there)

