import Ionicons from '@expo/vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import { useColorScheme } from '../hooks/useColorScheme';
import FavouritesScreen from '../screens/FavouritesScreen';
import BrowseScreen from '../screens/BrowseScreen';
import {BrowseParamList, FavouritesParamList, TopTabParamList} from '../types';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";


const TopTab = createMaterialTopTabNavigator<TopTabParamList>();

export default function TopTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator
      initialRouteName="Favourites"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <TopTab.Screen
        name="Favourites"
        component={FavouritesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <TopTab.Screen
        name="Browse"
        component={BrowseNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </TopTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const FavouritesStack = createStackNavigator<FavouritesParamList>();

function FavouritesNavigator() {
  return (
    <FavouritesStack.Navigator>
      <FavouritesStack.Screen
        name="FavouritesScreen"
        component={FavouritesScreen}
        options={{headerShown: false  }}
      />
    </FavouritesStack.Navigator>
  );
}

const BrowseStack = createStackNavigator<BrowseParamList>();

function BrowseNavigator() {
  return (
    <BrowseStack.Navigator>
      <BrowseStack.Screen
        name="BrowseScreen"
        component={BrowseScreen}
        options={{ headerShown: false }}
      />
    </BrowseStack.Navigator>
  );
}
