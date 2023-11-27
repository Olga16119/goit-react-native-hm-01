import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import {
  container,
  backgroundImage,
  registerContainer,
  title,
  input,
  passwordBtn,
  passwordBtnText,
  button,
  buttonText,
  avatarContainer,
  avatar,
  addAvatarButton,
  registerBtnText,
} from "./RegistrationStyles";

import { AntDesign } from "@expo/vector-icons";

export const RegistrationScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={container}>
        <ImageBackground
          source={require("../../assets/images/Photo-BG.png")}
          resizeMode="stretch"
          style={backgroundImage}
        />
        <KeyboardAvoidingView
          behavior={Platform.OC === "ios" ? "padding" : "height"}
          style={{
            minHeight: 248,
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <View style={registerContainer}>
            <View style={avatarContainer}>
              <Image style={avatar} />
              <TouchableOpacity style={addAvatarButton}>
                <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
              </TouchableOpacity>
            </View>

            <Text style={title}>Реєстрація</Text>

            <View style={{ marginBottom: 16 }}>
              <View>
                <TextInput
                  style={{ ...input, marginBottom: 16 }}
                  placeholder="Логін"
                  placeholderTextColor={"#BDBDBD"}
                />
              </View>

              <View style={{ marginBottom: 16 }}>
                <TextInput
                  style={input}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor={"#BDBDBD"}
                  keyboardType="email-address"
                />
              </View>

              <View style={{ marginBottom: 33, popsition: "relative" }}>
                <TextInput
                  style={input}
                  placeholder="Пароль"
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={true}
                />

                <TouchableOpacity style={passwordBtn}>
                  <Text style={passwordBtnText}>Показати</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={button}>
                <Text style={buttonText}>Зареєструватися</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={registerBtnText}>
                {`Вже є акаунт?`}
                <Text style={{ textDecorationLine: "underline" }}>Увійти</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
