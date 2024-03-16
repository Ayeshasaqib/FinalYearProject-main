import React from 'react';
import { StatusBar, StyleSheet, Text, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import ProfileScreen from './component/profile';
import HomeScreen from './component/home';
import NotificationsScreen from './component/notifications';
import SettingsScreen from './component/settings';
import ContactUsScreen from './component/ContactUsScreen';
import FAQScreen from './component/Faq';
import TermsAndConditionsScreen from './component/terms&Conditions';
import loginScreen from './component/login'
import  SignUpScreen from "./component/SignUp";
const Tab = createBottomTabNavigator();

// Define your icons and labels for the bottom tab navigator here
const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    const icons = {
      Home: focused ? 'camera' : 'camera-outline',
      Updates: focused ? 'bell' : 'bell-outline',
      Settings: focused ? 'cog' : 'cog-outline',
      Profile: focused ? 'account-circle' : 'account-circle-outline',
    };
    return <MaterialCommunityIcons name={icons[route.name]} size={size} color={color} />;
  },
  tabBarLabel: ({ focused }) => {
    const labels = {
      Home: 'Home',
      Updates: 'Updates',
      Settings: 'Settings',
      Profile: 'Profile',
    };
    return <Text style={{ color: focused ? '#386641' : '#C0C0C0' }}>{focused ? labels[route.name] : ''}</Text>;
  },
  tabBarActiveTintColor: '#386641',
  tabBarInactiveTintColor: '#C0C0C0',
  tabBarStyle: styles.tabBar,
});

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/background.jpg')} // Make sure this path is correct for your image
      resizeMode="cover" // or "contain" if you don't want the image to be cropped
      style={{ flex: 1 }}
    >
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Updates" component={NotificationsScreen} />
          <Tab.Screen name="Settings" component={loginScreen} />
          <Tab.Screen name="Profile" component={SignUpScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ImageBackground>
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
    height: 50,
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
});

