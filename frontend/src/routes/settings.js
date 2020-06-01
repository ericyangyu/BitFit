/**
 * The Settings page allows the user to edit their email, change their password,
 * and delete their account.
 * 
 * Author: Nour
 */

// External imports
import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Internal imports
import api from '../config'

// Stylesheet
import styles from '../style/r_settings';

// Components
import Input from "../components/input";
import NavBar from "../components/nav_bar";

// Images
import backButton from '../images/back_button.png'
import blue from '../images/background.jpg'
import sideButton from '../images/sideButton.png'
import downButton from '../images/downButton.png'

/**
 * Class that returns the Account Settings page with correct components and API calls.
 */
export default class Settings extends Component {

    // Call the super constructor and initalize a state variable
    constructor(props) {
        super(props)
        this.state = {
            uid: "",
            currEmail: "",
            password: "",
            newEmail: "",
            reEmail: "",
            email: "",
            currPassword: "",
            newPassword: "",
            rePassword: "",
            emailD: "",
            passwordD: "",
            showEmail: false,
            showPassword: false,
            showDelete: false
        }
    }

    onBackPress = () => {
        if (this.editsMade()) {
            Alert.alert(
                'You have some unsaved changes!',
                "Are you sure you want to go back?",
                [{ text: 'YES', onPress: () => Actions.pop() },
                { text: 'NO' }],
                { cancelable: false }
            );
        } else {
            Actions.pop()
        }
    }

    editsMade = () => {
        return (this.state.currEmail || this.state.password || this.state.newEmail || this.state.reEmail ||
            this.state.email || this.state.currPassword || this.state.newPassword || this.state.rePassword ||
            this.state.emailD || this.state.passwordD)
    }

    disableEmail = () => {
        return !(this.state.currEmail && this.state.password && this.state.newEmail && this.state.reEmail)

    }

    disablePassword = () => {
        return !(this.state.email && this.state.currPassword && this.state.newPassword && this.state.rePassword)
    }

    disableDelete = () => {
        return !(this.state.emailD && this.state.passwordD)
    }

    onEmailPress = () => {
        if (this.state.newEmail != this.state.reEmail) {
            Alert.alert(
                'Mismatched Emails',
                "New email fields must match.",
                [{ text: 'OK', onPress: () => { this.setState({ currEmail: "", password: "", newEmail: "", reEmail: "" }) } }],
                { cancelable: false }
            );

            return;
        }

        // Call user API to get user info
        let url = 'user/update_credentials';
        let data = {
            'uid': this.state.uid,
            'email': this.state.currEmail,
            'password': this.state.password,
            'u_email': this.state.newEmail
        };

        // Make API call
        api.post(url, data)
            // Success
            .then(() => {
                Alert.alert(
                    'Email updated.',
                    "You can now use your updated email to login.",
                    [{ text: 'OK', onPress: () => { Actions.profile({ uid: this.state.uid, edit: false }) } }],
                    { cancelable: false }
                );
            })

            // Error
            .catch(() => {
                Alert.alert(
                    'Invalid Credentials',
                    "You either entered an incorrect email/password combination or your new email is invalid or taken. Please try again.",
                    [{ text: 'OK', onPress: () => { this.setState({ currEmail: "", password: "", newEmail: "", reEmail: "" }) } }],
                    { cancelable: false }
                );
            });
    }

    onCurrEmailChange = (currEmail) => {
        this.setState({ currEmail: currEmail });
    }

    onPasswordChange = (password) => {
        this.setState({ password: password });
    }

    onNewEmailChange = (newEmail) => {
        this.setState({ newEmail: newEmail });
    }

    onReEmailChange = (reEmail) => {
        this.setState({ reEmail: reEmail });
    }

    onPasswordPress = () => {
        if (this.state.newPassword != this.state.rePassword) {
            Alert.alert(
                'Mismatched Passwords',
                "New password fields must match.",
                [{ text: 'OK', onPress: () => { this.setState({ email: "", currPassword: "", newPassword: "", rePassword: "" }) } }],
                { cancelable: false }
            );

            return;
        }

        // Call user API to get user info
        let url = 'user/update_credentials';
        let data = {
            'uid': this.state.uid,
            'email': this.state.email,
            'password': this.state.currPassword,
            'u_password': this.state.newPassword
        };

        // Make API call
        api.post(url, data)
            // Success
            .then(() => {
                Alert.alert(
                    'Password updated.',
                    "You can now use your updated password to login.",
                    [{ text: 'OK', onPress: () => { Actions.profile({ uid: this.state.uid, edit: false }) } }],
                    { cancelable: false }
                );
            })

            // Error
            .catch(() => {
                Alert.alert(
                    'Invalid Credentials',
                    "You either entered an incorrect email/password combination or your new password is less than 6 characters. Please try again.",
                    [{ text: 'OK', onPress: () => { this.setState({ email: "", currPassword: "", newPassword: "", rePassword: "" }) } }],
                    { cancelable: false }
                );
            });
    }

