import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";

import SearchStack from "../search/SearchStack";
import FeedStack from "../feed/FeedStack";
import GroupStack from "../groups/GroupStack";

const Tab = createBottomTabNavigator();
const tabIconSize = 29;
const NewPostTabPlaceholder = () => {};

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
            if (route.name == "FeedTab") {
              if (focused) {
                return <Icon name="home2-fill" size={tabIconSize} />;
              } else {
                return (
                  <Icon
                    name="home2-outline"
                    size={tabIconSize}
                    style={{ color: color }}
                  />
                );
              }
            }
            if (route.name == "NewPostTab") {
              return <Icon name="add2" color="#ff878a" size={41} />;
            }
            if (route.name == "GroupsTab") {
              if (focused) {
                return (
                  <View style={{ marginTop: 7 }}>
                    <Icon name="groups2-fill" size={45} />
                  </View>
                );
              } else {
                return (
                  <View style={{ marginTop: 7 }}>
                    <Icon
                      name="groups2-outline"
                      size={45}
                      style={{ color: color }}
                    />
                  </View>
                );
              }
            }
          },
        })}
      >
        <Tab.Screen
          name="FeedTab"
          component={FeedStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="SearchTab"
          component={SearchStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="NewPostTab"
          component={NewPostTabPlaceholder}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate("NewPost");
            },
          })}
        />
        <Tab.Screen
          name="GroupsTab"
          component={GroupStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    );
  }
};

export default TabBar;
