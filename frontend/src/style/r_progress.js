/**
 * Stylesheet for the progress page.
 * 
 * Authors: ?
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    spinnerTextStyle: {
        color: '#FFF'
    },
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    container: {
        backgroundColor: '#e7e7e7',
        marginTop: 0,
        alignItems: 'center'
    },
    progressbar: {
        marginTop: 13
    },
    imageStyle: {
        width: 65,
        height: 65,
        backgroundColor: 'white',
        borderRadius: 100
    },
    buttonStyle: {
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#212143',
        borderRadius: 10,
        borderColor: '#fff',
    },
    buttonTextStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0,
        color: '#fff'
    },
    headerStyle: {
        fontSize: 50,
        // // fontFamily: 'sans-serif-light',
        color: 'white',
        textAlign: 'center',
        fontWeight: '100',
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0
    },
    textStyle2: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0, 
    },
    whiteBox1: {
        backgroundColor: 'white',
        width: "85%",
        height: 75,
        paddingTop: 25,
        padding: 20,
        marginVertical: -20,
        marginHorizontal: 5,
        borderRadius: 20

    },
    whiteBox2: {
        backgroundColor: 'white',
        width: "90%",
        padding: 20,
        marginVertical: 0,
        marginTop: -90,
        marginBottom: -50,
        marginHorizontal: 5,
        borderRadius: 20
    },
    buttonView: {
        backgroundColor: '#e7e7e7',
        marginTop: 115,
        marginLeft: 0,
        marginRight: 0,
        alignItems: 'center'
    },
    text: {
        color: "#ffffff",
        textAlign: "center",
        height: 26,
        fontSize: 20,
        fontWeight: '100'
    },
    disabled: {
        opacity: 0.4
    },
     buttonContainer: {
        width: 125,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#778899",
        borderColor: '#000000',
        paddingBottom: "50%",
        paddingTop: 20,
        paddingVertical: 10,
        borderRadius: 0,
        borderWidth: StyleSheet.hairlineWidth,
    }
});