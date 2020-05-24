/**
 * This is the component that displays a completed workout in the activity log
 * 
 * Authors: Imran
 */


// External import
import React, { Component } from 'react';
import { Text } from "react-native";
import { ListItem } from 'react-native-elements'

// Internal import
// Stylesheet
import styles from '../style/c_completed_workout';

/**
 * This class contains a formatted list item for a completed workout data point
 */
export default class CompletedWorkout extends Component {
    render() {
        // Saving the props
        const {
            workout,
            ...otherProps
        } = this.props;

        // return a list formatted list item
        return (
            <ListItem
                key={workout.name}
                title={workout.name}
                subtitle={<Text style={styles.item}> Date: {workout.data.date}, Duration: {workout.data.duration}</ Text>}
                badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}
                bottomDivider
            />
        );
    }
}