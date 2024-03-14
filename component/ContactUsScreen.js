import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const ContactUsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Contact Us</Text>
        <Image
          source={require('../assets/logo.png')} // Add an appropriate image
          style={styles.image}
        />
        <Text style={styles.introText}>We're here to help and answer any questions you might have. We look forward to hearing from you!</Text>
        <View style={styles.contactMethod}>
          <Text style={styles.methodHeader}>Email Us</Text>
          <Text style={styles.text}>support@leafCare.com</Text>
        </View>
        <View style={styles.contactMethod}>
          <Text style={styles.methodHeader}>Call Us</Text>
          <Text style={styles.text}>+123 456 7890</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Soft background color
  },
  content: {
    padding: 20,
    alignItems: 'center', // Center the content
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#386641', // Theme color for header
    marginBottom: 20,
  },
  introText: {
    fontSize: 16,
    color: '#555', // Darker text for readability
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100, // Circular image
    marginBottom: 20,
  },
  contactMethod: {
    width: '100%', // Full width for alignment
    padding: 10,
    backgroundColor: '#fff', // White background for each section
    marginBottom: 15,
    borderRadius: 10, // Rounded corners
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  methodHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#386641',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
});

export default ContactUsScreen;
