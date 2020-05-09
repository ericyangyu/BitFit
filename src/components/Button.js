import * as React from "react";
import {Text, TouchableOpacity} from 'react-native';

import styles from "../StyleSheet";

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

export default Button;
