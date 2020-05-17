import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
    buttonTextStyle: {
        fontSize: 15,
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