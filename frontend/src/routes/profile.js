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
import axios from 'axios'

// DEBUG
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

// Internal imports
import api from '../config'

// Stylesheet
import styles from '../style/r_profile';

// Components
import Button from "../components/button";
import Input from "../components/input";
import NavBar from "../components/nav_bar"
import LoadingScreen from "../components/loading"

// Images
import backButton from '../images/back_button.png'
import editButton from '../images/edit_button.png'
import saveButton from '../images/save_button.png'
import { defaultPhoto } from '../images/default_photo.js';
import blue from '../images/blue.jpg'

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
                    [{ text: 'YES', onPress: () => Actions.pop() },
                    { text: 'NO' }],
                    { cancelable: false }
                );
            } else {
                Actions.pop()
            }
        } else {
            Actions.pop()
        }
    }

    onEditPress = () => {
        Actions.profile({ uid: this.state.uid, edit: true })
        this.getPermissionAsync()
    }

    onSavePress = () => {
        Alert.alert(
            'Are you sure you want to save your changes?',
            "",
            [{
                text: 'YES', onPress: () => {
                    // Call user API to get user info
                    let url = 'user/update';
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
                    api.post(url, data)
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
        let url = 'progress/reset_stats';
        let info = {
            'uid': this.props.uid
        };

        // Make API call
        api.post(url, info)
            // Success
            .then(response => {
                this.setState({
                    eSessions: 0,
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
                this.onEditPhotoPress(result.base64)
            }
        } catch (E) {
            console.log(E);
        }
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    componentDidMount = () => {
        // Call user API to get user info
        let url1 = 'user/get';
        let data1 = {
            'uid': this.props.uid
        };

        // Indicate which API to call and what data to pass in
        let url2 = 'workouts/get_completed_workouts';
        let data2 = {
            'uid': this.props.uid
        };

        const requestOne = api.post(url1, data1);
        const requestTwo = api.post(url2, data2);

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
        const deletePhotoStyle = this.state.eAvatar == `${defaultPhoto}` ? null : styles.button
        const resetStatsStyle = this.state.eSessions == 0 && this.state.eTime == 0 ? null : styles.button
        const backImgStyle = this.state.eAvatar == `${defaultPhoto}` ? styles.backImage : [styles.backImage, styles.longerImg]

        return (this.props.edit ? (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Image style={backImgStyle} source={blue} />

                    <NavBar
                        left={backButton}
                        leftOnPress={this.onBackPress}
                        right={saveButton}
                        rightOnPress={this.onSavePress}
                        rightDisabled={!(this.editsMade() && this.state.eUsername && this.state.eFullname && this.state.eAvatar)}
                    >
                    </NavBar>

                    <TouchableOpacity onPress={this._pickImage} style={{ margin: 0 }} >
                        <Image
                            style={styles.photo}
                            resizeMode='cover'
                            source={{ uri: `data:image/gif;base64,${this.state.eAvatar}` }}
                        />
                    </TouchableOpacity>

                    <View style={deletePhotoStyle}>
                        <Button hide={this.state.eAvatar == `${defaultPhoto}`} label={'Delete Profile Photo'} onPress={() => this.onEditPhotoPress(`${defaultPhoto}`)} />
                    </View>

                    <Grid elevation={5} style={styles.statsGrid}>
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

                    <View style={resetStatsStyle}>
                        <Button hide={this.state.eSessions == 0 && this.state.eTime == 0} label={'Reset Stats'} onPress={() => this.onResetStatsPress()} />
                    </View>

                    <View elevation={5} style={styles.inputGrid}>
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
                    </View>
                </ScrollView>
            </View>

        ) : (
                <View style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                        <Image style={styles.backImage} source={blue} />

                        <NavBar
                            left={backButton}
                            leftOnPress={this.onBackPress}
                            right={editButton}
                            rightOnPress={this.onEditPress}
                        >
                        </NavBar>

                        <Image source={{ uri: `data:image/gif;base64,${this.state.avatar}` }} style={styles.photo} />

                        <Grid elevation={5} style={styles.statsGrid}>
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

                        <View elevation={5} style={styles.infoGrid}>
                            <Text style={styles.info}>{this.state.fullname}</Text>
                            <Text style={styles.info}>@{this.state.username}</Text>
                            <Text style={styles.info}>{this.state.email}</Text>
                        </View>

                        <View style={styles.button}>
                            <Button label={'Account Settings'} onPress={() => this.onAccountSettingsPress()} />
                            <Button label={'Log Out'} onPress={() => this.onLogoutPress()} />
                        </View>

                    </ScrollView>
                </View>

            ))
    }
}
