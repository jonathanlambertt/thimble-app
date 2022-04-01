import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FeedScreen from "../../screens/feed/FeedScreen";
import ActivityScreen from "../../screens/feed/ActivityScreen";
import Logo from "../../components/atoms/Logo";
import { Fontisto, AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();

const FeedStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          title: <Logo />,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Activity")}>
              <Fontisto
                name="bell"
                size={26}
                color="black"
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              style={{ marginLeft: 17 }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default FeedStack;
