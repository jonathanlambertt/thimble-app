import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import RootStack from "./src/navigations/root/RootStack";
import { Provider as AuthProvider } from "./src/contexts/authentication/AuthContext";

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
