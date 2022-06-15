import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import GetNames from './Screens/GetNames';
import Game from './Screens/Game';
import Choice from './Screens/Choice';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GetNames" component={GetNames} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Choice" component={Choice} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
