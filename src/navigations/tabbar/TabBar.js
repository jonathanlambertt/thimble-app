import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchStack from "../search/SearchStack";
import TestScreen from "../../screens/TestScreen";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Test" component={TestScreen} />
    </Tab.Navigator>
  );
};

export default TabBar;
