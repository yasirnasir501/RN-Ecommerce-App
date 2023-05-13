import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './screen/Main';


const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} options={{headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigator