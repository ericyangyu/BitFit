/**
 * The activity log page displays the last x amount of activites for the user
 * 
 * Authors: Imran, Sharan, Nour
 */

// External imports
import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text, Alert, StyleSheet, FlatList } from "react-native";
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';

// Internal imports

// Stylesheet
import styles from '../style/r_activitylog';

// Components
import CompletedWorkout from "../components/completed_workout"

// Images
import logo from "../images/logo.png";

/**
 * Class that returns the Login page with correct components and API calls.
 */
export default class ActivityLog extends Component {
    // Call the super constructor and initalize a state variable
    constructor(props) {
        super(props)
        this.state = { workouts: [], response: [], isLoading: true };
    }

    // Route to the signup page when sign up button is pressed
    goToProgress = () => {
        Actions.progress({ uid: this.props.user.uid })
    }

    // Creates a new state variable that contains a list of reformatted workout objects of size x
    extractMostRecent = () => {
        var workouts = []
        var i = 0
        for (var workout_id in this.state.response) {
            for (var workout in this.state.response[workout_id]) {
                let data = { "name": workout, data: this.state.response[workout_id][workout] }
                workouts.push(data)
            }
            this.setState(
                { workouts: workouts }
            )
            i += 1
            console.log(i)
            if (i === 4) { break; }
        }
    }

    // Makes the Axios call get the workout for this user, then calls function to parse it
    componentDidMount() {
        // Indicate which API to call and what data to pass in
        let url = 'http://10.0.2.2:4200/apis/workouts/get_completed_workouts';
        let info = {
            'uid': this.props.uid
        };
        // Make API call
        axios.post(url, info)
            // Success
            .then(response => {

                // Save the list of trophies returned and now loading screen can be removed
                this.setState({
                    response: response.data,
                    isLoading: false
                })
                this.extractMostRecent()
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


    render() {
        // If the API call is not complete, display the loading screen
        if (this.state.isLoading) {
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
        // return (<Text>Test</Text>);
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />

                <View>
                    <FlatList
                        style={{ width: '100%', top: 15 }}
                        data={this.state.workouts}
                        keyExtractor={item => item.name}
                        renderItem={({ item: workout }) => (
                            <CompletedWorkout workout={workout}></CompletedWorkout>
                        )}
                    />
                </View>
            </View >
        );
    }
}

