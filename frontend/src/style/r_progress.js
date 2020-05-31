/**
 * Stylesheet for the progress page.
 * 
 * Authors: ?
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7e7e7',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    backImage: {
        width: "100%",
        height: "30%",
        opacity: 1.8,
        position: "absolute"
    },
    header: {
        fontSize: 60,
        color: 'white',
        textAlign: 'center',
        fontWeight: '100',
    },
    whiteBox1: {
        backgroundColor: 'white',
        width: "90%",
        borderRadius: 20,
        justifyContent: 'center',
        padding: 25
    },
    levelText: {
        width: "100%",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        fontWeight: '100',
    },
    whiteBox2: {
        backgroundColor: 'white',
        width: "90%",
        borderRadius: 20,
        justifyContent: 'space-between',
        paddingTop: 20
    },
    progressText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '100',
    },
    row: {
        height: 40
    },
    nav: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around',
        width: "100%",
        backgroundColor: "#778899",
        height: "10%"
    },
    navText: {
        color: 'white',
        textAlign: "center",
        width: "100%"
    }
});