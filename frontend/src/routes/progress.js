/**
 * The Progress page displays the current state of the user's progress. It allows
 * the user to view and edit their profile information. It allows the user to start a new workout
 * or choose to see their trophy case.
 * 
 * Authors: Imran, Sharan, Nour
 */

// External imports
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

// Internal imports

// Components
import Button from "../components/button";

// Stylesheet
import styles from '../style/r_progress';

// Images
import profile_photo from '../images/default_profile.png'
import blue from '../images/blue.jpg'


/**
 * Class that returns the Progress page with correct components and API calls.
 */
export default class Progress extends Component {

    // Call the super constructor and initalize a state variable
    constructor(props) {
        super(props)
        this.state = {
            fullname: ""
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
                console.log(response.data);
                this.setState({
                    fullname: response.data.fullname
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

    // Render the correct components for the Progress screen
    render() {
        return (
            <Grid style={styles.container}>
                <Row>
                    <Col>
                        <View>
                            <Image
                                style={{ width: window.width, height: 200, opacity: 1.8 }}
                                source={blue}
                            />
                            <TouchableOpacity style={{ marginLeft: 20, marginTop: -180, alignItems: 'stretch' }}
                                onPress={this.goToProfile}>
                                <Image
                                    style={styles.imageStyle}
                                    source={profile_photo}
                                />
                            </TouchableOpacity>
                            <Text style={styles.headerStyle}>Hi {this.state.fullname}!</Text>
                        </View>
                    </Col>
                </Row>
                <Row>
                    <View elevation={5} style={styles.whiteBox1}>
                        <Text style={styles.textStyle}>Overall Level: 6</Text>
                    </View>

                </Row>
                <Row>
                    <View elevation={5} style={styles.whiteBox2}>

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
                                    value={50}
                                    backgroundColorOnComplete="#6CC644"
                                />
                            </Col>
                            <Col>
                                <Text style={styles.textStyle}>4</Text>
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
                                    value={50}
                                    backgroundColorOnComplete="#6CC644"
                                />
                            </Col>
                            <Col>
                                <Text style={styles.textStyle}>4</Text>
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
                                    value={50}
                                    backgroundColorOnComplete="#6CC644"
                                />
                            </Col>
                            <Col>
                                <Text style={styles.textStyle}>4</Text>
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
                                    value={50}
                                    backgroundColorOnComplete="#6CC644"
                                />
                            </Col>
                            <Col>
                                <Text style={styles.textStyle}>4</Text>
                            </Col>
                        </Row><Row>
                            <Col>
                                <Text style={styles.textStyle}>Chest</Text>
                            </Col>
                            <Col>
                                <ProgressBarAnimated
                                    useNativeDriver={true}
                                    width={150}
                                    value={50}
                                    backgroundColorOnComplete="#6CC644"
                                />
                            </Col>
                            <Col>
                                <Text style={styles.textStyle}>4</Text>
                            </Col>
                        </Row>
                    </View>
                </Row>
                <Row>
                    <Col>
                        <View style={styles.buttonView}>
                            <Button
                                label={"  Start a New Workout   "}
                                onPress={this.goToMainFocus}
                            />
                        </View>
                    </Col>
                    <Col>
                        <View style={styles.buttonView}>
                            <Button
                                label={"Trophy Case"}
                                onPress={this.goToTrophy}
                            />
                        </View>
                    </Col>
                </Row>
            </Grid>
        );
    }
}