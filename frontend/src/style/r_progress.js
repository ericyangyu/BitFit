/**
 * Stylesheet for the progress page.
 * 
 * Authors: ?
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
        fontFamily: 'sans-serif-light',
        color: 'white',
        textAlign: 'center',
        fontWeight: '100',
        marginTop: -10
    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'monospace',
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0
    },
    whiteBox1: {
        backgroundColor: 'white',
        width: 380,
        height: 75,
        padding: 20,
        marginVertical: 0,
        marginHorizontal: 5,
        borderRadius: 20

    },
    whiteBox2: {
        backgroundColor: 'white',
        width: 380,
        padding: 20,
        marginVertical: 0,
        marginTop: -70,
        marginBottom: -50,
        marginHorizontal: 5,
        borderRadius: 20
    },
    buttonView: {
        backgroundColor: '#e7e7e7',
        marginTop: 90,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center'
    }
});