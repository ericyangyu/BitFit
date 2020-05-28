/**
 * Used for the start/end/reset buttons on the timer page. 
 * They're organized as set of 2 in a ButtonRow component.
 * 
 * Authors: Steven
 */
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// Stylesheet
import styles from '../../style/r_timer';

/**
 * Round buttons for timer page
 */
export default class RoundButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const color = this.props.color;
        return (
            <TouchableOpacity
                onPress={() => !this.props.disabled && this.props.onPress()}
                style={[styles.button, { backgroundColor: this.props.background }]}
                activeOpacity={this.props.disabled ? 1.0 : 0.7}
            >
                <View style={styles.buttonBorder}>
                    <Text style={[styles.buttonTitle, { color }]}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}