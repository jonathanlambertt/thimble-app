import React, { useContext, useEffect } from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import AuthStack from "../../navigations/authentication/AuthStack";
import { Context as AuthContext } from "../../contexts/authentication/AuthContext";
import SplashScreen from "../../screens/SplashScreen";
import * as SecureStore from "expo-secure-store";
import TabBar from "../../navigations/tabbar/TabBar";
import TestScreen from "../../screens/TestScreen";
import NewGroupScreen from "../../screens/groups/NewGroupScreen";

const Stack = createStackNavigator();

const RootStack = () => {
  const { state, logIn, setIsLoading } = useContext(AuthContext);

  const fetchToken = async () => {
    let token = await SecureStore.getItemAsync("token");
    if (token) {
      logIn(token);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
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
              <Stack.Screen
                name="NewGroup"
                component={NewGroupScreen}
                options={{ title: "Create a Group" }}
              />
            </Stack.Group>
          </>
        )}
      </Stack.Navigator>
    );
  }
};

export default RootStack;
