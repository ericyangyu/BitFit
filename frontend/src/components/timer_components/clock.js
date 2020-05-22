/**
 * Handles the digital display on the timer page.
 * 
 * Authors: Steven
 */
import React, { Component } from 'react';
import moment from 'moment';
import { Text, View } from 'react-native';

// Stylesheet
import styles from '../../style/r_timer';

export default class Clock extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const pad = (n) => n < 10 ? '0' + n : n
        const duration = moment.duration(this.props.interval)
        const centiseconds = Math.floor(duration.milliseconds() / 10)
        return (
            <View style={styles.timerContainer}>
            <Text style={this.props.style}>{pad(duration.hours())}:</Text>
            <Text style={this.props.style}>{pad(duration.minutes())}:</Text>
            <Text style={this.props.style}>{pad(duration.seconds())}</Text>
            </View>
        )
    }
}
