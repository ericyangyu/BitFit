/**
 * Stylesheet for the profile page.
 * 
 * Author: Nour
 */

import {StyleSheet} from 'react-native';

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
        height: 350, 
        opacity: 1.8,
        position: "absolute"
    },
    photo: {
        width: "45%",
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
        color: "#243454",
        textAlign: 'center',
        fontFamily: 'sans-serif-light'
    },
    stats: {
        width: "100%",
        fontSize: 40,
        color: "#243454",
        textAlign: 'center',
        fontFamily: 'sans-serif-light'
    },
    infoGrid: {
        backgroundColor: 'white',
        width: "90%",
        height: 125,
        padding: 20,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: "5%",
    },
    info: {
        fontSize: 25,
        marginBottom: "2.5%",
        color: "#434343",
        alignSelf: 'center'
    },
    button: {
        width: "80%",
        margin: "2.5%",
        alignSelf: 'center',
    },
    input: {
        height: 55,
        width: "80%",
        fontSize: 25,
        marginBottom: "2.5%",
        alignSelf: 'center',
        color: "#434343",
        borderColor: "#434343",
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});