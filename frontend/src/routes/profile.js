/**
 * The profile page displays the current stats about the user and their
 * information. It is also where the page where users can edit their 
 * infromation and reset their stats.
 * 
 * Authors: Nour and Samay
 */
 
// External imports
import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Grid, Row, Col } from "react-native-easy-grid";
import axios from 'axios';

// Internal imports

// Stylesheet
import styles from '../style/r_profile'; 

// Components
import Button from "../components/button";
import Input from "../components/input";

// Images
import backButton from '../images/back_button.png'
import editButton from '../images/edit_button.png'
import saveButton from '../images/save_button.png'

/**
 * Class that returns the Profile page with correct components and API calls.
 */
export default class Profile extends Component {

    // Call the super constructor and initalize a state variable
    constructor(props) {
        super(props)
        this.state = {
            uid: "",
            username: "",
            eUsername: "",
            fullname: "",
            eFullname: "",
            email: "",
            eEmail: "",
            avatar: null,
            eAvatar: null,
            sessions: 0,
            eSessions: 0,
            time: 0,
            eTime: 0,
            edit: false
        }
    }

    editsMade = () => {
        return (this.state.eFullname != this.state.fullname) || (this.state.eUsername != this.state.username) ||
               (this.state.eEmail != this.state.email) || (this.state.eSessions != this.state.sessions) || (this.state.eTime != this.state.time)
    }

    onBackPress = () => {
        if (this.state.edit) {
            if (this.editsMade()) {
                Alert.alert(
                    'You have some unsaved changes!',
                    "Are you sure you want to go back?",
                    [{ text: 'YES', onPress: () => Actions.profile({ uid: this.state.uid}) },
                     { text: 'NO' }],
                    { cancelable: false }
                );
            } else {
                Actions.profile({ uid: this.state.uid})
            }
        } else {
            Actions.progress({ uid: this.state.uid })
        }
    }

    onEditPress = () => {
        Actions.profile({ uid: this.state.uid, edit: true })
    }

