/**
 * Stylesheet for the stats page.
 * 
 * Authors: Jeremy
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e7e7e7",
        alignItems: "center",
        justifyContent: "space-between"
    },
    logo: {
        flex: 1,
        width: "80%",
        resizeMode: "contain",
        alignSelf: "center"
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.8
    },
    finishTextStyle: {
        fontSize: 26,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: -40,
        marginTop: '90%',
        color: 'black'
    },
    detailsTextStyle: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 20,
        color: 'black'
    },
    summaryTextStyle: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '100',
        paddingTop: "40%",
        paddingBottom: "10%",
        marginBottom: 10,
        color: 'black'
    },
    buttonTextStyle: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '100',
        color: 'black'
    },
    buttonView: {
        marginTop: 50,
        marginLeft: 0,
        marginRight: 0,
        alignItems: 'center'
    },
    form: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'white',
        width: "90%",
        height: "30%",
        paddingLeft: "5%",
        paddingRight: "5%",
        marginVertical: "30%",
        borderRadius: 20
    },
    form2: {
        backgroundColor: 'white',
        justifyContent: "center",
        borderRadius: 20,
        marginLeft: "5%",
        marginVertical: "70%",
        marginTop: "130%",
        paddingBottom: "20%",
        width: "85%"
    }
});