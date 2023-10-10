import StartApp from './components/Start';
import ChattyScreen from './components/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';

const Stack = createNativeStackNavigator();

const App = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyAWnfpvCHIwaKD0wYaUCbH9pqbAu4NhyAY',
    authDomain: 'chatapp-f783f.firebaseapp.com',
    projectId: 'chatapp-f783f',
    storageBucket: 'chatapp-f783f.appspot.com',
    messagingSenderId: '751916694021',
    appId: '1:751916694021:web:42126664c67d40b06cba6c'
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = initializeFirestore(app, {
    experimentalForceLongPolling: true
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name='Home' component={StartApp} />
        <Stack.Screen name='Chat'>
          {(props) => <ChattyScreen db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
