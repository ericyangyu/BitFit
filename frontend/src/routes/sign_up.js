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
import { Image, View, Text, KeyboardAvoidingView, TouchableOpacity, Alert } from "react-native";
import PhotoUpload from 'react-native-photo-upload'
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import ImgToBase64 from 'react-native-image-base64';
 
// Internal inports

// Stylesheet
import styles from '../style/r_sign_up';


// Components
import Button from "../components/button";
import Input from "../components/input";


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
            avatar: ImgToBase64.getBase64String("../images/default_profile.png"),
            avatarDisplayStatus: true
        }
    }

    // Route to the login page when login button is pressed
    goToLogIn = () => {
        Actions.login()
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
        let url = 'http://10.0.2.2:4200/apis/user/signup';
        let data = {
            'username': this.state.username,
            'fullname': this.state.fullname,
            'email': this.state.email,
            'password': this.state.password,
            'avatar': this.state.avatar
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
    }

    // Render the correct components for the SignUp screen
    render() {
        console.log(this.state.avatar);
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
                        source={{uri: `data:image/gif;base64,${this.state.avatar}`}} 
                    />
                    </PhotoUpload> : null
                }
                </KeyboardAvoidingView>

                <KeyboardAvoidingView style={styles.form} >
                <View>
                    <Input
                        value={this.state.username}
                        onFocus={this.hideAvatar}
                        onChangeText={this.handleUserNameChange}
                        placeholder={"Username..."}
                        onSubmitEditing={this.displayAvatar}
                    />
                    <Input
                        value={this.state.fullname}
                        onFocus={this.hideAvatar}
                        onChangeText={this.handleFullNameChange}
                        placeholder={"Full name..."}
                        onSubmitEditing={this.displayAvatar}
                    />
                    <Input
                        value={this.state.email}
                        onFocus={this.hideAvatar}
                        onChangeText={this.handleEmailChange}
                        placeholder={"Email..."}
                        onSubmitEditing={this.displayAvatar}
                    />
                    <Input
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