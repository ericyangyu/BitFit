/**
 * Stylesheet for the sign up page.
 * 
 * Authors: ?
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    photoStyle: {
        marginTop: 50,
        paddingVertical: 0,
        width: 230,
        height: 230,
        borderRadius: 150
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
        flex: 1,
        backgroundColor: "#e7e7e7",
        alignItems: "center",
        justifyContent: "space-between"
    },
    buttonTextStyle: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0,
        color: '#838383',
        // fontFamily:'sans-serif-light'
    },
    form: {
        justifyContent: "center",
        width: "80%",
        backgroundColor: 'white',
        width: 380,
        padding: 20,
        marginVertical: 0,
        marginBottom: 30,
        marginHorizontal: 0,
        borderRadius: 15
    }
});