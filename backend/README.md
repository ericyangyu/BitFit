# BitFit Backend

## Description
This branch contains part of a Flask-API backend for BitFit. A
partial User model (backend/app/src/models/user.py) and a partial User API
(backend/app/src/apis/user.py) are implemented. The model contains database
calls and is used by API methods. API methods send data to the frontend.

## Setup
1. Download [Docker](https://www.docker.com/products/docker-desktop "Download Docker ") (if you do not already have it)
2. Download [Postman](https://www.postman.com/downloads/ "Download Postman") (if you do not already have it)
3. Clone this repo (if you have not already).
4. Download Flake8 (You'll hate it, but it'll make styling so much better)
    - cd to BitFit directory
    - run `pip3 install flake8`

## How to Run the Backend
1. Navigate to the backend subdirectory
2. Start docker
3. Run `docker-compose up --build` (this takes over your terminal window so
   make sure you have another one opened)

The app is now running on the Docker image.

4. When done, run `docker-compose down --volumes` to shut down the image

## How to Test the Backend
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
              "passord": "password123"
          }
9. Click 'Send'

You should now see the request response below the body and pro_bitfitter should
appear in the database (if they weren't already there)

10. If there is an error, you can see the best description of it in the
    teminal window where you ran `docker-compose up --build`. You can also see
    it in postman by scrolling down and looking at the little textbox.

11. Don't forget to shut don the docker image if you care about your battery
