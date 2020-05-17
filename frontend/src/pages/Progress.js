/**
 * The Progress page displays the current state of the user's progress. It allows
 * the user to view and edit their profile information. It allows the user to start a new workout
 * or choose to see their trophy case.
 * 
 * Authors: Imran, Sharan, Nour
 */

// library imports
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

// Component imports
import profilePic from "../resources/profilepic.png";

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

    /**
     * When the page is rendered, an API call to the backend is made to get the
     * current user's information to render on the page. It recieves the user's
     * UID from the previous page (login/sign up) through this.props and uses
     * that to make the database call. It recieves a response object
     * that is caught and processed accordingly.
     */
    componentDidMount() {
        // Make an Axios Post call with the data
        // IMPORANT: This is the format of how to make API calls from the front end
        const response = axios({
            method: "post",
            url: 'http://10.0.2.2:5000/apis/user/get_user',
            // This is how axios sends request body data to the backend
            // data : dictionary
            // the response is the data returned from the API call
            data: {
                UID: this.props.UID
            }
        })
            .then((response) => {
                // IMPORTANT: Sets the state for this page to include the relevant
                // user information returned from the API call
                console.log(response.data);
                this.setState({
                    fullname: response.data.fullname
                })
            })
            .catch((error) => {
                // log error information
                if (error.response) {
                    // The call was unsuccessful
                    console.log(error.response.data);
                    console.log(error.response.status);
                } else if (error.request) {
                    // The request was made but no response was received.
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request and triggered an Error
                    console.log('Error', error.message);
                }
            });
    }

    // Route to the profile page when the profile button is pressed
    goToProfile = () => {
        Actions.profile()
    }

    // Route to the main start a new workout page when start a new workout button is pressed
    goToMainFocus = () => {
        Actions.mainfocus()
    }

    // Render the correct components for the Progress screen
    render() {
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
                                    source={profilePic}
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
                    <Text style={styles.textStyle}>Overall Level: 6</Text>
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
                            useNativeDriver={false}
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
                            width={150}
                            value={50}
                            backgroundColorOnComplete="#6CC644"
                        />
                    </Col>
                    <Col>
                        <Text style={styles.textStyle}>4</Text>
                    </Col>
                </Row>

                <Row></Row>
                <Row>
                    <View style={styles.buttonStyle}>
                        <TouchableOpacity>
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

// Style for this page
const styles = StyleSheet.create({
    // Style the container for the components on the page
    container: {
        backgroundColor: '#f3ebe1',
        marginTop: 0,
        alignItems: 'center'
    },
    // Style for the progress bar
    progressbar: {
        marginTop: 13
    },
    // Style for the images
    imageStyle: {
        width: 75,
        height: 75
    },
    // Style for the touchable opacity style
    TouchableOpacityStyle: {
        margin: 10
    },
    // Style for the buttons
    buttonStyle: {
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#212143',
        borderRadius: 10,
        borderColor: '#fff',
    },
    // Style for the text on the buttons
    buttonTextStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0,
        color: '#fff'
    },
    // Style for the header
    headerStyle: {
        fontSize: 36,
        textAlign: 'center',

    },
    // Style for the text components
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0
    }
});