/**
 * Stylesheet for the profile page.
 * 
 * Authors: ?
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3ebe1",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 0
    },
    button: {
        width: 75,
        height: 75
    },
    photo: {
        flex: 1,
        width: "80%",
        resizeMode: "contain",
        alignSelf: "center"
    }






/*

    profileContainer: {
        flex: 1,
        backgroundColor: "#f3ebe1",
        alignItems: "center",
        justifyContent: "space-between"
    },
    photo: {
        flex: 1,
        width: "50%",
        resizeMode: "contain",
        alignSelf: "center",
        borderRadius: 150
    },
    form: {
        flex: 1,
        justifyContent: "center",
        width: "80%"
    }*/
});