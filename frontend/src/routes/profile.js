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
import PhotoUpload from 'react-native-photo-upload'
import axios from 'axios';

// Internal imports

// Stylesheet
import styles from '../style/r_profile';

// Components
import Button from "../components/button";
import Input from "../components/input";
import LoadingScreen from "../components/loading"

// Images
import backButton from '../images/back_button.png'
import editButton from '../images/edit_button.png'
import saveButton from '../images/save_button.png'
import { defaultPhoto } from '../images/default_photo.js';

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
            avatar: "",
            eAvatar: "",
            sessions: 0,
            eSessions: 0,
            time: 0.0,
            eTime: 0.0,
            edit: false,
            isLoading: true
        }
    }

    editsMade = () => {
        return (this.state.eFullname != this.state.fullname) || (this.state.eUsername != this.state.username) ||
            (this.state.eSessions != this.state.sessions) || (this.state.eTime != this.state.time) || (this.state.eAvatar != this.state.avatar)
    }

    onBackPress = () => {
        if (this.state.edit) {
            if (this.editsMade()) {
                Alert.alert(
                    'You have some unsaved changes!',
                    "Are you sure you want to go back?",
                    [{ text: 'YES', onPress: () => Actions.profile({ uid: this.state.uid }) },
                    { text: 'NO' }],
                    { cancelable: false }
                );
            } else {
                Actions.profile({ uid: this.state.uid })
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
            [{
                text: 'YES', onPress: () => {
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

                    if (this.state.eAvatar != this.state.avatar) {
                        data.avatar = this.state.eAvatar;
                    }

                    // Make API call
                    axios.post(url, data)
                        // Success
                        .then(() => {
                            /* Set the state for this page to include the relevant user 
                            information returned from the API call */
                            this.setState({
                                username: this.state.eUsername,
                                fullname: this.state.eFullname,
                                avatar: this.state.eAvatar
                            })

                            Actions.profile({ uid: this.state.uid })
                        })

                        // Error
                        .catch(error => {
                            // Log error 
                            if (error.response) {
                                // Call was unsuccessful
                                console.log(error.userData.username);
                                console.log(error.userData.fullname);
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
                }
            },
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

    onEditPhotoPress = (eAvatar) => {
        this.setState({ eAvatar: eAvatar });
    }

    resetStats = () => {
        // Indicate which API to call and what data to pass in
        let url = 'http://10.0.2.2:4200/apis/progress/reset_stats';
        let info = {
            'uid': this.props.uid
        };

        // Make API call
        axios.post(url, info)
            // Success
            .then(response => {
                this.setState({
                    sessions: 0,
                    eSessions: 0,
                    time: 0.0,
                    eTime: 0.0
                })
            })

            // Error
            .catch(error => {
                // Log error 
                if (error.response) {
                    // Call was unsuccessful
                    console.log(error.userData);
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

    onResetStatsPress = () => {
        Alert.alert(
            'This will reset all your stats!',
            "If you save, they will be lost forever. Are you sure you want to proceed?",
            [{ text: 'YES', onPress: () => this.resetStats() },
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

    onAccountSettingsPress = () => {
        Actions.settings({ uid: this.state.uid })
    }

    componentDidMount = () => {
        // Call user API to get user info
        let url1 = 'http://10.0.2.2:4200/apis/user/get';
        let data1 = {
            'uid': this.props.uid
        };

        // Indicate which API to call and what data to pass in
        let url2 = 'http://10.0.2.2:4200/apis/workouts/get_completed_workouts';
        let data2 = {
            'uid': this.props.uid
        };

        const requestOne = axios.post(url1, data1);
        const requestTwo = axios.post(url2, data2);

        axios
            .all([requestOne, requestTwo])
            .then(
                axios.spread((...responses) => {
                    const userData = responses[0].data;
                    const completedWorkoutsData = responses[1].data;

                    let sessions = 0
                    let time = 0.0
                    // Iterate through each completed workout for this user
                    for (var completed_workout_id in completedWorkoutsData) {
                        sessions += 1
                        console.log(completedWorkoutsData[completed_workout_id].duration)
                        time += parseFloat(completedWorkoutsData[completed_workout_id].duration)
                    }
                    this.setState({
                        sessions: sessions,
                        eSessions: sessions,
                        time: time,
                        eTime: time,
                        uid: this.props.uid,
                        username: userData.username,
                        eUsername: userData.username,
                        fullname: userData.fullname,
                        eFullname: userData.fullname,
                        email: userData.email,
                        avatar: userData.avatar,
                        eAvatar: userData.avatar,
                        edit: this.props.edit,
                        isloading: false,
                    })
                })
            )

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
        // // If the API call is not complete, display the loading screen
        // if (this.state.isLoading) {
        //     return (
        //         // <LoadingScreen></LoadingScreen>
        //         <Text> profile.js</Text >
        //     )
        // }

        let saveStyle = this.editsMade() && this.state.eUsername && this.state.eFullname && this.state.eAvatar ?
            styles.topButton : [styles.topButton, styles.disabled];

        return (this.props.edit ? (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.topBar}>
                        <TouchableOpacity onPress={() => this.onBackPress()}>
                            <Image source={backButton} style={styles.topButton} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onSavePress()} disabled={!(this.editsMade() && this.state.eUsername
                            && this.state.eFullname && this.state.eAvatar)}>
                            <Image source={saveButton} style={saveStyle} />
                        </TouchableOpacity>
                    </View>

                    <PhotoUpload
                        maxHeight={200}

                        photoPickerTitle={'Upload a Profile Picture: '}
                        onPhotoSelect={eAvatar => {
                            if (eAvatar) {
                                this.onEditPhotoPress(eAvatar)
                            }
                        }}
                    >
                        <Image
                            style={styles.photo}
                            resizeMode='cover'
                            source={{ uri: `data:image/gif;base64,${this.state.eAvatar}` }}
                        />
                    </PhotoUpload>

                    <View style={styles.button}>
                        <Button hide={this.state.eAvatar == `${defaultPhoto}`} label={'DELETE PROFILE PHOTO'} onPress={() => this.onEditPhotoPress(`${defaultPhoto}`)} />
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

                        <Image source={{ uri: `data:image/gif;base64,${this.state.eAvatar}` }} style={styles.photo} />

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