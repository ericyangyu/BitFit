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
        width: "90%",
        height: 75,
        paddingTop: 20,
        padding: 20,
        marginVertical: "10%",
        marginHorizontal: 5,
        borderRadius: 20
    },
    whiteBox2: {
        backgroundColor: 'white',
        width: "90%",
        padding: "7%",
        paddingBottom: "-7%",
        marginTop: "-18%",
        marginBottom: "-5%",
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
        fontSize: 13,
        fontWeight: '100',
        paddingBottom: "30%"
    },
    disabled: {
        opacity: 0.4
    },
     buttonContainer: {
        width: "101%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#778899",
        borderColor: '#778899',
        paddingBottom: "50%",
        paddingTop: "15%",
        paddingVertical: 10,
        borderRadius: 0,
        borderWidth: StyleSheet.hairlineWidth,
    }
});