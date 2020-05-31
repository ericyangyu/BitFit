/**
 * Stylesheet for the internal button component.
 * 
 * Authors: ?
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Style the button itself
    buttonContainer: {
        width: 300,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#778899",
        marginBottom: 10,
        paddingVertical: 12,
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
    },
    // Style the text on the button
    text: {
        color: "#ffffff",
        textAlign: "center",
        height: 20,
        fontSize: 14,
        fontWeight: '100'
    },
    disabled: {
        opacity: 0.4
    }
});
