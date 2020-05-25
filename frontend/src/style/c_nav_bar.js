/**
 * Stylesheet for the nav bar component.
 * 
 * Author: Nour
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        width: "100%",
        paddingBottom: 0,
        paddingTop: "5%",
        paddingLeft: "5%",
        paddingRight: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        position: 'absolute',
        marginBottom: "2.5%"
    },
    button: {
        width: 55,
        height: 55,
        borderRadius: 100
    },
    disabled: {
        opacity: 0.4
    },
    profile: {
        backgroundColor: 'white'
    }
});