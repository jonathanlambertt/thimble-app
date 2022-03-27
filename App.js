import React, { useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigations/authentication/AuthStack";
import { Context as AuthContext } from "./src/contexts/authentication/AuthContext";
import { Provider as AuthProvider } from "./src/contexts/authentication/AuthContext";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import SplashScreen from "./src/screens/SplashScreen";
import * as SecureStore from "expo-secure-store";
import TabBar from "./src/navigations/tabbar/TabBar";
import TestScreen from "./src/screens/TestScreen";

const Stack = createStackNavigator();

const RootStack = () => {
  const { state, logIn, setIsLoading } = useContext(AuthContext);

  useEffect(() => {
    const fetchToken = async () => {
      let token = await SecureStore.getItemAsync("token");
      if (token) {
        logIn(token);
      } else {
        setIsLoading(false);
      }
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
          <>
            <Stack.Screen
              name="TabBar"
              component={TabBar}
              options={{ headerShown: false }}
            />
            {/* CardStyleInterpolators is for Full Screen modal */}
            <Stack.Group
              screenOptions={{
                presentation: "modal",
                cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
              }}
            >
              <Stack.Screen name="NewPost" component={TestScreen} />
            </Stack.Group>
          </>
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
