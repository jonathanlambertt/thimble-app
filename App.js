import React, { useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigations/authentication/AuthStack";
import { Context as AuthContext } from "./src/contexts/authentication/AuthContext";
import { Provider as AuthProvider } from "./src/contexts/authentication/AuthContext";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/screens/SplashScreen";
import * as SecureStore from "expo-secure-store";
import TestScreen from "./src/screens/TestScreen";

const Stack = createStackNavigator();

const RootStack = () => {
  const { state, logIn, setIsLoading } = useContext(AuthContext);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        token = await SecureStore.getItemAsync("token");
        if (token) {
          logIn(token);
        } else {
          setIsLoading(false);
        }
      } catch (error) {}
    };

    fetchToken();
  }, []);

  if (state.isLoading) {
    return <SplashScreen />;
  } else {
    return (
      <Stack.Navigator>
        {state.token === null ? (
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen name="Test" component={TestScreen} />
        )}
      </Stack.Navigator>
    );
  }
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootStack />
        <StatusBar style="auto" />
      </NavigationContainer>
    </AuthProvider>
  );
}
