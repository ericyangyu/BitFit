/**
 * Stylesheet for the sign up page.
 * 
 * Authors: ?
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    photoStyle: {
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
    },
    buttonTextStyle: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0,
        color: '#838383'
    },
    logo: {
        flex: 1,
        width: "100%",
        resizeMode: "contain",
        alignSelf: "center"
    },
    form: {
        flex: 1,
        justifyContent: "center",
        width: "75%",
        backgroundColor: 'white',
        width: 380,
        padding: 20,
        marginVertical: 0,
        marginTop: -10,
        marginBottom: 30,
        marginHorizontal: 0,
        borderRadius: 15
    }
});