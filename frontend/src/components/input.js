/**
 * This is an TextInput button that is styled accordingly.
 * 
 * Authors: ?
 */

 // External imports
import React, { Component } from 'react';
import { TextInput } from "react-native";

// Internal imports
import styles from "../style/c_input";

/**
 * Class that returns a styled TextInput component.
 */
export default class Input extends Component {
    // save the props from when the button is rendered
    // TODO: How does ...otherProps work?
    render() {
        const { style, ...otherProps } = this.props;
    
        // Return a styled TextInput component with its original props
        return (
            <TextInput
            selectionColor={"#02075d"}
            style={[styles.input, style]}
            {...otherProps}
            />
        );
    }
}