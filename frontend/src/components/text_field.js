/**
 * This is an internal Text component for a Text component that is styled accordingly.
 * 
 * Authors: ?
 */

// External import
import React, { Component } from 'react';
import {Text} from "react-native";

// Internal import
import styles from "../style/c_text_field";

/**
 * Class that returns a styled Text component.
 */
export default class TextField extends React.Component {
    // save the props from when the button is rendered
    // TODO: How does ...otherProps work?
    render() {
        const { style, ...otherProps } = this.props;
    
        // Return a styled Text component with its original props
        return (
            <Text
            selectionColor={"#02075d"}
            style={[styles.textField, style]}
            {...otherProps}
            />
        );
    }
}
