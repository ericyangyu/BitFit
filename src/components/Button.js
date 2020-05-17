/**
 * This is an internal button component that uses Touchable opacity and Text.
 * 
 * Authors: ?
 */

// library imports
import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * Class that returns a Touchable Opacity object with the correct style and text.
 */
export default class Button extends Component {
  render() {
    // save the props from when the button is created
    const { label, onPress } = this.props;

    // return a touchable opacity button that inherits functionality, and is styled
    // in this file
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

// Style for this component
const styles = StyleSheet.create({
  // Style the button itself
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#243454",
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)"
  },
  // Style the text on the button
  text: {
    color: "#ffffff",
    textAlign: "center",
    height: 20
  }
});