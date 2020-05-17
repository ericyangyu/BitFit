/**
 * This is an TextInput button that is styled accordingly.
 * 
 * Authors: ?
 */

// library imports
import React, { Component } from 'react';
import { StyleSheet, TextInput } from "react-native";

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

// Style for this component
const styles = StyleSheet.create({
  // Style the TextInput component
  input: {
    height: 40,
    borderColor: "#C0C0C0",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10
  }
});