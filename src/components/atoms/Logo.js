import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const Logo = () => {
  const [fontLoaded] = useFonts({
    GrandHotel: require("../../../assets/fonts/GrandHotel-Regular.ttf"),
  });

  if (!fontLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>thimble</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontFamily: "GrandHotel",
    fontSize: 42,
    marginTop: -3,
    paddingHorizontal: 5,
  },
});

export default Logo;
