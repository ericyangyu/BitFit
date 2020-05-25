/**
 * Stylesheet for the Workouts page.
 * 
 * Authors: Imran
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    gridStyle: { backgroundColor: '#f3ebe1' },
    backButtonView:
    {
        backgroundColor: '#f3ebe1'
    },
    backButton: { width: 75, height: 75 },
    suggestedWorkoutsView: {
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#f3ebe1'
    },
    suggestedWorkoutsViewText: { fontSize: 30 },
    selectSuggestedFocusView: {
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#f3ebe1'
    },
    selectSuggestedFocusViewText: { fontSize: 30 },
    pickerView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 0
    },
    picker: { height: 50, width: 150 },
    focusImageView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 0,
    },
    focusImage: { width: 180, height: 180, alignSelf: 'center' },
    buttonStyle: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 40,
    },
    buttonTextStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0,
        color: '#fff'
    },
    topButton: {
        width: 55,
        height: 55
    },
});