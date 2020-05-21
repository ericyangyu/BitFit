/**
 * Stylesheet for the profile page.
 * 
 * Authors: ?
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f3ebe1"
    },
    topBar: {
        width: "100%",
        padding: "5%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    topButton: {
        width: 55,
        height: 55,
        borderWidth: 5
    },
    scrollView: {
        width: "100%",
    },
    photo: {
        width: "50%",
        height: undefined,
        aspectRatio: 1,
        alignSelf: "center",
        borderRadius: 100,
        marginBottom: "5%",
    },
    statsTitle: {
        width: "100%",
        fontSize: 30,
        color: "#243454",
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    stats: {
        width: "100%",
        fontSize: 40,
        color: "#243454",
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: "5%"
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
    }
});