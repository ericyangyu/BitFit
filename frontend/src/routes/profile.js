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
            sessions: 0,
            time: 0,
            edit: false,
            editsMade: false
        }
    }

    handleBackPress = () => {
        if (this.state.edit) {
            if (this.state.editsMade) {
                Alert.alert(
                    'You have some unsaved changes!',
                    "Are you sure you want to go back?",
                    [{ text: 'YES', onPress: () => Actions.profile({ uid: this.state.uid, edits: false }) },
                     { text: 'NO' }],
                    { cancelable: false }
                );
            } else {
                Actions.profile({ uid: this.state.uid, edits: false })
            }
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

    handleEditPhotoPress = () => {
        // NEED PHOTO HOSTING
        console.log('Edit Profile Photo Press');
    }

    handleResetStatsPress = () => {
        Alert.alert(
            'This will reset all your stats!',
            "If you save, they will be lost forever. Are you sure you want to proceed?",
            [{ text: 'YES', onPress: () => this.setState({sessions: 0, time: 0,editsMade: true }) },
             { text: 'NO' }],
            { cancelable: false }
        );
    }

    handleNameChange = (eFullname) => {
        this.setState({ 
            eFullname: eFullname,
            editsMade: this.state.editsMade || (eFullname != this.state.fullname)
        });
    }

    handleUsernameChange = (eUsername) => {
        this.setState({ 
            eUsername: eUsername,
            editsMade: this.state.editsMade || (eUsername != this.state.username)
        });
    }

    handleEmailChange = (eEmail) => {
        this.setState({ 
            eEmail: eEmail,
            editsMade: this.state.editsMade || (eEmail != this.state.email)
        });
    }

    handleSavePress = () => {
        console.log("SAVE");
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
                    uid: this.props.uid,
                    username: response.data.username,
                    eUsername: response.data.username,
                    fullname: response.data.fullname,
                    eFullname: response.data.fullname,
                    email: response.data.email,
                    eEmail: response.data.email,
                    avatar: require("../images/default_profile.png"), // HARDCODED: NEED PHOTO HOSTING
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
            time: 20
        })
    }

    render() {
        return (this.props.edit ? (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => this.handleBackPress()}>
                        <Image source={backButton} style={styles.topButton} />
                    </TouchableOpacity>
                </View>

                <Image source={this.state.avatar} style={styles.photo}/>

                <View style={styles.button}>
                    <Button label={'EDIT PHOTO'} onPress={() => this.handleEditPhotoPress()} />
                </View>

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

                <View style={styles.button}>
                    <Button label={'RESET STATS'} onPress={() => this.handleResetStatsPress()} />
                </View>

                <Input
                    style={styles.input}
                    value={this.state.eFullname}
                    onChangeText={this.handleNameChange}
                    placeholder={this.state.eFullname}
                />
                <Input
                    style={styles.input}
                    value={"@" + this.state.eUsername}
                    onChangeText={this.handleUsernameChange}
                    placeholder={"@" + this.state.eUsername}
                />
                <Input
                    style={styles.input}
                    value={this.state.eEmail}
                    onChangeText={this.handleEmailChange}
                    placeholder={this.state.eEmail}
                />

                <View style={styles.button}>
                    <Button label={'SAVE'} onPress={() => this.handleSavePress()} />
                </View>
            </ScrollView>
        </View>

        ) : (

        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => this.handleBackPress()}>
                        <Image source={backButton} style={styles.topButton} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.handleEditPress()}>
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
                    <Button label={'LOG OUT'} onPress={() => this.handleLogoutPress()} />
                </View>   
            </ScrollView>
        </View>
        ))
    }
}