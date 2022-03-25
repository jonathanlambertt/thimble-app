import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/authentication/HomeScreen";
import LoginScreen from "../../screens/authentication/LoginScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Group
        screenOptions={{
          presentation: "modal",
          title: "",
          headerBackTitle: "Cancel",
          headerBackTitleStyle: {
            color: "#ff878a",
            fontWeight: "600",
            marginLeft: 15,
          },
          headerBackImage: () => {
            null;
          },
          headerStyle: {
            shadowColor: "transparent",
          },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
