/**
 * Stylesheet for the profile page.
 * 
 * Author: Nour
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#e7e7e7',
    },
    scrollView: {
        width: "100%",
    },
    backImage: {
        width: "100%",
        height: 290,
        opacity: 1.8,
        position: "absolute"
    },
    longerImg: {
        height: 365
    },
    photo: {
        width: "30%",
        height: undefined,
        aspectRatio: 1,
        alignSelf: "center",
        borderRadius: 100,
        marginBottom: "5%",
        backgroundColor: "white"
    },
    statsGrid: {
        backgroundColor: 'white',
        width: "90%",
        height: 125,
        padding: 20,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: "5%",
    },
    statsTitle: {
        width: "100%",
        fontSize: 30,
        color: "#000000",
        textAlign: 'center',
        paddingTop: "5%",
        paddingBottom: "15%",
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 10,
    },
    stats: {
        width: "100%",
        fontSize: 40,
        color: "#243454",
        paddingBottom: "35%",
        textAlign: 'center'
    },
    infoGrid: {
        backgroundColor: 'white',
        width: "90%",
        height: 140,
        padding: 20,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: "5%"
    },
    info: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: "2.5%",
    },
    button: {
        width: "90%",
        margin: "5%",
        marginLeft: "15%",
        marginTop: "15%",
        alignSelf: 'center',
    },
    button2: {
        width: "90%",
        margin: "5%",
        marginLeft: "14%",
        paddingTop: "15%",
        alignSelf: 'center',
    },
    inputGrid: {
        backgroundColor: 'white',
        width: "90%",
        height: 150,
        padding: 20,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: "5%",
    },
    input: {
        width: "80%",
        alignSelf: 'center'
    }
});