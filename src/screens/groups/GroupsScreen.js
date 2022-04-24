import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import CreatedGroupsTab from "./CreatedGroupsTab";
import JoinedGroupsTab from "./JoinedGroupsTab";

const Tab = createMaterialTopTabNavigator();

const GroupsScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: "#ff878a",
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          textTransform: "none",
        },
      }}
    >
      <Tab.Screen name="Created" component={CreatedGroupsTab} />
      <Tab.Screen name="Joined" component={JoinedGroupsTab} />
    </Tab.Navigator>
  );
};

export default GroupsScreen;
