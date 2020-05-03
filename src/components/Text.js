import * as React from "react";
import {Text} from "react-native";

import styles from "../StyleSheet";

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

export default TextField;