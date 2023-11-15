
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "./screens/WelcomeScreen"
import TimerScreen from "./screens/TimerScreen"
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator  initialRouteName='Welcome' screenOptions={{headerShown : false}}>
      <Stack.Screen  name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen   name="Timer" component={TimerScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}