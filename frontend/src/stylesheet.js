import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // Profile
  container: {
    flex: 1,
    backgroundColor: "#f3ebe1",
    alignItems: "center",
    justifyContent: "space-between"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  },

  // Button
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#02075d",
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)"
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    height: 20
  },
  
  //TextField
  textField: {
    height: 30,
    color: "#434343",
    textAlign: "center"
  }
});
