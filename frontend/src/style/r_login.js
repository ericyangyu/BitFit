/**
 * Stylesheet for the login page.
 * 
 * Authors: ?
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e7e7e7",
        alignItems: "center",
        justifyContent: "space-between"
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.8
    },
    logo: {
        flex: 1,
        width: "65%",
        resizeMode: "contain",
        alignSelf: "center",
        marginVertical: 0,
        marginTop: 0,
        marginBottom: 0
    },
    buttonTextStyle: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 10,
        color: '#838383',
    },
    form: {
        justifyContent: "center",
        backgroundColor: 'white',
        width: '100%',
        padding: 20,
        marginVertical: 0,
        marginBottom: 60,
        marginHorizontal: 0,
        borderRadius: 15
    }
});