/**
 * The login page allows the user to login using their email and password. If
 * they don't have an account, they can create one.
 * 
 * Authors: Imran, Sharan, Nour
 */

// External imports
import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text, Alert } from "react-native";
import { Actions } from 'react-native-router-flux';
import axios from "axios";

// Internal imports

// Stylesheet
import styles from '../style/r_stats';

// Components
import Input from "../components/input";
import Button from "../components/button";
import TextField from "../components/text_field";

// Images
import logo from "../images/logo.png";

/**
 * Class that returns the Login page with correct components and API calls.
 */
export default class Stats extends Component {
    // Call the super constructor and initalize a state variable
    constructor(props) {
        super(props)
    }


    // Render the correct components for the login screen
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