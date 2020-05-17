/**
 * The signup page that allows the user to enter their information to create an account.
 * Description: We have a sign up class that contains the logic to read user input in text
 * fields. It also has a subtle fix where the avatar is hidden when the user is typing text
 * and displayed when the user is done typying text.
 * 
 * Authors: Imran, Sharan, Nour
 */

// library imports
import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, KeyboardAvoidingView, TouchableOpacity, Alert } from "react-native";
import PhotoUpload from 'react-native-photo-upload'
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

// Component imports
import Button from "../components/Button";
import FormTextInput from "../components/Input";

// Resources imports
import profilePhoto from "../resources/profile.png";

/**
 * Class that returns the SignUp page with correct components and API calls.
 */
export default class SignUp extends Component {

  // Call the super constructor and initalize a state variable
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      fullname: "",
      username: "",
      avatar: "",
      avatarDisplayStatus: true
    }
  }

  // Set the avatar state variable when it is changed on UI
  handleAvatarChange = (avatar) => {
    this.setState({ avatar: avatar });
  };

  // Set the username state variable when it is changed on UI
  handleUserNameChange = (username) => {
    this.setState({ username: username });
  };

  // Set the fullname state variable when it is changed on UI
  handleFullNameChange = (fullname) => {
    this.setState({ fullname: fullname });
  };

  // Set the email state variable when it is changed on UI
  handleEmailChange = (email) => {
    this.setState({ email: email });
  }

  // Set the password state variable when it is changed on UI
  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  // Hides the avatar when any textinput components are pressed
  hideAvatar = () => {
    this.setState({ avatarDisplayStatus: false });
  }

  // Displays the avatar when the user is not entering text into components
  displayAvatar = () => {
    this.setState({ avatarDisplayStatus: true });
  }

  /**
   * When the signup button is pressed, the data in the text fields are passed
   * in an API call to the backend to create the user, add the relevant data to
   * the database, and log the user in. It recieves a response object that is 
   * caught and processed accordingly.
   */
  handleSignUpPress = () => {
    // Make an Axios Post call with the data
    // IMPORANT: This is the format of how to make API calls from the front end
    const response = axios({
      method: "post",
      url: 'http://10.0.2.2:5000/apis/user/create_user',
      // This is how axios sends request body data to the backend
      // data : dictionary
      // the response is the data returned from the API call
      data: {
        email: this.state.email,
        password: this.state.password,
        fullname: this.state.fullname,
        username: this.state.username,
        avatar: this.state.avatar,
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

  // Render the correct components for the SignUp screen
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.container}>
          {(this.state.avatarDisplayStatus) ?
            <PhotoUpload
              maxHeight={200}

              photoPickerTitle={'Upload a Profile Picture: '}
              onPhotoSelect={avatar => {
                if (avatar) {
                  this.handleAvatarChange(avatar)
                }
              }}
            >
              <Image
                style={styles.photoStyle}
                resizeMode='cover'
                source={profilePhoto}
              />
            </PhotoUpload> : null
          }
        </KeyboardAvoidingView>

        <KeyboardAvoidingView style={styles.form} >
          <View>
            <FormTextInput
              value={this.state.username}
              onFocus={this.hideAvatar}
              onChangeText={this.handleUserNameChange}
              placeholder={"Username..."}
              onSubmitEditing={this.displayAvatar}
            />
            <FormTextInput
              value={this.state.fullname}
              onFocus={this.hideAvatar}
              onChangeText={this.handleFullNameChange}
              placeholder={"Full name..."}
              onSubmitEditing={this.displayAvatar}
            />
            <FormTextInput
              value={this.state.email}
              onFocus={this.hideAvatar}
              onChangeText={this.handleEmailChange}
              placeholder={"Email..."}
              onSubmitEditing={this.displayAvatar}
            />
            <FormTextInput
              value={this.state.password}
              onFocus={this.hideAvatar}
              onChangeText={this.handlePasswordChange}
              placeholder={"Password..."}
              onSubmitEditing={this.displayAvatar}
            />
            <View></View>
            <Button
              label={"Sign Up"}
              onPress={this.handleSignUpPress}
            />
          </View>
          <TouchableOpacity onPress={this.goToLogIn} >
            <Text style={styles.buttonTextStyle}>
              Already have an account? Login here.
              </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

      </View>
    );
  }
}

// Style for this page
const styles = StyleSheet.create({
  // Style for the photo
  photoStyle: {
    paddingVertical: 0,
    width: 230,
    height: 230,
    borderRadius: 150
  },
  // Style for the container
  container: {
    flex: 1,
    backgroundColor: "#f3ebe1",
    alignItems: "center",
  },
  // Style for the buttonText
  buttonTextStyle: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 0,
    color: '#3498eb'
  },
  // Style for the form object
  form: {
    flex: 1,
    justifyContent: "center",
    width: "75%"
  }
});