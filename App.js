import React from 'react';
import { StatusBar, StyleSheet, Text, ImageBackground, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import LoginScreen from './Screen/login';
import RegisterScreen from "./Screen/SignUp";
// Assuming Pophandler is a valid screen. If not, replace with a valid screen component.
import Pophandler from './component/pophandler';

const Tab = createBottomTabNavigator();

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
};

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/background.jpg')}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
            name="Profiles" 
            component={ProfileScreen} 
            options={{
              tabBarIcon: ({focused}) => (
                <View style={{ alignItems: "center", justifyContent: "center" }}> 
                  <Entypo name="home" size={24} color={focused ? "#023020" : "#111"} />
                  <Text style={{ fontSize: 12, color: "#023020" }}>Updates</Text>
                </View>
              ),
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
            }}
          />
          <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
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
            }}
          />
          <Tab.Screen
            name="Setting" 
            component={SettingsScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={{ alignItems: "center", justifyContent: "center" }}> 
                  <MaterialIcons name="settings" size={24} color={focused ? "#023020" : "#111"} />
                  <Text style={{ fontSize: 12, color: "#023020" }}>Setting</Text>
                </View>
              ),
            }}
          />
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
              tabBarIcon: ({focused}) => (
                <View style={{ alignItems: "center", justifyContent: "center" }}> 
                  <Ionicons
                      name="person" size={24} color={focused ? "#023020	" : "#111"} />
                  <Text style={{ fontSize: 12, color: "#023020" }}>Profile</Text>
                </View>
              ),
            }}
          />
       </Tab.Navigator>
     </NavigationContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // Add your styles here
  safeArea: {
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  roundedImage: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderRadius: 20,
    overflow: 'hidden',
    width: '100%',
    height: 200,
  },
  text: {
    fontSize: 24,
    position: 'absolute',
  },
  headerContainer: {
    backgroundColor: '#386641',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  logo: {
    width: 170,
    height: 40,
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
    borderRadius: 30,
    margin: 5,
  },
  button: {
    backgroundColor: '#386641',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#F9F6EE',
    fontWeight: 'bold',
  },
});
