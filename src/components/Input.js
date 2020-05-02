import * as React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

// We support all the TextInput props
//type Props = TextInputProps;

class Input extends React.Component {
  render() {
    // We define our own custom style for the TextInput, but
    // we still want to allow the developer to supply its
    // own additional style if needed.
    // To do so, we extract the "style" prop from all the
    // other props to prevent it to override our own custom
    // style.
    const { style, ...otherProps } = this.props;
    return (
      <TextInput
        selectionColor={"#02075d"}
        // Add the externally specified style to our own
        // custom one
        style={[styles.textInput, style]}
        // ...and then spread all the other props
        {...otherProps}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "#C0C0C0",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  }
});

export default Input;