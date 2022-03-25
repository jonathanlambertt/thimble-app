import React, { useState, useContext } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import { useFonts } from "expo-font";
import FormField from "../../components/atoms/FormField";
import { Button } from "react-native-elements";
import thimble from "../../api/thimble";
import { Context as AuthContext } from "../../contexts/authentication/AuthContext";
import * as SecureStore from "expo-secure-store";

const LoginScreen = () => {
  const { logIn } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [fontLoaded] = useFonts({
    GrandHotel: require("../../../assets/fonts/GrandHotel-Regular.ttf"),
  });

  const logInUser = async () => {
    try {
      setError(false);
      setIsSending(true);
      const response = await thimble.post("u/login", { username, password });
      await SecureStore.setItemAsync("token", response.data.token);
      logIn(response.data.token);
    } catch (error) {
      setError(true);
      setIsSending(false);
    }
  };

  if (!fontLoaded) {
    return null;
  } else {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, backgroundColor: "#fff" }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.innerContainer}>
            <Text style={styles.appName}>thimble</Text>
            <Text style={{ fontSize: 25, marginBottom: 13 }}>
              Log in to your Account
            </Text>
            <FormField
              placeholder="Username"
              value={username}
              setValue={setUsername}
              isSecure={false}
            />
            <FormField
              placeholder="Password"
              value={password}
              setValue={setPassword}
              isSecure={true}
            />
            {!error ? null : (
              <Text style={styles.errorText}>
                Please ensure your username and password are correct.
              </Text>
            )}
            <View style={{ width: "100%", paddingHorizontal: 25 }}>
              <Button
                onPress={() => logInUser()}
                title="Log in"
                buttonStyle={styles.loginButton}
                titleStyle={{ fontSize: 17, fontWeight: "600" }}
                loading={isSending}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
};

const styles = StyleSheet.create({
  appName: {
    fontFamily: "GrandHotel",
    fontSize: 60,
    paddingHorizontal: 5,
  },
  loginButton: {
    backgroundColor: "#A6A3FF",
    padding: 10,
    marginTop: 5,
  },
  errorText: {
    marginBottom: 5,
    color: "red",
    paddingHorizontal: 30,
    textAlign: "center",
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
