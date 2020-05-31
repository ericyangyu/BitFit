/**
 * Stylesheet for the timer page.
 * 
 * Authors: Steven, Jeremy
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D', // EDE0D3   color of other pages
        alignItems: 'center',
        paddingTop: 150,
        paddingHorizontal: 35,
    },
    timer: {
        color: '#FFFFFF',
        fontSize: 63,
        fontWeight: '200',
        width: 110,
        alignItems: 'center'

    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.8
    },
    button: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        fontSize: 18,
    },
    buttonBorder: {
        width: 98,
        height: 98,
        borderRadius: 48,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsRow: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        marginTop: 70,
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
        //alignItems: 'center'
    }
});