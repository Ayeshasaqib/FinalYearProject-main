import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, StyleSheet } from 'react-native'; // Import StyleSheet here

import HomeStackScreen from './HomeStack';
import UpdateStackScreen from './UpdateStack';
import ProfileStackScreen from './ProfileStack';
import NotificationsScreen from '../component/notifications';

const Tab = createBottomTabNavigator();

// Define screenOptions here, before using it
const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name === 'Home') iconName = focused ? 'camera' : 'camera-outline';
    else if (route.name === 'Updates') iconName = focused ? 'bell' : 'bell-outline';
    else if (route.name === 'Settings') iconName = focused ? 'cog' : 'cog-outline';
    else if (route.name === 'Profile') iconName = focused ? 'account-circle' : 'account-circle-outline';

    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
  },
  tabBarLabel: ({ focused }) => {
    const label = route.name === 'Home' ? 'HomeScreen' : route.name;
    return <Text style={focused ? styles.tabBarLabelFocused : styles.tabBarLabel}>{focused ? label : ''}</Text>;
  },
  tabBarActiveTintColor: '#386641',
  tabBarInactiveTintColor: '#C0C0C0',
  tabBarStyle: styles.tabBar,
});

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Updates" component={NotificationsScreen} />
      <Tab.Screen name="Settings" component={UpdateStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    borderTopWidth: 0,
    backgroundColor: '#F9F6EE',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  tabBarLabel: {
    color: '#C0C0C0',
  },
  tabBarLabelFocused: {
    color: '#386641',
  },
  // Add other styles related to the tab bar here
});
