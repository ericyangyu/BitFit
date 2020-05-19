/**
 * The profile page displays the current stats about the user and their
 * information. It is also where the page where users can edit their 
 * infromation and reset their stats.
 * 
 * Authors: Nour and Samay
 */

 // External imports
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

// Internal imports

// Stylesheet
import styles from '../style/r_profile'; 

// Components
import TextField from "../components/text_field";

/*
// External imports
import React, { useState, Component } from 'react';
import { View, Image, TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';

// Internal imports

// Stylesheet
import styles from '../style/r_profile'; 

// Components
import Input from "../components/input";
import Button from "../components/button";
import TextField from "../components/text_field";

// Images
import profilePhoto from "../images/profile.png";
*/

/* 
TODO:
- disable save button if no changes made OR if one field is emty
- edit password field
- edit photo fnality
- Make all text centered
- Add logout fnality
*/

/**
 * Class that returns the Profile page with correct components and API calls.
 */
export default class Profile extends Component {

    // Call the super constructor and initalize a state variable
    constructor(props) {
        super(props)
        this.state = {
            uid = "",
            username = "",
            fullname: "",
            email = "",
            sessions = 0,
            time = 0,
            edit = false
        }
    }

    editProfile = () => {
        Actions.profile({ uid: this.props.uid, edit: true })
    }

    logout = () => {
        Actions.login()
    }

    back = () => {
        Actions.progress({ uid: this.props.uid })
    }

    saveAndResetStats = () => {
        // NEED TO UPDATE DATABASE
        Actions.profile({ uid: this.props.uid, edit: false })
    }

    cancel = () => {
        Actions.profile({ uid: this.props.uid, edit: false })
    }

    editPhoto = () => {
        // NEED PHOTO HOSTING
        // NEED TO UPDATE DATABASE
        Actions.profile({ uid: this.props.uid, edit: false })
    }

    componentDidMount() {
        // Axios call to get user info
    }

    render() {
        return (this.props.edit ? (
            <View style={styles.profileContainer}>
                <TextField> Edit Mode </TextField>
            </View>
        ) : (
            <View style={styles.profileContainer}>
                <TextField> View Mode </TextField>
            </View>   
        ))
    }

}

/*
export default function Profile() {
    const [name, setName] = useState('First Last');
    const [username, setUsername] = useState('username');
    const [email, setEmail] = useState('user@email.com');
    const [sessions, setSessions] = useState(5);
    const [hours, setHours] = useState(20);
    const [editMode, setEditMode] = useState(false);

    // D for displayed
    const [nameD, setNameD] = useState(name);
    const [usernameD, setUsernameD] = useState(username);
    const [emailD, setEmailD] = useState(email);
    const [sessionsD, setSessionsD] = useState(sessions);
    const [hoursD, setHoursD] = useState(hours);

    const goBack = () => {
        Actions.progress()
    }

    const goToLogIn = () => {
        Actions.login()
    }

    return (editMode ? (
        <View style={styles.profileContainer}>
        <View style={styles.form}>
            <Image source={profilePhoto} style={styles.photo} />
            <Button label='EDIT PHOTO' />

            <TextField>
            Number of Sessions: {sessionsD}     |     Time working out: {hoursD}
            </TextField>
            <Button label='RESET STATS' onPress={() => {
                setSessionsD(0);
                setHoursD(0);
            }} />

            <Input
                placeholder={name}
                onChangeText={name => setNameD(name)}
                defaultValue={name} />
            <Input
                placeholder={username}
                onChangeText={username => setUsernameD(username)}
                defaultValue={username} />
            <Input
                placeholder={email}
                onChangeText={email => setEmailD(email)}
                defaultValue={email}
            />

            <Button label='SAVE' onPress={() => {
                setName(nameD);
                setUsername(usernameD);
                setEmail(emailD);
                setSessions(sessionsD)
                setHours(hoursD)
                setEditMode(false);
            }} />
            <Button label='CANCEL' onPress={() => {
                setNameD(name);
                setUsernameD(username);
                setEmailD(email);
                setSessionsD(sessions)
                setHoursD(hours)
                setEditMode(false);
            }} />
        </View>
        </View>

    ) : (
        <View style={styles.profileContainer}>
            <View style={{ marginRight: 310 }}>
            <TouchableOpacity onPress={() => goBack()}>
                <Image
                    style={{ width: 75, height: 75 }}
                    source={require('../images/back_button.png')}
                />
            </TouchableOpacity>
            </View>
            <View style={styles.form}>
            <Image source={profilePhoto} style={styles.photo} />
            <TextField>
                Number of Sessions: {sessionsD}     |     Time working out: {hoursD}
            </TextField>

            <TextField> Name: {nameD} </TextField>
            <TextField> Username: {usernameD} </TextField>
            <TextField> E-mail: {emailD} </TextField>

            <Button label='EDIT PROFILE' onPress={() => { setEditMode(true) }} />
            <Button
                label={'LOGOUT'}
                onPress={() => goToLogIn()}
            />
            </View>
        </View>
    ));
}
*/