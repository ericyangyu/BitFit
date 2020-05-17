/**
 * This is an internal Text component for a Text component that is styled accordingly.
 * 
 * Authors: ?
 */

// library imports
import React, { Component } from 'react';
import { Text, StyleSheet } from "react-native";

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

// Style for this component
const styles = StyleSheet.create({
  // Style the TextField component
  textField: {
    height: 30,
    color: "#434343",
    marginBottom: 10
  }
});