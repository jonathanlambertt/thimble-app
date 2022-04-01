import { createStackNavigator } from "@react-navigation/stack";
import FeedScreen from "../../screens/feed/FeedScreen";
import Logo from "../../components/atoms/Logo";

const Stack = createStackNavigator();

const FeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          title: <Logo />,
        }}
      />
    </Stack.Navigator>
  );
};

export default FeedStack;
