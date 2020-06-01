/**
 * Stylesheet for the settings page.
 * 
 * Author: Nour
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7e7e7',
        alignItems: 'center',
    },
    innerContainer: {
        position: 'absolute',
        top: "30%",
        width: "100%",
        height: "70%",
        alignItems: 'center',
    },
    backImage: {
        width: "100%",
        height: "30%",
        opacity: 1.8,
        position: "absolute"
    },
    top: {
        width: "100%",
        height: "30%",
        position: 'absolute',
    },
    header: {
        fontSize: 60,
        color: 'white',
        textAlign: 'center',
        fontWeight: '100',
        marginTop: "27.5%"
    },
    dropDownButton: {
        aspectRatio: 1,
        width: 30,
        height: 30 
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        width: "90%",
        height: 70,
        padding: 20,
        borderRadius: 20,
        marginTop: "10%"
    }
    /*
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f3ebe1"
    },
    scrollView: {
        width: "100%",
    },
    topBar: {
        width: "100%",
        paddingBottom: 0,
        paddingTop: "5%",
        paddingLeft: "5%",
        paddingRight: "5%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    topButton: {
        width: 55,
        height: 55
    },
    header: {
        width: "100%",
        fontSize: 30,
        color: "#243454",
        fontWeight: 'bold',
        fontStyle: 'italic',
        margin: "5%",
        marginBottom: "2.5%"
    },
    input: {
        height: 55,
        width: "80%",
        fontSize: 25,
        marginBottom: "5%",
        alignSelf: 'center',
        color: "#434343",
        borderColor: "#434343",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button: {
        width: "80%",
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#243454",
        margin: "2.5%",
        marginTop: 0,
        marginBottom: 0,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(255,255,255,0.7)"
    },
    delete: {
        backgroundColor: '#910000',
        marginBottom: "5%"
    },
    disabledB: {
        opacity: 0.3,
        backgroundColor: "#243454"
    },
    buttonT: {
        color: "#ffffff",
        textAlign: "center",
        height: 20
    },
    disabledT: {
        color: 'black'
    } */
});