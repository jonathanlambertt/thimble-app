import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import GroupsScreen from "../../screens/groups/GroupsScreen";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

const GroupStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Groups"
        component={GroupsScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NewGroup")}>
              <Feather
                name="plus-circle"
                size={26}
                color="black"
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default GroupStack;
