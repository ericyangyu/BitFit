/**
 * The login page allows the user to login using their email and password. If
 * they don't have an account, they can create one.
 * 
 * Authors: Imran, Sharan, Nour
 */

import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import { Actions } from 'react-native-router-flux';

import Button from "../components/Button";
import FormTextInput from "../components/Input";
import imageLogo from "../components/Logo.png";

import axios from "axios";

class Login extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  goToSignUp = () => {
    Actions.signup()
  }
  handleEmailChange = (email) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  /**
   * When the login button is pressed, the data in the text fields are passed
   * in an API call to the backend to log the user in. It recieves a response object
   * that is caught and processed accordingly.
   */
  handleLoginPress = () => {
    // Make an Axios Post call with the data
    // IMPORANT: This is the format of how to make API calls from the front end
    const response = axios({
      method: "post",
      url: 'http://10.0.2.2:5000/apis/user/login_user',
      // This is how axios sends request body data to the backend
      // data : dictionary
      // the response is the data returned from the API call
      data: {
        email: this.state.email,
        password: this.state.password
      }
    })
      .then((response) => {
        // IMPORTANT: navigate to the progress page and pass the UID of the user as a prop
        // This allows for the next page to know which user is logged in
        console.log(response.data);
        Actions.progress({ UID: response.data["UID"] })
      })
      .catch((error) => {
        // Always display an alert popup if there was an error logging in
        Alert.alert(
          'Invalid Credentials',
          "Please try again.",
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
        );

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
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={imageLogo} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={"Email..."}
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={"Password..."}
          />
          <Button
            label={"Login"}
            onPress={this.handleLoginPress}
          />

          <TouchableOpacity onPress={this.goToSignUp} >
            <Text style={styles.buttonTextStyle}>
              Do not have an account? Register here.
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3ebe1",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "80%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  buttonTextStyle: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 0,
    color: '#3498eb'
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

export default Login;