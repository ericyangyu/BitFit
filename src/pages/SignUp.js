/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/Input";
import imageLogo from "../components/Logo.png";
// import PhotoUpload from 'react-native-photo-upload'




class SignUp extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      fullname: "",
      username: ""
    }
  }

  handleEmailChange = (email) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  handleSignUpPress = () => {
    console.log("Sign Up button pressed");
  };

  handleUserNameChange = (username) => {
    this.setState({ username: username });
  };
  handleFullNameChange = (fullname) => {
    this.setState({ fullname: fullname });
  };

  render() {
    return (



      <View style={styles.container}>
         {/* <PhotoUpload 
   onPhotoSelect={avatar => {
     if (avatar) {
       console.log('Image base64 string: ', avatar)
     }
   }}
 >  */}
   {/* <Image
    style={{
      paddingVertical: 30,
      width: 150,
      height: 150,
      borderRadius: 75
    }}
    resizeMode='cover'
    source={{
      uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
    }}
  />
</PhotoUpload> */}
        <View style={styles.form}>
          <FormTextInput
            value={this.state.username}
            onChangeText={this.handleUserNameChange}
            placeholder={"username ..."}
          />
          <FormTextInput
            value={this.state.fullname}
            onChangeText={this.handleFullNameChange}
            placeholder={"Full name..."}
          />
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
            label={"Sign Up"}
            onPress={this.handleSignUpPress}
          />
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
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

export default SignUp;