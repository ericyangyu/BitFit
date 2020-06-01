/**
 * This is the component that displays a loading screen.
 * 
 * Authors: Imran
 */


// External import
import React, { Component, lazy } from 'react';
import { View, Image } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';

// Internal import
import loading from '../images/loading.gif'
// Stylesheet
import styles from '../style/c_loading';

/**
 * This class contains a Loading Screen
 */
export default class LoadingScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.wheel} source={loading}></Image>
            </View>
        );
    }
}