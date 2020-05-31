/**
 * Displays post workout stats
 * 
 * Authors: Jeremy, Steven
 */

// External imports
import React, { Component } from 'react';
import { View, Text, Image } from "react-native";
import { Actions } from 'react-native-router-flux';

// Internal imports
import api from '../config'

// Stylesheet
import styles from '../style/r_stats';

// Components
import Button from "../components/button";

//Images
import blue from '../images/login_background.jpg';

/**
 * Class that returns the stats page
 */
export default class Stats extends Component {

    constructor(props) {
        super(props)
    }

    addWorkout = () => {
        /**
         * Add workout to completed workout
         */

        let url = 'completed_workouts/add_workout';
        let date = new Date();
        let data = {
            'uid': this.props.uid,
            'workout_name': this.props.workout,
            'duration': this.props.duration,
            'date': date.toString()
        };
        api.post(url, data)
            .then(response => {
                // console.log(response.data)
                console.log("Added completed workout...")
                this.updateTrophies(date)
            })

            .catch((error) => {
                console.log("add workout call error");
                alert(error.message);
            });
    }

    updateTrophies = (date) => {
        /**
         * Add workout to completed workout
         */

        let url = 'trophy/update_user_trophies';
        let data = {
            'uid': this.props.uid,
            "date": date.toString()
        };

        api.post(url, data)
            .then(response => {
                console.log(response.data)
                console.log("Updated Trophies...")
            })

            .catch((error) => {
                console.log("Update Trophies call error");
                alert(error.message);
            });

    }

    add = () => {
        this.addWorkout()
    }

    // Route to the progress page after completing workout
    goToProgress() {
        this.add()
        Actions.progress({ uid: this.props.uid })
    }

    // renders stats display
    render() {
        return (
            <View style={styles.container}>
                <Image source={blue} style={styles.backgroundImage} />
                <View style={styles.form}>
                 {   /*<View style={styles.form2}> */}
                {this.props.leveledUp ?
                        <Text style={styles.finishTextStyle}>
                            Leveled Up {this.props.focus}!
                        </Text> :
                        <Text style={styles.finishTextStyle}>
                            Completed Workout!
                        </Text>
                    }
                    <Text style={styles.summaryTextStyle}>
                        Summary of Workout
                    </Text>
                    <Text style={styles.detailsTextStyle}>
                        Workout: {this.props.workout}
                    </Text>
                    <Text style={styles.detailsTextStyle}>
                        Focus: {this.props.focus}
                    </Text>
                    <Text style={styles.detailsTextStyle}>
                        Hours spent: {this.props.duration}
                    </Text>
                    <View style={styles.buttonView}>
                    <Button onPress={() => this.goToProgress()}
                        label="Continue"
                    />
                    {/*</View>*/}
                    </View>
                </View>
            </View>
        );
    }
}