/**
 * Stylesheet for the internal button component.
 * 
 * Authors: ?
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    // Style the button itself
    buttonContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000020",
        marginBottom: 10,
        paddingVertical: 10,
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
    },
    // Style the text on the button
    text: {
        color: "#ffffff",
        textAlign: "center",
        height: 26,
        fontSize: 20,
        // fontFamily: 'sans-serif-light',
        fontWeight: '100'
    },
    disabled: {
        opacity: 0.4
    }
});
