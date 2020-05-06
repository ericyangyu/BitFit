import * as React from "react";

import { StyleSheet, Text, TouchableOpacity } from "react-native";

import {Text, TouchableOpacity} from 'react-native';

import styles from "../Stylesheet";


class Button extends React.Component {
  render() {
    const { label, onPress } = this.props;

    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#02075d",
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)"
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
    height: 20
  }
});

export default Button;
