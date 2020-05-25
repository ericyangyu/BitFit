/**
 * Stylesheet for the stats page.
 * 
 * Authors: Jeremy
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3ebe1",
        alignItems: "center",
        justifyContent: "space-between"
    },
    logo: {
        flex: 1,
        width: "80%",
        resizeMode: "contain",
        alignSelf: "center"
    },
    finishTextStyle: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 40,
        color: '#3498eb'
    },    
    detailsTextStyle: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0,
        color: '#3498eb'
    },
    summaryTextStyle: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 10,
        color: '#3498eb'
    },
    buttonTextStyle: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0,
        color: '#3498eb'
    },
    form: {
        flex: 1,
        justifyContent: "center",
        width: "80%"
    }
});