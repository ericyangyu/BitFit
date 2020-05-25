/**
 * This is the component that displays a completed workout in the activity log
 * 
 * Authors: Imran
 */


// External import
import React, { Component } from 'react';
import { Text, TouchableOpacity, Alert } from "react-native";
import { ListItem } from 'react-native-elements'

// Internal import
// Stylesheet
import styles from '../style/c_completed_workout';

/**
 * This class contains a formatted list item for a completed workout data point
 */
export default class CompletedWorkout extends Component {

    // Display a informationabout this completed workout
    alertInformation = () => {
        let message = 'Congrats, you completed the workout in ' + this.props.workout.data.duration + "!";
        let description = "";
        Alert.alert(
            message,
            description,
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: false }
        );
    }

    render() {
        // Saving the props
        const {
            workout,
            ...otherProps
        } = this.props;

        // return a list formatted list item
        return (
            <TouchableOpacity onPress={this.alertInformation}>
                <ListItem style={styles.listItem}
                    key={workout.name}
                    title={workout.name}
                    titleStyle={styles.titleStyle}
                    subtitle={<Text style={styles.item}>Duration: {workout.data.duration}</ Text>}
                    // badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}
                    rightTitle={<Text>Date: {workout.data.date}</Text>}
                    bottomDivider
                />
            </TouchableOpacity>
        );
    }
}