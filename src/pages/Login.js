/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * 
 * 
 * 
 */

import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Actions } from 'react-native-router-flux';

import Button from "../components/Button";
import FormTextInput from "../components/Input";
import imageLogo from "../components/Logo.png";

import database from '@react-native-firebase/database';

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

  handleLoginPress = () => {
    console.log("Login button pressed");
    const data = { name: "imran" }
    database().ref('/testing').push(data);
    Actions.progress()
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