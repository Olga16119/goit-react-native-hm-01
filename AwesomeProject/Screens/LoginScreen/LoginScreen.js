import {
  Platform,
  ImageBackground,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

import {
  title,
  container,
  backgroundImage,
  authContainer,
  input,
  passwordBtn,
  passwordBtnText,
  button,
  buttonText,
  registerBtnText,
} from "./LoginScreenStyles";

export const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={container}>
        <ImageBackground
          source={require("../../assets/images/Photo-BG.png")}
          style={backgroundImage}
          resizeMode="stretch"
        />
        <KeyboardAvoidingView
          behavior={Platform.OC === "ios" ? "padding" : "height"}
          style={{
            minHeight: 248,
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <View style={authContainer}>
            <Text style={title}>Увійти</Text>

            <View style={{ marginBottom: 16 }}>
              <View style={{ marginBottom: 16 }}>
                <TextInput
                  style={input}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor={"#BDBDBD"}
                  keyboardType="email-address"
                />
              </View>

              <View style={{ marginBottom: 43, position: "relative" }}>
                <TextInput
                  style={input}
                  placeholder="Пароль"
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={true}
                />
                <TouchableOpacity style={passwordBtn}>
                  <Text style={passBtnText}>Показати</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={button}>
                <Text style={btnText}>Логін</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={registerBtnText}>
                {`Немає акаунту?  `}
                <Text style={{ textDecorationLine: "underline" }}>
                  {" "}
                  Зареєструватися
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
