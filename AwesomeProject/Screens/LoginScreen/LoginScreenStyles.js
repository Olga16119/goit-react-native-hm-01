import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  authContainer: {
    width: "auto",
    paddingHorizontal: 16,
    paddingBottom: 16,

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  title: {
    marginTop: 32,
    marginBottom: 32,

    color: "#212121",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },

  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,

    width: "auto",
    height: "auto",
  },

  input: {
    height: 50,
    paddingLeft: 16,

    color: "#212121",
    fontSize: 16,
    lineHeight: 19,

    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 51,
    paddingLeft: 32,
    paddingRight: 32,

    backgroundColor: "#ff6c00",
    borderRadius: 100,
  },

  buttonText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#fff",
  },

  registerBtnText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
  passwordButton: {
    position: "absolute",
    top: 16,
    right: 19,
  },

  passwordBtnText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});

export const {
  container,
  backgroundImage,
  authContainer,
  title,
  input,
  passwordBtn,
  passwordBtnText,
  button,
  buttonText,
  registerBtnText,
} = styles;
