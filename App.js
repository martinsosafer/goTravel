
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectedScreen from './screens/SelectedScreen';

  const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Discover" component={DiscoverScreen} />
          <Stack.Screen name="SelectedScreen" component={SelectedScreen} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

