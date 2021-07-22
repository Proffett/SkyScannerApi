/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 */
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName, Text, View} from 'react-native';

import { RootStackParamList } from '../types';
import TopTabNavigator from './TopTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import FlightScreen from "../screens/FlightScreen";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainScreens" component={TopTabNavigator}  />
      <Stack.Screen name="FlightScreen" component={FlightScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