    onEmailChange = (email) => {
        this.setState({ email: email });
    }

    onCurrPasswordChange = (currPassword) => {
        this.setState({ currPassword: currPassword });
    }

    onNewPasswordChange = (newPassword) => {
        this.setState({ newPassword: newPassword });
    }

    onRePasswordChange = (rePassword) => {
        this.setState({ rePassword: rePassword });
    }

    onEmailDChange = (emailD) => {
        this.setState({ emailD: emailD });
    }

    onPasswordDChange = (passwordD) => {
        this.setState({ passwordD: passwordD });
    }

    onDeletePress = () => {
        Alert.alert(
            'This action in irevertible!',
            "All your data will be lost. Are you sure you want to continue?",
            [{
                text: 'YES', onPress: () => {
                    // Call user API to get user info
                    let url = 'user/delete';
                    let data = {
                        'uid': this.state.uid,
                        'email': this.state.emailD,
                        'password': this.state.passwordD,
                    };

                    // Make API call
                    api.post(url, data)
                        // Success
                        .then(() => {
                            Alert.alert(
                                'Account deleted.',
                                "We're sad to see you go!",
                                [{ text: 'OK', onPress: () => Actions.login() }],
                                { cancelable: false }
                            );
                        })

                        // Error
                        .catch(() => {
                            Alert.alert(
                                'Invalid Credentials',
                                "Please try again.",
                                [{ text: 'OK', onPress: () => { this.setState({ emailD: "", passwordD: "" }) } }],
                                { cancelable: false }
                            );
                        });
                }
            },
            { text: 'NO', onPress: () => this.setState({ emailD: "", passwordD: "" }) }],
            { cancelable: false }
        );
    }

    componentDidMount() {
        // Call user API to get user info
        let url = 'user/get';
        let data = {
            'uid': this.props.uid
        };

        // Make API call
        api.post(url, data)
            // Success
            .then(() => {
                /* Set the state for this page to include the relevant user 
                information returned from the API call */
                this.setState({
                    uid: this.props.uid
                })
            })

            // Error
            .catch(error => {
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

    render() {
        let emailButtonStyle = !this.disableEmail() ? styles.button : [styles.button, styles.disabledB];
        let emailTextStyle = !this.disableEmail() ? styles.buttonT : [styles.buttonT, styles.disabledT];

        let passwordButtonStyle = !this.disablePassword() ? styles.button : [styles.button, styles.disabledB];
        let passwordTextStyle = !this.disablePassword() ? styles.buttonT : [styles.buttonT, styles.disabledT];

        let deleteButtonStyle = !this.disableDelete() ? [styles.button, styles.delete] : [styles.button, styles.delete, styles.disabledB];
        let deleteTextStyle = !this.disableDelete() ? styles.buttonT : [styles.buttonT, styles.disabledT];

        let emailButton = this.state.showEmail ? downButton : sideButton
        let emailBoxStyle = this.state.showEmail ? [styles.box, styles.longBox] : styles.box
        let passwordButton = this.state.showEmail ? downButton : sideButton
        let passwordBoxStyle = this.state.showEmail ? [styles.box, styles.longBox] : styles.box
        let deleteButton = this.state.showEmail ? downButton : sideButton
        let deleteBoxStyle = this.state.showEmail ? [styles.box, styles.longBox] : styles.box

        return (
            <View style={styles.container}>
                <Image style={styles.backImage} source={blue} />

                <NavBar
                    left={backButton}
                    leftOnPress={this.onBackPress}>
                </NavBar>

                <View style={styles.top}>
                    <Text style={styles.header}>Account Settings</Text>
                </View>
                <View style={styles.innerContainer}>
                    <View style={emailBoxStyle}>
                        <Text style={styles.title}>Update Email</Text>
                        <TouchableOpacity>
                            <Image source={emailButton} style={styles.dropDownButton}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={passwordBoxStyle}>
                    </View>

                    <View style={deleteBoxStyle}>
                    </View>
                </View>
            </View>
        )
    }
}