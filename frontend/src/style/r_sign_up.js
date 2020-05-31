/**
 * Stylesheet for the sign up page.
 * 
 * Authors: ?
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    photoPicker: {
        flex: 1,
        width: "65%",
        marginBottom: "5%",
        marginTop: "10%",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0
    },
    pickerButton: {
        aspectRatio: 1,
        width: "100%",
        maxHeight: "100%",
    },
    photo: {
        width: "100%",
        height: "100%",
        borderRadius: 150,
        resizeMode: "contain",
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.8
    },
    container: {
        height: "100%",
        backgroundColor: "#e7e7e7",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    buttonTextStyle: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0,
        color: '#838383',
    },
    form: {
        justifyContent: "center",
        backgroundColor: 'white',
        width: '100%',
        padding: 20,
        borderRadius: 15,
        marginBottom: "10%"
    }
});