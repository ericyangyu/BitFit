/**
 * The signup page that allows the user to enter their information to create an account.
 * Description: We have a sign up class that contains the logic to read user input in text
 * fields. It also has a subtle fix where the avatar is hidden when the user is typing text
 * and displayed when the user is done typying text.
 * 
 * Authors: Imran, Sharan, Nour
 */

// External imports
import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Actions } from 'react-native-router-flux';

// DEBUG
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

// Internal imports
import api from '../config'

// Stylesheet
import styles from '../style/r_sign_up';


// Components
import Button from "../components/button";
import Input from "../components/input";

// Images 
import { defaultPhoto } from '../images/default_photo.js';
import blue from '../images/login_background.png';

/**
 * Class that returns the SignUp page with correct components and API calls.
 */
export default class SignUp extends Component {

    // Call the super constructor and initalize a state variable
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            fullname: "",
            email: "",
            password: "",
            avatar: defaultPhoto,
        }
    }

    // Route to the login page when login button is pressed
    goToLogIn = () => {
        Actions.pop()
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

    /**
     * When the signup button is pressed, the data in the text fields are passed
     * in an API call to the backend to create the user, add the relevant data to
     * the database, and log the user in. It recieves a response object that is 
     * caught and processed accordingly.
     */
    handleSignUpPress = () => {
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
        let url = 'user/signup';
        let data = {
            'username': this.state.username,
            'fullname': this.state.fullname,
            'email': this.state.email,
            'password': this.state.password,
            'avatar': this.state.avatar
        };

        // Make API call
        api.post(url, data)
            // Success
            .then(response => {
                /* Navigate to progress page and pass uid as prop. This allows
                the next page to know which user is logged in */
                Actions.progress({ uid: response.data["uid"] })
            })

            // Error
            .catch(error => {
                // Display alert if there was an errr logging in
                Alert.alert(
                    'Invalid Credentials',
                    "Please try again.",
                    [{ text: 'OK' }],
                    { cancelable: false }
                );

                // Log error 
                if (error.response) {
                    // Call was unsuccessful
                    console.log(error.response.data.username);
                    console.log(error.response.data.fullname);
                    console.log(error.response.status);
                } else if (error.request) {
                    // Request was made but no response was received.
                    console.log(error.request);
                } else {
                    // Something else cause an error
                    console.log('Error', error.message);
                }
            })
    }

    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
                base64: true
            });
            if (!result.cancelled) {
                this.setState({ avatar: result.base64 });
            }
        } catch (E) {
            console.log(E);
        }
    };


    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    // Render the correct components for the SignUp screen
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.backgroundImage} source={blue} />
                <TouchableOpacity onPress={this._pickImage}>
                    <Image
                        style={styles.photoStyle}
                        resizeMode='cover'
                        source={{ uri: `data:image/gif;base64,${this.state.avatar}` }}
                    />
                </TouchableOpacity>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.form}>
                            <Input
                                value={this.state.username}
                                onChangeText={this.handleUserNameChange}
                                placeholder={"Username..."}
                            />
                            <Input
                                value={this.state.fullname}
                                onChangeText={this.handleFullNameChange}
                                placeholder={"Full name..."}
                            />
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
                                label={"Sign Up"}
                                onPress={this.handleSignUpPress}
                                disabled={!this.state.username || !this.state.fullname || !this.state.email || !this.state.password}

                            />
                            <TouchableOpacity onPress={this.goToLogIn} >
                                <Text style={styles.buttonTextStyle}>
                                    Already have an account? Login here.
                        </Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
