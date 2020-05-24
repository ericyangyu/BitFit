/**
 * The Progress page displays the current state of the user's progress. It allows
 * the user to view and edit their profile information. It allows the user to start a new workout
 * or choose to see their trophy case.
 * 
 * Authors: Imran, Sharan, Nour
 */

// External imports
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';

// Internal imports

// Stylesheet
import styles from '../style/r_progress';

// Images
import profile_photo from '../images/default_profile.png'


/**
 * Class that returns the Progress page with correct components and API calls.
 */
export default class Progress extends Component {

    // Call the super constructor and initalize a state variable
    constructor(props) {
        super(props)
        this.state = {
            fullname: "",
            arms: {"level": 0, "exp": 0.0},
            back: {"level": 0, "exp": 0.0},
            chest: {"level": 0, "exp": 0.0},
            core: {"level": 0, "exp": 0.0},
            legs: {"level": 0, "exp": 0.0},
            getUserDone: false,
            getProgressDone: false,
            avatar: ""
        }
    }

    // Route to the trophy page when the trophy button is pressed
    goToTrophy = () => {
        console.log("Going to Trophy...")
        Actions.trophy({ uid: this.props.uid })
    }


    // Route to the profile page when the profile button is pressed
    goToProfile = () => {
        Actions.profile({ uid: this.props.uid })
    }

    // Route to the main start a new workout page when start a new workout button is pressed
    goToMainFocus = () => {
        Actions.mainfocus({ uid: this.props.uid })
    }

    /**
     * When the page is rendered, an API call to the backend is made to get the
     * current user's information to render on the page. It recieves the user's
     * uid from the previous page (login/sign up) through this.props and uses
     * that to make the database call. It recieves a response object
     * that is caught and processed accordingly.
     */
    componentDidMount() {
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
                console.log(response.data.fullname);
                this.setState({
                    fullname: response.data.fullname,
                    getUserDone: true
                })
                this.setState({
                    avatar: response.data.avatar
                })
            })

            // Error
            .catch(error => {
                console.log("User get api call error")
                // Log error 
                if (error.response) {
                    // Call was unsuccessful
                    console.log(error.response.data.fullname);
                    console.log(error.response.status);
                } else if (error.request) {
                    // Request was made but no response was received.
                    console.log(error.request);
                } else {
                    // Something else cause an error
                    console.log('Error', error.message);
                }
            }); 

            // get progress
            url = 'http://10.0.2.2:4200/apis/progress/get';
            data = {
                'uid': this.props.uid
            };
            
            // Make API call
            axios.post(url, data)
                // Success
                .then(response => {
                    this.setState({
                        arms: response.data.Arms,
                        back: response.data.Back,
                        chest: response.data.Chest,
                        core: response.data.Core,
                        legs: response.data.Legs,
                        getProgressDone: true
                    })
                })
                
                // Error
                .catch(error => {
                    console.log("Progress get api call error")
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

    // Render the correct components for the Progress screen
    render() {
        console.log(this.state.fullname)
        let overallLv = this.state.arms.level +
                        this.state.back.level +
                        this.state.chest.level +
                        this.state.core.level +
                        this.state.legs.level;

        // If the API call is not complete, display the loading screen
        if (!this.state.getProgressDone && !this.state.getUserDone) {
        return (
            <View style={styles.spinnerContainer}>
            <Spinner
                visible={this.state.isLoading}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
            />
            </View>
        )
        }

        return (
            <Grid style={styles.container}>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <View>
                            <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={this.goToProfile}>
                                <Image
                                    style={styles.imageStyle}
                                    source={{ uri: `data:image/gif;base64,${this.state.avatar}` }}
                                />
                            </TouchableOpacity>
                        </View>
                    </Col>
                </Row>
                <Row></Row>
                <Row>
                    <Text style={styles.headerStyle}>Hi {this.state.fullname}!</Text>
                </Row>
                <Row></Row>
                <Row>
                    <Text style={styles.textStyle}>Overall Level: {overallLv}</Text>
                </Row>

                <Row>
                    <Col><Text style={styles.textStyle}>Focus</Text></Col>
                    <Col><Text style={styles.textStyle}>Progress</Text></Col>
                    <Col><Text style={styles.textStyle}>Level</Text></Col>
                </Row>

                <Row>
                    <Col>
                        <Text style={styles.textStyle}>Arms</Text>
                    </Col>
                    <Col>
                        <ProgressBarAnimated
                            useNativeDriver={true}
                            width={150}
                            value={this.state.arms.level == 0 ? this.state.arms.exp * 100 : 
                                   (this.state.arms.exp - (2 * this.state.arms.level - 1)) / (2 * this.state.arms.level) * 100}
                            backgroundColorOnComplete="#6CC644"
                        />
                    </Col>
                    <Col>
                        <Text style={styles.textStyle}>{this.state.arms.level}</Text>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Text style={styles.textStyle}>Back</Text>
                    </Col>
                    <Col>
                        <ProgressBarAnimated
                            useNativeDriver={true}
                            width={150}
                            value={this.state.back.level == 0 ? this.state.back.exp * 100 : 
                                   (this.state.back.exp - (2 * this.state.back.level - 1)) / (2 * this.state.back.level) * 100}
                            backgroundColorOnComplete="#6CC644"
                        />
                    </Col>
                    <Col>
                        <Text style={styles.textStyle}>{this.state.back.level}</Text>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Text style={styles.textStyle}>Chest</Text>
                    </Col>
                    <Col>
                        <ProgressBarAnimated
                            useNativeDriver={true}
                            width={150}
                            value={this.state.chest.level == 0 ? this.state.chest.exp * 100 : 
                                   (this.state.chest.exp - (2 * this.state.chest.level - 1)) / (2 * this.state.chest.level) * 100}
                            backgroundColorOnComplete="#6CC644"
                        />
                    </Col>
                    <Col>
                        <Text style={styles.textStyle}>{this.state.chest.level}</Text>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Text style={styles.textStyle}>Core</Text>
                    </Col>
                    <Col>
                        <ProgressBarAnimated
                            useNativeDriver={true}
                            width={150}
                            value={this.state.core.level == 0 ? this.state.core.exp * 100 : 
                                   (this.state.core.exp - (2 * this.state.core.level - 1)) / (2 * this.state.core.level) * 100}
                            backgroundColorOnComplete="#6CC644"
                        />
                    </Col>
                    <Col>
                        <Text style={styles.textStyle}>{this.state.core.level}</Text>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Text style={styles.textStyle}>Legs</Text>
                    </Col>
                    <Col>
                        <ProgressBarAnimated
                            useNativeDriver={true}
                            width={150}
                            value={this.state.legs.level == 0 ? this.state.legs.exp * 100 : 
                                   (this.state.legs.exp - (2 * this.state.legs.level - 1)) / (2 * this.state.legs.level) * 100}
                            backgroundColorOnComplete="#6CC644"
                        />
                    </Col>
                    <Col>
                        <Text style={styles.textStyle}>{this.state.legs.level}</Text>
                    </Col>
                </Row>

                <Row></Row>
                <Row>
                    <View style={styles.buttonStyle}>
                        <TouchableOpacity onPress={this.goToTrophy}>
                            <Text style={styles.buttonTextStyle}>
                                Trophy Case
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Row>
                <Row>
                    <View style={styles.buttonStyle}>
                        <TouchableOpacity onPress={this.goToMainFocus}>
                            <Text style={styles.buttonTextStyle}>
                                Start a New Workout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Row>
                <Row></Row>
            </Grid>
        );
    }
}