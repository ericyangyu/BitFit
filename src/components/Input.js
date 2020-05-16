import * as React from "react";
import { StyleSheet, TextInput } from "react-native";


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


const styles = StyleSheet.create({
  //Input
  input: {
    height: 40,
    borderColor: "#C0C0C0",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10
  }
});


export default Input;

