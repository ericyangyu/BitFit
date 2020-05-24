/**
 * Displays post workout stats
 * 
 * Authors: Jeremy, Steven
 */

// External imports
import React, { Component } from 'react';
import { View, Text } from "react-native";
import { Actions } from 'react-native-router-flux';
import axios from "axios";

// Internal imports

// Stylesheet
import styles from '../style/r_stats';

// Components
import Button from "../components/button";

/**
 * Class that returns the stats page
 */
export default class Stats extends Component {

    constructor(props) {
        super(props)
    }

    add = () => {
        /**
         * Add workout to completed workout
         */
        
        let url = 'http://10.0.2.2:4200/apis/completed_workouts/add_workout';
        let date = "1/2/3"
        let data = {
            'uid': this.props.uid,
            'workout_name':  this.props.workout,
            'duration': this.props.duration,
            'date': this.props.date
        };
        axios.post(url, data)
            .then(response => {
                console.log(response.data)
            })
            
            .catch((error)=>{
                console.log("Update progress call error");
                alert(error.message);
            });

    }
    

	// Route to the progress page after completing workout
	goToProgress() {
        this.add()
        Actions.progress({uid: this.props.uid})
    }


    // renders stats display
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>

                    { this.props.leveledUp ?
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
                    <Button onPress={() => this.goToProgress()}
                        label="Continue"
                    />
                </View>
            </View>
        );
    }
}