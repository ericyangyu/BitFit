import * as React from "react";
import { StyleSheet, TextInput } from "react-native";

import styles from "../StyleSheet";

class Input extends React.Component {
  render() {
    const { style, ...otherProps } = this.props;

    return (
      <TextInput
        selectionColor={"#02075d"}
        style={[styles.input, style]}
        {...otherProps}
      />
    );
  }
}

export default Input;
