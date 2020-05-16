import * as React from "react";
import { Text, StyleSheet } from "react-native";

class TextField extends React.Component {
  render() {
    const { style, ...otherProps } = this.props;

    return (
      <Text
        selectionColor={"#02075d"}
        style={[styles.textField, style]}
        {...otherProps}
      />
    );
  }
}

const styles = StyleSheet.create({
  //TextField
  textField: {
    height: 30,
    color: "#434343",
    marginBottom: 10
  }
});


export default TextField;

