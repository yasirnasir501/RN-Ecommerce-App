import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './screen/Main';
import ProductDetail from './screen/ProductDetail';
import Cart from './screen/Cart';
import Login from './screen/Login';
import SignUp from './screen/SignUp';
import Checkout from './screen/Checkout';
import Addresses from './screen/Addresses';
import AddAddress from './screen/AddAddress';
import OrderSuccess from './screen/OrderSuccess';
import Orders from './screen/Orders';


const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} options={{headerShown: false }}/>
      <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown: false }}/>
      <Stack.Screen name="Cart" component={Cart} options={{headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false }}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false }}/>
      <Stack.Screen name="Checkout" component={Checkout} options={{headerShown: false }}/>
      <Stack.Screen name="Addresses" component={Addresses} options={{headerShown: false }}/>
      <Stack.Screen name="AddAddress" component={AddAddress} options={{headerShown: false }}/>
      <Stack.Screen name="OrderSuccess" component={OrderSuccess} options={{headerShown: false }}/>
      <Stack.Screen name="Orders" component={Orders} options={{headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigator