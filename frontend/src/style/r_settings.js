/**
 * Stylesheet for the settings page.
 * 
 * Author: Nour
 */

import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7e7e7',
        alignItems: 'center',
        width: "100%",
        height: Dimensions.get('window').height
        
    },
    kv: {
        width: "100%",
        height: Dimensions.get('window').height,
    },
    scroll: {
        width: "100%",
        height: "100%",
    },
    innerContainer: {
        position: 'absolute',
        top: "30%",
        width: "100%",
        height: "70%",
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
        fontSize: 55,
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
        backgroundColor: 'white',
        width: "90%",
        height: 65,
        padding: 20,
        paddingBottom: 0,
        borderRadius: 20,
        marginTop: "10%",
        alignSelf: 'center'
    },
    longBox: {
        height: 355
    },
    headerBox: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '100',
        justifyContent: 'center'
    },
    button: {
        alignSelf: 'center',
    }
});