import { StyleSheet, Platform } from "react-native";
import { Input } from "react-native-elements";

const FormField = ({ placeholder, value, setValue, isSecure }) => {
  return (
    <Input
      value={value}
      onChangeText={setValue}
      secureTextEntry={isSecure}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder={placeholder}
      inputStyle={styles.input}
      inputContainerStyle={{ borderBottomWidth: 0 }}
      selectionColor="#ff878a"
      keyboardType={
        Platform.OS === "ios" ? "ascii-capable" : "visible-password"
      }
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#f4f4f4",
    borderWidth: 1,
    borderColor: "#cecece",
    borderRadius: 4,
    paddingLeft: 12,
    paddingVertical: 14,
    marginBottom: -15,
    marginHorizontal: 15,
  },
});

export default FormField;
