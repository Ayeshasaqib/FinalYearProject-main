import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  // Example function to fetch notifications (replace with your actual data fetching logic)
  useEffect(() => {
    const fetchNotifications = async () => {
      // Mock notifications
      const fetchedNotifications = [
        { id: 1, title: 'New Disease Detected', message: 'Your plant may have leaf spot disease.' },
        { id: 2, title: 'Watering Reminder', message: 'It\'s time to water your fern.' },
        { id: 3, title: 'Fertilizer Alert', message: 'Consider fertilizing your cactus.' },
        { id: 4, title: 'Weather Warning', message: 'Upcoming cold weather may affect your plants.' },
        { id: 5, title: 'New Feature', message: 'Check out our new plant identification tool.' },
        // Add more notifications as needed
      ];
      setNotifications(fetchedNotifications);
    };

    fetchNotifications();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.notificationContainer}>
        {notifications.map(notification => (
          <TouchableOpacity key={notification.id} style={styles.notificationCard}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text>{notification.message}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9edc9',
    flex: 1,
  },
  notificationContainer: {
    padding: 10,
  },
  notificationCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  notificationTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
