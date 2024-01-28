import { StyleSheet } from "react-native";

export const FormStyles = StyleSheet.create({
  FormContext: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },
  FormLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  FormInput: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  ButtonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#FF0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 30,
  },
  TextButtonCalculator: {
    fontSize: 20,
    color: "#fff",
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exhibitionResultIMC: {
    width: "100%",
    height: "50%",
  },
  listasImc: {
    marginTop: 20,
  },
  resultImcItem: {
    fontSize: 24,
    color: "red",
    height: 50,
    width: "100%",
    paddingRight: 20
  },
  textResultItemList: {
    fontSize: 16
  }
});
