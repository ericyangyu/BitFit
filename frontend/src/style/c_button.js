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
        backgroundColor: "#243454",
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(255,255,255,0.7)"
    },
    // Style the text on the button
    text: {
        color: "#ffffff",
        textAlign: "center",
        height: 20
    }
});
