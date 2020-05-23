/**
 * Displays post workout stats
 * 
 * Authors: Jeremy, Steven
 */

// External imports
import React, { Component } from 'react';
import { View, Text } from "react-native";
import { Actions } from 'react-native-router-flux';

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
                </View>
            </View>
        );
    }
}