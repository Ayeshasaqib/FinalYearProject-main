import React from 'react';
import { ImageBackground, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './component/BottomTabNavigator';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/background.jpg')}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <NavigationContainer>
        <StatusBar barStyle="auto" />
        <BottomTabNavigator />
      </NavigationContainer>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  // Add any other styles that belong to App.js here
});
