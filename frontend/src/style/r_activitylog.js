/**
 * Stylesheet for the Activity Log page.
 * 
 * Authors: Imran
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    flatList: {
        width: '100%',
        borderRadius: 10
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.8
    },
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#e7e7e7',
    },
    header: {
        fontSize: 50,
        color: 'white',
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: "20%"
    },
    topButton: {
        width: 45,
        height: 45
    },
});