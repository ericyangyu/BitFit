# BitFit Backend

To run the backend.
```
cd backend
python3 server.py
```

Steps:
1. pip install pyrebase
2. pip install flask
3. pip install flask-api
4. pip install flask_cors
5. pip install requests
6. npx react-native run android
7. python3 run android


- https://gist.github.com/fgilio/230ccd514e9381fafa51608fcf137253  
- https://stackoverflow.com/questions/61488376/firebase-error-handling-for-account-creation-and-login-pyrebase  
- https://reactnative.dev/docs/alert

Example axios call for get with params and error handling.
```
handleLoginPress = () => {
    const response = axios.get('http://10.0.2.2:5000/api/user/get_user', {
      params: this.state
    })
      .then((response) => {
        console.log(response.data);
        Actions.progress()
      })
      .catch((error) => {
        // Error
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);

          // Alert popup upon error
          Alert.alert(
            'Error',
            error.response.data,
            [
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
          );

        } else if (error.request) {
          // The request was made but no response was received.
          console.log(error.request);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  };
```

# Notes

All we need to store is the user['localId'] and user['idToken'] to make calls about the specific user.

How to handle params:
- request.args.get("key")

How to handle body data:
- request.json["key"]

How to create a response:
- make_response(jsonify(data), 200)
- create_error_response(e) where e is the caught HTTPError exception

