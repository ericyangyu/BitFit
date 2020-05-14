import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

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
  // Button
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
  text: {
    color: "#ffffff",
    textAlign: "center",
    height: 20
  }
});



export default Button;
