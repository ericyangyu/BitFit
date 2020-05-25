/**
 * This is the component that displays a loading screen.
 * 
 * Authors: Imran
 */


// External import
import React, { Component } from 'react';
import { View } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';

// Internal import
// Stylesheet
import styles from '../style/c_completed_workout';

/**
 * This class contains a Loading Screen
 */
export default class LoadingScreen extends Component {

    render() {
        return (
            <View style={styles.spinnerContainer}>
                <Spinner
                    visible={true}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />
            </View>
        );
    }
}