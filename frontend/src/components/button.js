import * as React from "react";
import {Text, TouchableOpacity } from "react-native";

import styles from "../style/c_button";

class Button extends React.Component {
    render() {
        const { label, onPress } = this.props;
        return (
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{label}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;
