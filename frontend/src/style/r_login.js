/**
 * Stylesheet for the login page.
 * 
 * Authors: ?
 */

import {StyleSheet} from 'react-native';

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
    buttonTextStyle: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0,
        color: '#3498eb'
    },
    form: {
        
        justifyContent: "center",
        width: "80%",
        backgroundColor: 'white',
        width: 380,
        padding: 20,
        marginVertical: 0,
        marginTop: -10,
        marginBottom: 30,
        marginHorizontal: 0,
        borderRadius: 15
    }
});