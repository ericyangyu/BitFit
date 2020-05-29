/**
 * The activity log page displays the last x completed workouts for the user.
 * 
 * Authors: Imran
 */

// External imports
import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { Actions } from 'react-native-router-flux';

// Internal imports
import api from '../config'

// Stylesheet
import styles from '../style/r_activitylog';

// Components
import CompletedWorkout from "../components/completed_workout"
import LoadingScreen from "../components/loading"

// Images
import backButton from '../images/back_button.png'

/**
 * Class that returns the the Activity Log page with the workouts rendered
 */
export default class ActivityLog extends Component {
    // Call the super constructor and initalize a state variable
    constructor(props) {
        super(props)
        this.state = { workouts: [], response: [], isLoading: true };
    }

    // Route to the progress page when progress button is pressed
    goToProgress = () => {
        Actions.pop()
    }

    // Creates a new state variable that contains a list of reformatted workout objects of size x
    extractMostRecent = () => {
        // Store the reformatted workout objects in this list
        var workouts = []
        // Counter for number of workouts to display
        var i = 0
        // Iterate through each completed workout for this user
        for (var workout_id in this.state.response) {
            // Reformat the workout object and store into a list
            let data = { data: this.state.response[workout_id] }
            workouts.push(data)

            // Increment the counter and check if gathered enough exercises
            i += 1
            if (i > 10) { break; }
        }

        // Set a state variable containing the new formatted workout objects
        this.setState(
            { workouts: workouts }
        )
    }

    // Makes the Axios call get the completed workouts for this user, then calls function to parse it
    componentDidMount() {
        // Indicate which API to call and what data to pass in
        let url = 'workouts/get_completed_workouts';
        let info = {
            'uid': this.props.uid
        };
        // Make API call
        api.post(url, info)
            // Success
            .then(response => {
                // Save the list of trophies returned and now loading screen can be removed
                this.setState({
                    response: response.data,
                })
                // Make the call to select completed workouts and reformat them
                this.extractMostRecent()
                // now loading screen can be removed
                this.setState({
                    isLoading: false
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

    render() {
        // If the API call is not complete, display the loading screen
        if (this.state.isLoading) {
            return (
                <LoadingScreen></LoadingScreen>
            )
        }

        if (this.state.workouts.length === 0) {
            return (
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.goToProgress()}>
                        <Image source={backButton} style={styles.topButton} />
                    </TouchableOpacity>
                    <Text style={styles.header}>
                        Activity Log
                </Text>
                    <Text style={styles.header}>
                        No Workouts Completed!
                    </Text>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.goToProgress()}>
                    <Image source={backButton} style={styles.topButton} />
                </TouchableOpacity>
                <Text style={styles.header}>
                    Activity Log
                </Text>
                <View>
                    <FlatList
                        style={styles.flatList}
                        data={this.state.workouts}
                        keyExtractor={item => item.workout_name}
                        renderItem={({ item: workout }) => (
                            <CompletedWorkout workout={workout}></CompletedWorkout>
                        )}
                    />
                </View>

            </View >
        );
    }
}

