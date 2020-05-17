/**
 * The login page allows the user to login using their email and password. If
 * they don't have an account, they can create one.
 * 
 * Authors: Imran, Sharan, Nour
 */

// External imports
import React from 'react';
import { Image, View, TouchableOpacity, Text, Alert } from "react-native";
import { Actions } from 'react-native-router-flux';

import axios from "axios";

// Internal imports
import styles from '../style/r_login';
import logo from "../images/logo.png";
import Input from "../components/input";
import Button from "../components/button";
import TextField from "../components/text_field";

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
     * in an API call to the backend to log the user in. It recieves a response
     * object that is caught and processed accordingly.
     */
    handleLoginPress = () => {
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
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.form}>
                <Input
                    value={this.state.email}
                    onChangeText={this.handleEmailChange}
                    placeholder={"Email..."}
                />
                <Input
                    value={this.state.password}
                    onChangeText={this.handlePasswordChange}
                    placeholder={"Password..."}
                />
                <Button
                    label={"Login"}
                    onPress={this.handleLoginPress}
                />
                <TouchableOpacity onPress={this.goToSignUp} >
                    <TextField style={styles.buttonTextStyle}>
                        Do not have an account? Register here.
                    </TextField>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Login;