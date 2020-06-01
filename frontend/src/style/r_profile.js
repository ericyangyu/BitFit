/**
 * Stylesheet for the profile page.
 * 
 * Author: Nour
 */

import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#e7e7e7',
        paddingBottom: "5%",
        height: Dimensions.get('window').height
    },
    backImage: {
        width: "100%",
        height: "36%",
        opacity: 1.8,
        position: "absolute"
    },
    backImageE: {
        width: "100%",
        height: "48%",
        opacity: 1.8,
        position: "absolute"
    },
    photo: {
        width: "30%",
        height: undefined,
        aspectRatio: 1,
        alignSelf: "center",
        borderRadius: 150,
        backgroundColor: "white"
    },
    statsGrid: {
        width: "90%",
        height: 125,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 20,
        flexDirection: 'row'
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
    },
    stats: {
        width: "100%",
        fontSize: 50,
        color: "#243454",
        paddingBottom: "35%",
        textAlign: 'center'
    },
    infoGrid: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        width: "90%",
        height: 140,
        padding: 20,
        borderRadius: 20,
    },
    info: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '100',
    },
    viewnButton: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button2: {
        marginTop: "2.5%"
    },
    inputGrid: {
        backgroundColor: 'white',
        width: "90%",
        height: 150,
        padding: 20,
        borderRadius: 20,
        alignSelf: 'center',
    },
    input: {
        width: "80%",
        alignSelf: 'center'
    }
});