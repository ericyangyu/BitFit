import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    photoStyle: {
        paddingVertical: 0,
        width: 230,
        height: 230,
        borderRadius: 150
    },
    container: {
        flex: 1,
        backgroundColor: "#f3ebe1",
        alignItems: "center",
    },
    buttonTextStyle: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0,
        color: '#3498eb'
    },
    logo: {
        flex: 1,
        width: "100%",
        resizeMode: "contain",
        alignSelf: "center"
    },
    form: {
        flex: 1,
        justifyContent: "center",
        width: "75%"
    }
  });