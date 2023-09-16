import StartApp from './components/Start';
import ChattyScreen from './components/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name='Home' component={StartApp} />
        <Stack.Screen name='ChatScreen' component={ChattyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
