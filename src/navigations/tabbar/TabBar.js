import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchStack from "../search/SearchStack";
import TestScreen from "../../screens/TestScreen";
import { useFonts } from "expo-font";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const tabIconSize = 29;

const Icon = createIconSetFromIcoMoon(
  require("../../../assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

const TabBar = () => {
  const [fontLoaded] = useFonts({
    IcoMoon: require("../../../assets/icomoon/icomoon.ttf"),
  });

  if (!fontLoaded) {
    return null;
  } else {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#333",
          tabBarInactiveTintColor: "#a9a9a9",
          tabBarIcon: ({ focused, color }) => {
            // Search tab icon
            if (route.name == "SearchTab") {
              if (focused) {
                return (
                  <Icon name="search2-fill" size={tabIconSize} color={color} />
                );
              } else {
                return (
                  <Icon
                    name="search2-outline"
                    size={tabIconSize}
                    color={color}
                  />
                );
              }
            }
          },
        })}
      >
        <Tab.Screen
          name="SearchTab"
          component={SearchStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Test" component={TestScreen} />
      </Tab.Navigator>
    );
  }
};

export default TabBar;
