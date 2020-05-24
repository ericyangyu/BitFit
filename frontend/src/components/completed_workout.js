// External import
import React, { Component } from 'react';
import { Text } from "react-native";
import { ListItem } from 'react-native-elements'

// Internal import
// Stylesheet
import styles from '../style/c_completed_workout';

export default class CompletedWorkout extends React.Component {
    render() {
        // Saving the props
        const {
            workout,
            ...otherProps
        } = this.props;

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