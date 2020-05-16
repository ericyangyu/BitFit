/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image, StyleSheet, View, Text, KeyboardAvoidingView, TouchableOpacity, Alert } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/Input";
import PhotoUpload from 'react-native-photo-upload'
import { Actions } from 'react-native-router-flux';
import profilePhoto from "../resources/profile.png";
import profile from '../resources/tanBackground.png'
import axios from 'axios';

class SignUp extends React.Component {
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

  handleAvatarChange = (avatar) => {
    this.setState({ avatar: avatar });
  };

  handleUserNameChange = (username) => {
    this.setState({ username: username });
  };

  handleFullNameChange = (fullname) => {
    this.setState({ fullname: fullname });
  };

  handleEmailChange = (email) => {
    this.setState({ email: email });
  }

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  hideAvatar = () => {
    this.setState({ avatarDisplayStatus: false });
  }

  displayAvatar = () => {
    this.setState({ avatarDisplayStatus: true });
  }

  handleSignUpPress = () => {
    const response = axios({
      method: "post",
      url: 'http://10.0.2.2:5000/apis/user/create_user',
      data: {
        email: this.state.email,
        password: this.state.password,
        fullname: this.state.fullname,
        username: this.state.username,
        avatar: this.state.avatar,
      }
    })
      .then((response) => {
        console.log(response.data);
        Actions.progress()
      })
      .catch((error) => {
        // Alert popup upon error
        Alert.alert(
          'Invalid Credentials',
          "Please try again.",
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
        );

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

const styles = StyleSheet.create({
  photoStyle: {
    paddingVertical: 0,
    width: 230,
    height: 230,
    borderRadius: 150
  },
  container: {
    flex: 1,
    backgroundColor: "#f3ebe1",
    alignItems: "center",
  },
  buttonTextStyle: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 0,
    color: '#3498eb'
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "75%"
  }
});

export default SignUp;