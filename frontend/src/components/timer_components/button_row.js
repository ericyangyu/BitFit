/**
 * Used to organize the circle buttons on the timer page side by side.
 * 
 * Authors: Steven
 */
import React, { Component } from 'react';
import { View } from 'react-native';

// Stylesheet
import styles from '../../style/r_timer';

/**
 * Row for circle buttons
 */
export default class ButtonsRow extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.buttonsRow}>{this.props.children}</View>
        )
    }
}