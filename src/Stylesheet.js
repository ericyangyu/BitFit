import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // Profile
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
  },

  //Input
  input: {
    height: 40,
    borderColor: "#C0C0C0",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10
  },

  // Button
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#243454",
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)"
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
    height: 20
  },
  
  //TextField
  textField: {
    height: 30,
    color: "#434343",
    marginBottom: 10
  }
});
