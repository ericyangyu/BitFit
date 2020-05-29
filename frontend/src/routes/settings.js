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

// Images
import backButton from '../images/back_button.png'

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
            passwordD: ""
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

        return (
            <View style={styles.container}>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <ScrollView style={styles.scrollView}>
                            <View style={styles.topBar}>
                                <TouchableOpacity onPress={() => this.onBackPress()}>
                                    <Image source={backButton} style={styles.topButton} />
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.header}>Change Email</Text>

                            <Input
                                value={this.state.currEmail}
                                style={styles.input}
                                onChangeText={this.onCurrEmailChange}
                                placeholder={"Email"}
                            />
                            <Input
                                value={this.state.password}
                                style={styles.input}
                                onChangeText={this.onPasswordChange}
                                placeholder={"Password"}
                                secureTextEntry={true}
                            />
                            <Input
                                value={this.state.newEmail}
                                style={styles.input}
                                onChangeText={this.onNewEmailChange}
                                placeholder={"New Email"}
                            />
                            <Input
                                value={this.state.reEmail}
                                style={styles.input}
                                onChangeText={this.onReEmailChange}
                                placeholder={"Re-enter New Email"}
                            />

                            <TouchableOpacity disabled={this.disableEmail()} style={emailButtonStyle} onPress={this.onEmailPress}>
                                <Text style={emailTextStyle}>CHANGE EMAIL</Text>
                            </TouchableOpacity>

                            <Text style={styles.header}>Change Password</Text>

                            <Input
                                value={this.state.email}
                                style={styles.input}
                                onChangeText={this.onEmailChange}
                                placeholder={"Email"}
                            />
                            <Input
                                value={this.state.currPassword}
                                style={styles.input}
                                onChangeText={this.onCurrPasswordChange}
                                placeholder={"Password"}
                                secureTextEntry={true}
                            />
                            <Input
                                value={this.state.newPassword}
                                style={styles.input}
                                onChangeText={this.onNewPasswordChange}
                                placeholder={"New Password"}
                                secureTextEntry={true}
                            />
                            <Input
                                value={this.state.rePassword}
                                style={styles.input}
                                onChangeText={this.onRePasswordChange}
                                placeholder={"Re-enter New Password"}
                                secureTextEntry={true}
                            />

                            <TouchableOpacity disabled={this.disablePassword()} style={passwordButtonStyle} onPress={this.onPasswordPress}>
                                <Text style={passwordTextStyle}>CHANGE PASSWORD</Text>
                            </TouchableOpacity>

                            <Text style={styles.header}>Delete Account</Text>

                            <Input
                                value={this.state.emailD}
                                style={styles.input}
                                onChangeText={this.onEmailDChange}
                                placeholder={"Email"}
                            />
                            <Input
                                value={this.state.passwordD}
                                style={styles.input}
                                onChangeText={this.onPasswordDChange}
                                placeholder={"Password"}
                                secureTextEntry={true}
                            />

                            <TouchableOpacity disabled={this.disableDelete()} style={deleteButtonStyle} onPress={this.onDeletePress}>
                                <Text style={deleteTextStyle}>DELETE ACCOUNT </Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </View>
        )
    }
}