/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image, StyleSheet, View, Text, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/Input";
import PhotoUpload from 'react-native-photo-upload'
import { Actions } from 'react-native-router-flux';
import profilePhoto from "../resources/profile.png";
import profile from '../resources/tanBackground.png'


class SignUp extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      fullname: "",
      username: "",
      imageClick: true
    }
  }

  goToLogIn = () => {
    Actions.login()
  }

  handleEmailChange = (email) => {
    this.setState({ email: email, imageClick: false });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password, imageClick: false });
  };

  handleSignUpPress = () => {
    Actions.progress();
    console.log("Sign Up button pressed");
  };

  handleUserNameChange = (username) => {
    this.setState({ username: username, imageClick: false });
  };
  handleFullNameChange = (fullname) => {
    this.setState({ fullname: fullname, imageClick: false});
  };

  endUserNameChange = () => {
    this.setState({ imageClick: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.container}> 
        {(this.state.imageClick) ?
        <PhotoUpload
          maxHeight={200}

          photoPickerTitle={'Upload a Profile Picture: '}
          onPhotoSelect={avatar => {
            if (avatar) {
              console.log('Image base64 string: ', avatar)
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
            onFocus={this.handleUserNameChange}
            placeholder={"Username..."}
            onSubmitEditing={this.endUserNameChange}
          />
          <FormTextInput
            value={this.state.fullname}
            onFocus={this.handleFullNameChange}
            placeholder={"Full name..."}
            onSubmitEditing={this.endUserNameChange}
          />
          <FormTextInput
            value={this.state.email}
            onFocus={this.handleEmailChange}
            placeholder={"Email..."}
            onSubmitEditing={this.endUserNameChange}
          />
          <FormTextInput
            value={this.state.password}
            onFocus={this.handlePasswordChange}
            placeholder={"Password..."}
            onSubmitEditing={this.endUserNameChange}
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
    photoStyle : {
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