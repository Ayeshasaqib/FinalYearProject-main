import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, SafeAreaView, Text, ImageBackground } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import Profile from './component/profile';
import HomeScreen from './component/home';
import Notifications from './component/notifications';
import Settings from './component/settings';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'camera' : 'camera-outline';
            } else if (route.name === 'Updates') {
              iconName = focused ? 'bell' : 'bell-outline';
            } else if (route.name === 'Setting') {
              iconName = focused ? 'cog' : 'cog-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'account-circle' : 'account-circle-outline';
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarLabel: ({ focused }) => {
            let label;
            if (route.name === 'Home') {
              label = focused ? 'Recognize' : '';
            } else if (route.name === 'Updates') {
              label = focused ? 'Updates' : '';
            } else if (route.name === 'Setting') {
              label = focused ? 'Setting' : '';
            } else if (route.name === 'Profile') {
              label = focused ? 'Profile' : '';
            }
            return <Text style={{ color: focused ? '#386641' : '#C0C0C0' }}>{label}</Text>;
          },
          tabBarActiveTintColor: '#386641',
          tabBarInactiveTintColor: '#C0C0C0',
          tabBarStyle: {
            backgroundColor: '#F9F6EE',
            height: 60,
            paddingBottom: 10, // for iOS mostly to ensure label is visible
            paddingTop: 10, // same as above
            borderTopWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 5,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Updates" component={Notifications} />
        <Tab.Screen name="Setting" component={Settings} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'transparent',
    zIndex: 10,
  },
 
  roundedImage: {
    borderBottomLeftRadius: 20, // Adjust the radius to suit your design
    borderBottomRightRadius: 20, // Adjust the radius to suit your design
    borderRadius: 20,
    overflow: 'hidden',
    width: '100%', // Adjust as needed
    height: 200, // Adjust as needed
 
  },
  text: {
    
    fontSize: 24,
    position: 'absolute',
  },
  headerContainer: {
    backgroundColor: '#386641', // Adjust the color to match your design
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10, // Padding for status bar height
    paddingBottom: 10, // Reduced padding for a shorter header
  },
  logo: {
    width: 170, // Reduced width for a smaller logo
    height: 40, // Reduced height for a smaller logo
  },
  tabBar: {
    height: 60,
    borderTopWidth: 0,
    backgroundColor: '#F9F6EE',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  tabBar: {
    height: 60,
    borderTopWidth: 0,
    backgroundColor: '#F9F6EE',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  tabBarItem: {
    borderRadius: 30, // Fully rounded corners for circular icons
    margin: 5, // Add some margin around icons
  },
  // Add styles for buttons
  button: {
    backgroundColor: '#386641', // Use the main color for buttons
    borderRadius: 20, // Rounded corners for buttons
    padding: 15,
    alignItems: 'center',
    marginVertical: 10, // Add vertical margin for separation
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#F9F6EE', // Contrast color for text inside button
    fontWeight: 'bold',
  },
  // Styles for buttons and text from your previous styles can remain the same
  // ...
});

