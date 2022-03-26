import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../../screens/search/SearchScreen";

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default SearchStack;
