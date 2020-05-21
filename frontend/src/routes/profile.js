/**
 * The profile page displays the current stats about the user and their
 * information. It is also where the page where users can edit their 
 * infromation and reset their stats.
 * 
 * Authors: Nour and Samay
 */

 // External imports
import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Grid, Row, Col } from "react-native-easy-grid";
import axios from 'axios';

// Internal imports

// Stylesheet
import styles from '../style/r_profile'; 

// Components
import Button from "../components/button";

// Images
import backButton from '../images/back_button.png'
import editButton from '../images/edit_button.png'

// import profilePhoto from "../images/profile.png";
// import TextField from "../components/text_field";


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
            uid: "",
            username: "",
            fullname: "",
            email: "",
            avatar: null,
            sessions: 0,
            time: 0,
            edit: false
        }
    }

    handleBackPress = () => {
        if (this.state.edit) {
            Actions.profile({ uid: this.state.uid, edit: false })
        } else {
            Actions.progress({ uid: this.state.uid })
        }
    }

    handleEditPress = () => {
        Actions.profile({ uid: this.state.uid, edit: true })
    }

    handleLogoutPress = () => {
        Actions.login()
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
                console.log(response.data);
                this.setState({
                    username: response.data.username,
                    fullname: response.data.fullname,
                    email: response.data.email,
                    avatar: require("../images/profile.png") // HARDCODED: NEEDS UPLOAD PHOTO FEATURE
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
            time: 20
        })
    }

    render() {
        return (this.props.edit ? (
            <Grid style={styles.container}>
                <Row>
                    <Col>
                        <TouchableOpacity onPress={() => handleBackPress()}>
                            <Image style={styles.button} source={backButton} />
                        </TouchableOpacity>
                    </Col>  
                </Row>
                <Row><Text> Edit Mode </Text></Row>
            </Grid>

        ) : (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => handleBackPress()}>
                    <Image source={backButton} style={styles.topButton} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleEditPress()}>
                    <Image source={editButton} style={styles.topButton} />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView}>
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
                    <Text style={styles.info}>{this.state.username}</Text>
                    <Text style={styles.info}>{this.state.email}</Text>

                    <View style={styles.button}>
                        <Button label={'LOG OUT'} onPress={() => handleLogoutPress()} />
                    </View>
                    
            </ScrollView>
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