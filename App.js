import React from 'react';
import { StatusBar, StyleSheet, Text, ImageBackground ,Header,TouchableOpacity,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import ProfileScreen from './Screen/profile';
import HomeScreen from './Screen/home';
import NotificationsScreen from './Screen/notifications';
import SettingsScreen from './Screen/settings';
import ContactUsScreen from './Screen/ContactUsScreen';
import FAQScreen from './Screen/Faq';
import TermsAndConditionsScreen from './Screen/terms&Conditions';
import LoginScreen from './Screen/login'
import  RegisterScreen from "./Screen/SignUp";
import Pophandler from './component/pophandler';
import  CustomHeader from './component/header';
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const updateStack = createStackNavigator();
const profileStack = createStackNavigator();

// Define Home stack navigator
const HomeStackScreen = () => (
  <HomeStack.Navigator  >
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Disease Details" component={Pophandler} />
  </HomeStack.Navigator>
);
const UpdateStackScreen = () => (
  <updateStack.Navigator  >
    <updateStack.Screen name="Setting" component={SettingsScreen} />
    <updateStack.Screen name="Contact us" component={ContactUsScreen} />
    <updateStack.Screen name="FAQ" component={FAQScreen} />
    <updateStack.Screen name="Terms and Conditions" component={TermsAndConditionsScreen} />
  </updateStack.Navigator>
);
const ProfileStackScreen = () => (
  <profileStack.Navigator  >
    <profileStack.Screen name="Profile" component={ProfileScreen} />
    <profileStack.Screen name="Login" component={LoginScreen} />
    <profileStack.Screen name="Sign up" component={RegisterScreen} />
  </profileStack.Navigator>
);

// Define your icons and labels for the bottom tab navigator here
// const screenOptions = ({ route }) => ({
//   tabBarIcon: ({ focused, color, size }) => {
//     const icons = {
//       HomeScreen: focused ? 'camera' : 'camera-outline',
//       Updates: focused ? 'bell' : 'bell-outline',
//       Settings: focused ? 'cog' : 'cog-outline',
//       Profilee: focused ? 'account-circle' : 'account-circle-outline',
//     };
//     return <MaterialCommunityIcons name={icons[route.name]} size={size} color={color} />;
//   },
//   tabBarLabel: ({ focused }) => {
//     const labels = {
//       Home: 'HomeScreen',
//       Updates: 'Updates',
//       Settings: 'Settings',
//       Profilee: 'Profile',
//     };
//     return <Text style={{ color: focused ? '#386641' : '#C0C0C0', alignItems:'center' }}>{focused ? labels[route.name] : ''}</Text>;
//   },
//   tabBarActiveTintColor: '#386641',
//   tabBarInactiveTintColor: '#C0C0C0',
//   tabBarStyle: styles.tabBar,
//     headerStyle: { 
//       height: 60,
//       // borderBottomLeftRadius: 50,
//       // borderBottomRightRadius: 50,
//       elevation: 25,
//       backgroundColor: '#386641',
//       shadowColor: '#000'
//     },

// });
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: '#fff', // Corrected property name
  },
  headerStyle: { 
    height: 100,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    elevation: 25,
    backgroundColor: '#386641',
    shadowColor: '#000',
  },
};
export default function App() {
  return (
    <ImageBackground
      source={require('./assets/background.jpg')} // Make sure this path is correct for your image
      resizeMode="cover" // or "contain" if you don't want the image to be cropped
      style={{ flex: 1 }}
    >
     
     <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator initialRouteName="HomeStackScreen" screenOptions={screenOptions}>
          <Tab.Screen 
            name="Support" 
            component={ContactUsScreen} 
            options={{
              tabBarIcon: ({focused}) => (
                <View style={{ alignItems: "center", justifyContent: "center" }}> 
                  <Entypo name="paper-plane" size={24} color={focused ? "#023020" : "#111"} />
                  <Text style={{ fontSize: 12, color: "#023020" }}>Updates</Text>
                </View>
              ),
              headerTitle: () => <CustomHeader title="Support" />,
              headerRight: () => (
                <TouchableOpacity style={{ marginRight: 15 }}> 
                <MaterialCommunityIcons name='account-outline' size={28} color='white' /> 
                </TouchableOpacity>
                 ),
                 headerStyle: { 
                   height: 100,
                   borderBottomLeftRadius: 50,
                   borderBottomRightRadius: 50,
                   elevation: 25,
                   backgroundColor: '#386641',
                   shadowColor: '#000'
                 },
            }}
          />
          <Tab.Screen 
            name="Updates" 
            component={NotificationsScreen} 
            options={{
              tabBarIcon: ({focused}) => (
                <View style={{ alignItems: "center", justifyContent: "center" }}> 
                  <Entypo name="list" size={24} color={focused ? "#023020" : "#111"} />
                  <Text style={{ fontSize: 12, color: "#023020" }}>Updates</Text>
                </View>
              ),
              headerTitle: () => <CustomHeader title="Updates" />,
              headerRight: () => (
               <TouchableOpacity style={{ marginRight: 15 }}> 
               <MaterialCommunityIcons name='bell-outline' size={28} color='white' /> 
               </TouchableOpacity>
                ),
                headerStyle: { 
                  height: 100,
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                  elevation: 25,
                  backgroundColor: '#386641',
                  shadowColor: '#000'
                },
            }}
          />
          <Tab.Screen 
            name="Home" 
            component={HomeStackScreen} 
            options={{
              tabBarIcon: ({focused}) => (
                <View style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#023020",
                  width: Platform.OS === "ios" ? 70 : 60,
                  height: Platform.OS === "ios" ? 70 : 60,
                  top: Platform.OS === "ios" ? -6 : -20,
                  borderRadius: Platform.OS === "ios" ? 35 : 30,
                  borderWidth: 2,
                  borderColor: "#ffffff"
                }}>
                  <FontAwesome name="search" size={24} color="#fff" />
                </View>
              ),
              headerTitle: () => <CustomHeader title="Home" />,
              headerRight: () => (
                <TouchableOpacity style={{ marginRight: 15 }}> 
                <MaterialCommunityIcons name='home-outline' size={28} color='white' /> 
                </TouchableOpacity>
                 ),
                 headerStyle: { 
                   height: 100,
                   borderBottomLeftRadius: 50,
                   borderBottomRightRadius: 50,
                   elevation: 25,
                   backgroundColor: '#386641',
                   shadowColor: '#000',
                   alignItems:'center'
                 },
            }}
          />
          <Tab.Screen
            name="Setting" 
            component={UpdateStackScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={{ alignItems: "center", justifyContent: "center" }}> 
                  <MaterialIcons name="settings" size={24} color={focused ? "#023020" : "#111"} />
                  <Text style={{ fontSize: 12, color: "#023020" }}>Setting</Text>
                </View>
              ),
              headerTitle: () => <CustomHeader title="Settings" />,
              headerRight: () => (
                <TouchableOpacity style={{ marginRight: 15 }}> 
                <MaterialCommunityIcons name='cog-outline' size={28} color='white' /> 
                </TouchableOpacity>
                 ),
                 headerStyle: { 
                   height: 100,
                   borderBottomLeftRadius: 50,
                   borderBottomRightRadius: 50,
                   elevation: 25,
                   backgroundColor: '#386641',
                   shadowColor: '#000'
                 },
            }}
          />
          <Tab.Screen 
            name="Profile" 
            component={ProfileStackScreen} 
            options={{
              tabBarIcon: ({focused}) => (
                <View style={{ alignItems: "center", justifyContent: "center" }}> 
                  <Ionicons
                      name="person" size={24} color={focused ? "#023020	" : "#111"} />
                  <Text style={{ fontSize: 12, color: "#023020" }}>Profile</Text>
                </View>
              ),
              headerTitle: () => <CustomHeader title="Profile" />,
              headerRight: () => (
                <TouchableOpacity style={{ marginRight: 15 }}> 
                <MaterialCommunityIcons name='account-outline' size={28} color='white' /> 
                </TouchableOpacity>
                 ),
                 headerStyle: { 
                   height: 100,
                   borderBottomLeftRadius: 50,
                   borderBottomRightRadius: 50,
                   elevation: 25,
                   backgroundColor: '#386641',
                   shadowColor: '#000'
                 },
        
            }}
          />
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
    height: 60,
    borderTopWidth: 0,
    backgroundColor: '#F9F6EE',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
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
  }
});

