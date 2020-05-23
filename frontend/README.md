# BitFit Frontend

## Description
This folder contains a React Native frontend for BitFit. Axios is used as a
middleware to connect to the API methods defined by the backend. 

## File Descriptions

TO DO

## Setup

TO DO

## How to Build
1. Follow the How to Build Steps in the Backend README. YOU MUST BUILD THE
   BACKEND BEFORE BUILDING THE FRONTEND
2. Navigate to the frontend subdirectory
3. Run `rm -rf node_modules && npm install`
4. Launch the emulator
5. Run `npx react-native run-android`
6. Frontend console prints will appear in terminal window opened by command 
   above.
   Backend console prints will appear in the terminal window where you ran
   `docker-compose up --build`.

## How to Test

TO DO

## Axios Example
1. Import axios
   - `import axios from "axios";`
2. To access a prop from another page
   - `this.props.key`
3. Below is an example of a axios call (can be seen in login route):
```
/*
IMPORTANT: FOLLOW THIS FORMAT TO MAKE API CALLS
Notes:
- only last two parts should change in url field
- data should match "Expected data" in API method header
- response.data will match "Expected response" in API method header
- If code steps into .then: call went through
- If code steps into .catch: error (use postman to debug)
- You need to initialize .then and .catch as arrow functions if you
    want to edit states in them
*/

// Indicate which API to call and what data to pass in
let url = 'http://10.0.2.2:4200/apis/user/login';
let data = {
    'email': this.state.email,
    'password': this.state.password
};

// Make API call
axios.post(url, data)
    // Success
    .then(response => {
        /* Navigate to progress page and pass uid as prop. This allows
        the next page to know which user is logged in */
        console.log(response.data);
        Actions.progress({ uid: response.data["uid"] })
    })
    
    // Error
    .catch(error => {
        // Display alert if there was an errr logging in
        Alert.alert(
            'Invalid Credentials',
            "Please try again.",
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: false }
        );

        // Log error 
        if (error.response) {
            // Call was unsuccessful
            console.log(error.response.data);
            console.log(error.response.status);
        } else if (error.request) {
            // Request was made but no response was received.
            console.log(error.request);
        } else {
            // Something else cause an error
            console.log('Error', error.message);
        }
    }); 
```