import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  registerContainer: {
    position: "relative",
    width: "auto",
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  title: {
    marginBottom: 33,

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

  avatarContainer: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
  },

  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
  },

  addAvatarButton: {
    position: "absolute",
    right: -17,
    bottom: 9,
  },

  input: {
    height: 50,
    paddingLeft: 16,
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 16,

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
  
  passwordBtn: {
    position: "absolute",
    top: 16,
    right: 15,
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
  registerContainer,
  avatarContainer,
  avatar,
  addAvatarButton,
  title,
  input,
  passwordBtn,
  passwordBtnText,
  button,
  buttonText,
  registerBtnText,
} = styles;
