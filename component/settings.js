import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SettingsOption = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.option} onPress={onPress}>
    <MaterialIcons name={icon} size={24} color="#386641" />
    <Text style={styles.optionText}>{title}</Text>
    <MaterialIcons name="chevron-right" size={24} color="#C0C0C0" />
  </TouchableOpacity>
);

const UpgradePremium = () => (
  <View style={styles.premiumContainer}>
    <Image source={require('../images/plant.jpg')} style={styles.premiumImage} />
    <TouchableOpacity style={styles.premiumButton}>
      <Text style={styles.premiumButtonText}>Upgrade</Text>
    </TouchableOpacity>
  </View>
);

const Settings = () => {
  return (
    <ScrollView style={styles.container}>
      <SettingsOption icon="lightbulb-outline" title="Light meter" onPress={() => {}} />
      <SettingsOption icon="people-outline" title="Community" onPress={() => {}} />
      <SettingsOption icon="bug-report" title="Disease Diagnose" onPress={() => {}} />
      <SettingsOption icon="favorite-outline" title="Favorites" onPress={() => {}} />
      <SettingsOption icon="mail-outline" title="Contact Us" onPress={() => {}} />
      <UpgradePremium />
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9edc9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#386641',
    padding: 20,
    textAlign: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    justifyContent: 'space-between',
  },
  optionText: {
    flex: 1,
    fontSize: 18,
    color: '#386641',
    paddingLeft: 15,
  },
  premiumContainer: {
    marginVertical: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Add a white background to make it stand out
    borderRadius: 25, // Rounded borders
    padding: 10, // Padding to prevent content from touching the edges
    shadowColor: '#000', // Shadow to lift the card from the background
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  premiumImage: {
    width: '100%',
    height: 150,
    borderRadius: 25, // Match the container's border radius
    overflow: 'hidden', // Ensures the image does not bleed outside the border radius
    resizeMode: 'cover', // Change to 'cover' for better aspect ratio handling
  },
  premiumButton: {
    backgroundColor: '#FFD700', // Keep the vibrant yellow color
    paddingVertical: 12, // Increase padding for better touch area
    paddingHorizontal: 30, // Increase padding for wider button
    borderRadius: 30, // Fully rounded corners for the button
    marginTop: 10, // Adjust as necessary for space above the button
    alignSelf: 'center', // Ensure button is centered in the container
    shadowColor: '#000', // Shadow for the button
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  premiumButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#386641',
    textAlign: 'center', // Ensure text is centered in the button
  },
});
