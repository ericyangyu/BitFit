/**
 * The Progress page displays the current state of the user's progress. It allows
 * the user to view and edit their profile information. It allows the user to start a new workout
 * or choose to see their trophy case.
 * 
 * Authors: Imran, Sharan, Nour
 */

import styles from '../style/r_progress';
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';

import axios from 'axios';

const api = 'http://10.0.2.2:5000/apis/';

class Progress extends React.Component {

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
            url: api + 'user/get_user',
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

    goToProfile = () => {
        Actions.profile()
    }

    goToMainFocus = () => {
        Actions.mainfocus()
    }

    render() {
        const barWidth = 150;
        console.log("Printing fullname...")
        console.log(this.state.fullname)

        return (
            <Grid style={styles.container}>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <View>
                            <TouchableOpacity style={{ margin: 10 }} onPress={this.goToProfile}>
                                <Image
                                    style={{ width: 75, height: 75 }}
                                    source={require('../images/profile_photo.png')}
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
                            width={barWidth}
                            value={50}
                            backgroundColorOnComplete="#6CC644"
                        />
                        {/* <ProgressBar progress={0.5} color={Colors.red800}
                        style={styles.progressbar} /> */}
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
                            width={barWidth}
                            value={50}
                            backgroundColorOnComplete="#6CC644"
                        />
                        {/* <ProgressBar progress={0.5} color={Colors.red800}
                        style={styles.progressbar} /> */}
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
                            width={barWidth}
                            value={50}
                            backgroundColorOnComplete="#6CC644"
                        />
                        {/* <ProgressBar progress={0.5} color={Colors.red800}
                        style={styles.progressbar} /> */}
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

export default Progress;