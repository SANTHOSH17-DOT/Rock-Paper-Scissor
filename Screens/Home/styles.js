import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "100%"
  },
  title: {
    fontSize: 40
  },
  btn1: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#000000",
    width: 120,
    height: 50,
    padding: 15,
    margin: 10,
    marginTop: 20,
    borderRadius: 5
  },
  btn2: {
    backgroundColor: "#000000",
    borderWidth: 1,
    borderColor: "#ffffff",
    width: 120,
    height: 50,
    padding: 15,
    margin: 10,
    marginTop: 20,
    borderRadius: 5
  },
  btn1Txt: {
    color: "#000000",
    textAlign: "center"
  },
  btn2Txt: {
    color: "#ffffff",
    textAlign: "center"
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  homeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "60%"
  }
})