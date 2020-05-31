/**
 * Stylesheet for the nav bar component.
 * 
 * Author: Nour
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        width: "100%",
        paddingTop: "8%",
        paddingLeft: "5%",
        paddingRight: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        width: 55,
        height: 55,
        borderRadius: 100,
        //backgroundColor: 'white'
    },
    disabled: {
        opacity: 0.4
    },
});