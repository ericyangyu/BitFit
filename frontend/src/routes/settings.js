/**
 * The Settings page allows the user to edit their email, change their password,
 * and delete their account.
 * 
 * Author: Nour
 */

// External imports
import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Internal imports
import api from '../config'

// Stylesheet
import styles from '../style/r_settings';

// Components
import Input from "../components/input";
import Button from "../components/button";
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
            showDelete: false,
            title: "Account Settings"
        }
    }

    onBackPress = () => {
        if (this.editsMade()) {
            Alert.alert(
                'You have some unsaved changes!',
                "Are you sure you want to go back?",
                [{ text: 'Yes', onPress: () => {
                    Actions.pop()
                    setTimeout(() => { Actions.refresh({ r: Math.random() }); }, 0);
                } },
                { text: 'No' }],
                { cancelable: false }
            );
        } else {
            Actions.pop()
        }
    }

    onEmailDropDownPress = () => {
        this.setState({
            showEmail: !this.state.showEmail,
            showPassword: false,
            showDelete: false
        })
    }

    onPasswordDropDownPress = () => {
        this.setState({
            showEmail: false,
            showPassword: !this.state.showPassword,
            showDelete: false
        })
    }

    onDeleteDropDownPress = () => {
        this.setState({
            showEmail: false,
            showPassword: false,
            showDelete: !this.state.showDelete
        })
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
                text: 'Yes', onPress: () => {
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
            { text: 'No', onPress: () => this.setState({ emailD: "", passwordD: "" }) }],
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
        let emailButton = this.state.showEmail ? downButton : sideButton
        let emailBoxStyle = this.state.showEmail ? [styles.box, styles.longBox] : styles.box
        let passwordButton = this.state.showPassword ? downButton : sideButton
        let passwordBoxStyle = this.state.showPassword ? [styles.box, styles.longBox] : styles.box
        let deleteButton = this.state.showDelete ? downButton : sideButton
        let deleteBoxStyle = this.state.showDelete ? [styles.box, styles.longBox, {height: 245}] : styles.box

        return (
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <ScrollView style={styles.scroll}>
                
                    <View style={styles.container}>
                        
                        <Image style={styles.backImage} source={blue} />

                        <NavBar
                            left={backButton}
                            leftDisabled={false}
                            leftOnPress={this.onBackPress}>
                        </NavBar>

                        
                        <Text style={styles.header}>{this.state.title}</Text>

                        <View style={styles.innerContainer}>
                            
                            <View style={emailBoxStyle}>
                                <View style={styles.headerBox}>
                                    <Text style={styles.title}>Update Email</Text>
                                    <TouchableOpacity onPress={this.onEmailDropDownPress}>
                                        <Image source={emailButton} style={styles.dropDownButton}></Image>
                                    </TouchableOpacity>
                                </View>

                                <Input
                                    hide={!this.state.showEmail}
                                    value={this.state.currEmail}
                                    style={styles.input}
                                    onChangeText={this.onCurrEmailChange}
                                    placeholder={"Email"}
                                />
                                <Input
                                    hide={!this.state.showEmail}
                                    value={this.state.password}
                                    style={styles.input}
                                    onChangeText={this.onPasswordChange}
                                    placeholder={"Password"}
                                    secureTextEntry={true}
                                />
                                <Input
                                    hide={!this.state.showEmail}
                                    value={this.state.newEmail}
                                    style={styles.input}
                                    onChangeText={this.onNewEmailChange}
                                    placeholder={"New Email"}
                                />
                                <Input
                                    hide={!this.state.showEmail}
                                    value={this.state.reEmail}
                                    style={styles.input}
                                    onChangeText={this.onReEmailChange}
                                    placeholder={"Confirm New Email"}
                                />
                                <Button 
                                    style={styles.button} 
                                    hide={!this.state.showEmail}
                                    disabled={this.disableEmail()}
                                    label="Update Email"
                                    onPress={this.onEmailPress} >

                                </Button>
                            </View>

                            <View style={passwordBoxStyle}>
                                <View style={styles.headerBox}>
                                    <Text style={styles.title}>Update Password</Text>
                                    <TouchableOpacity onPress={this.onPasswordDropDownPress}>
                                        <Image source={passwordButton} style={styles.dropDownButton}></Image>
                                    </TouchableOpacity>
                                </View>

                                <Input
                                    hide={!this.state.showPassword}
                                    value={this.state.email}
                                    style={styles.input}
                                    onChangeText={this.onEmailChange}
                                    placeholder={"Email"}
                                />
                                <Input
                                    hide={!this.state.showPassword}
                                    value={this.state.currPassword}
                                    style={styles.input}
                                    onChangeText={this.onCurrPasswordChange}
                                    placeholder={"Password"}
                                    secureTextEntry={true}
                                />
                                <Input
                                    hide={!this.state.showPassword}
                                    value={this.state.newPassword}
                                    style={styles.input}
                                    onChangeText={this.onNewPasswordChange}
                                    placeholder={"New Password"}
                                    secureTextEntry={true}
                                />
                                <Input
                                    hide={!this.state.showPassword}
                                    value={this.state.rePassword}
                                    style={styles.input}
                                    onChangeText={this.onRePasswordChange}
                                    placeholder={"Confirm New Password"}
                                    secureTextEntry={true}
                                />

                                <Button 
                                    style={styles.button} 
                                    hide={!this.state.showPassword}
                                    disabled={this.disablePassword()}
                                    label="Update Password"
                                    onPress={this.onPasswordPress} >
                                </Button>
                            </View>

                            <View style={[deleteBoxStyle]}>
                                <View style={styles.headerBox}>
                                    <Text style={styles.title}>Delete Account</Text>
                                    <TouchableOpacity onPress={this.onDeleteDropDownPress}>
                                        <Image source={deleteButton} style={styles.dropDownButton}></Image>
                                    </TouchableOpacity>
                                </View>

                                <Input
                                    hide={!this.state.showDelete}
                                    value={this.state.emailD}
                                    style={styles.input}
                                    onChangeText={this.onEmailDChange}
                                    placeholder={"Email"}
                                />
                                <Input
                                    hide={!this.state.showDelete}
                                    value={this.state.passwordD}
                                    style={styles.input}
                                    onChangeText={this.onPasswordDChange}
                                    placeholder={"Password"}
                                    secureTextEntry={true}
                                />
                                <Button 
                                    style={styles.button} 
                                    hide={!this.state.showDelete}
                                    disabled={this.disableDelete()}
                                    label="Delete Account"
                                    onPress={this.onDeletePress} >
                                </Button>
                            </View>
                        </View>
                    </View>
                
            </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}