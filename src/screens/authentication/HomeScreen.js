import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Button } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
  const [fontLoaded] = useFonts({
    GrandHotel: require("../../../assets/fonts/GrandHotel-Regular.ttf"),
  });

  if (!fontLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.contentContainer}>
          <Text style={styles.appName}>thimble</Text>
          <Text style={styles.slogan}>Group sharing made simple</Text>
          <Button
            onPress={() => navigation.navigate("Login")}
            title="Log in to Thimble"
            buttonStyle={styles.loginNavLink}
            titleStyle={{ fontWeight: "600", fontSize: 16 }}
          />
          <Text style={styles.orText}>Or</Text>
          <Button
            title="Create an Account"
            type="outline"
            buttonStyle={styles.createAccountNavLink}
            titleStyle={styles.createAccountNavLinkText}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  appName: {
    fontFamily: "GrandHotel",
    fontSize: 60,
    paddingHorizontal: 5,
  },
  slogan: {
    fontSize: 20,
    marginTop: -13,
    marginBottom: 35,
  },
  loginNavLink: {
    backgroundColor: "#a6a3ff",
    paddingVertical: 10,
    paddingHorizontal: 23,
    borderRadius: 5,
  },
  createAccountNavLink: {
    borderColor: "#a6a3ff",
    borderWidth: 2,
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  orText: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 11,
  },
  createAccountNavLinkText: {
    fontWeight: "600",
    color: "#a6a3ff",
    fontSize: 16,
  },
});

export default HomeScreen;
