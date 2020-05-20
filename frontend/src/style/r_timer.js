/**
 * Stylesheet for the timer page.
 * 
 * Authors: ?
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D', // EDE0D3   color of other pages
        alignItems: 'center',
        paddingTop: 130,
        paddingHorizontal: 20,
    },
    timer: {
        color: '#FFFFFF',
        fontSize: 76,
        fontWeight: '200',
        width: 110,
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        fontSize: 18,
    },
    buttonBorder: {
        width: 76,
        height: 76,
        borderRadius: 38,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsRow: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        marginTop: 80,
        marginBottom: 30,
    },
    lapTimer: {
        width: 30,
    },
    scrollView: {
        alignSelf: 'stretch',
    },
    fastest: {
        color: '#4BC05F',
    },
    slowest: {
        color: '#CC3531',
    },
    timerContainer: {
        flexDirection: 'row',
    }
});