    onSavePress = () => {
        Alert.alert(
            'Are you sure you want to save your changes?',
            "",
            [{ text: 'YES', onPress: () => {
                // Call user API to get user info
                let url = 'http://10.0.2.2:4200/apis/user/update';
                let data = {
                    'uid': this.props.uid
                };

                if (this.state.eUsername != this.state.username) {
                    data.username = this.state.eUsername;
                }

                if (this.state.eFullname != this.state.fullname) {
                    data.fullname = this.state.eFullname;
                }

                console.log(data)

                /* NEED PHOTO HOSTING
                if (this.state.eAvatar != this.state.avatar) {
                    
                } */

                /* NEED PYREBASE RE-AUTH
                if (this.state.eEmail != this.state.email) {
                    data.username = this.state.eEmail;
                } */

                // Make API call
                axios.post(url, data)
                    // Success
                    .then( () => {
                        /* Set the state for this page to include the relevant user 
                        information returned from the API call */
                        this.setState({
                            username: this.state.eUsername,
                            fullname: this.state.eFullname,
                            // email: this.state.eEmail, NEED PYREBASE RE-AUTH
                            // avatar: this.state.eAvatar ---- NEED PHOTO HOSTING
                        })

                        Actions.profile({ uid: this.state.uid})
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
                
                // AXIOS CALL WHEN COMPLETED WORKOUTS API IS DONE
            }},
             { text: 'NO' }],
            { cancelable: false }
        );
        

    }

    onLogoutPress = () => {
        Alert.alert(
            'Are you sure you want to log out?',
            "You will be taken to the log in screen.",
            [{ text: 'YES', onPress: () => Actions.login() },
             { text: 'NO' }],
            { cancelable: false }
        );
    }

    onEditPhotoPress = () => {
        // NEED PHOTO HOSTING
        console.log('Edit Profile Photo Press');
    }

    onResetStatsPress = () => {
        Alert.alert(
            'This will reset all your stats!',
            "If you save, they will be lost forever. Are you sure you want to proceed?",
            [{ text: 'YES', onPress: () => this.setState({eSessions: 0, eTime: 0}) },
             { text: 'NO' }],
            { cancelable: false }
        );
    }

    onNameChange = (eFullname) => {
        this.setState({ eFullname: eFullname });
    }

    onUsernameChange = (eUsername) => {
        this.setState({ eUsername: eUsername });
    }

    onEmailChange = (eEmail) => {
        this.setState({ eEmail: eEmail });
    }

    onAccountSettingsPress = () => {
        Actions.settings({ uid: this.state.uid})
    }

    componentDidMount() {
        // Call user API to get user info
        let url = 'http://10.0.2.2:4200/apis/user/get';
        let data = {
            'uid': this.props.uid
        };
        
        // Make API call
        axios.post(url, data)
            // Success
            .then(response => {
                /* Set the state for this page to include the relevant user 
                information returned from the API call */
                this.setState({
                    uid: this.props.uid,
                    username: response.data.username,
                    eUsername: response.data.username,
                    fullname: response.data.fullname,
                    eFullname: response.data.fullname,
                    email: response.data.email,
                    eEmail: response.data.email,
                    avatar: require("../images/default_profile.png"), // HARDCODED: NEED PHOTO HOSTING
                    eAvatar: require("../images/default_profile.png"), // HARDCODED: NEED PHOTO HOSTING
                    edit: this.props.edit
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
        
        // Call completed_workouts API to get sessions done by user
        /* CODE BELOW NEEDS TO BE REPLACED BY AXIOS CALL WHEN COMPLETED WORKOUTS
        API IS DONE */
        this.setState({
            sessions: 4,
            eSessions: 4,
            time: 20,
            eTime: 20
        })
    }

    render() {
        let saveStyle = this.editsMade() && this.state.eUsername && this.state.eFullname && this.state.eEmail ? 
                        styles.topButton : [styles.topButton, styles.disabled];

        return (this.props.edit ? (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => this.onBackPress()}>
                        <Image source={backButton} style={styles.topButton} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onSavePress()} disabled={!this.editsMade()}>
                        <Image source={saveButton} style={saveStyle} />
                    </TouchableOpacity>
                </View>

                <Image source={this.state.eAvatar} style={styles.photo}/>

                <View style={styles.button}>
                    <Button label={'EDIT PHOTO'} onPress={() => this.onEditPhotoPress()} />
                </View>

                <Grid>
                    <Col>
                        <Row>
                            <Text style={styles.statsTitle}>Sessions</Text>
                        </Row>
                        <Row>
                            <Text style={styles.stats}>
                                {this.state.eSessions}
                            </Text>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Text style={styles.statsTitle}>Time</Text>
                        </Row>
                        <Row>
                            <Text style={styles.stats}>
                                {this.state.eTime}
                            </Text>
                        </Row>
                    </Col>
                </Grid>

                <View style={styles.button}>
                    <Button label={'RESET STATS'} onPress={() => this.onResetStatsPress()} />
                </View>

                <Input
                    style={styles.input}
                    value={this.state.eFullname}
                    onChangeText={this.onNameChange}
                    placeholder={"Name"}
                />
                <Input
                    style={styles.input}
                    value={this.state.eUsername}
                    onChangeText={this.onUsernameChange}
                    placeholder={"Username"}
                />
            </ScrollView>
        </View>

        ) : (

        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => this.onBackPress()}>
                        <Image source={backButton} style={styles.topButton} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onEditPress()}>
                        <Image source={editButton} style={styles.topButton} />
                    </TouchableOpacity>
                </View>

                <Image source={this.state.avatar} style={styles.photo}/>

                <Grid>
                    <Col>
                        <Row>
                            <Text style={styles.statsTitle}>Sessions</Text>
                        </Row>
                        <Row>
                            <Text style={styles.stats}>
                                {this.state.sessions}
                            </Text>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Text style={styles.statsTitle}>Time</Text>
                        </Row>
                        <Row>
                            <Text style={styles.stats}>
                                {this.state.time}
                            </Text>
                        </Row>
                    </Col>
                </Grid>

                <Text style={styles.info}>{this.state.fullname}</Text>
                <Text style={styles.info}>@{this.state.username}</Text>
                <Text style={styles.info}>{this.state.email}</Text>

                <View style={styles.button}>
                    <Button label={'ACCOUNT SETTINGS'} onPress={() => this.onAccountSettingsPress()} />
                    <Button label={'LOG OUT'} onPress={() => this.onLogoutPress()} />
                </View>   
            </ScrollView>
        </View>
        ))
    }
}