/**
 * This is an internal nav bar component that uses Touchable opacity.
 * 
 * Author: Nour
 */

// External Imports
import React, {Component} from 'react';
import {View, TouchableOpacity, Image } from "react-native";

// Internal Imports
import styles from "../style/c_nav_bar";

/**
 * Class that returns a Touchable Opacity object with the correct style and text.
 */
export default class NavBar extends Component {
    // save the props from when the button is rendered
    render() {
        const { left, leftDisabled, leftOnPress, right, rightDisabled, rightOnPress } = this.props

        const leftStyle = leftDisabled ? [styles.button, styles.disabled] : styles.button
        const rightStyle = rightDisabled ? [styles.button, styles.disabled] : styles.button
        console.log(leftDisabled);
        return right ? (
            <View style={styles.container}>
                <TouchableOpacity disabled={leftDisabled} onPress={leftOnPress}>
                    <Image source={left} style={leftStyle} />
                </TouchableOpacity>
                <TouchableOpacity disabled={rightDisabled} onPress={rightOnPress}>
                    <Image source={right} style={rightStyle} />
                </TouchableOpacity>
            </View>
        ) : (
            <View style={styles.container}>
                <TouchableOpacity disabled={leftDisabled} onPress={leftOnPress}>
                    <Image source={left} style={leftStyle} />
                </TouchableOpacity>
            </View>
        );
    }
}