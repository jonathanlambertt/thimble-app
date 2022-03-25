import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Context as AuthContext } from "../contexts/authentication/AuthContext";

const TestScreen = () => {
  const { logOut } = useContext(AuthContext);
  return (
    <View>
      <TouchableOpacity onPress={() => logOut()}>
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestScreen;
