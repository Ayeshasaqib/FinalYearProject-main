import React, { useRef } from 'react';
import { Animated, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CaptureButton = ({ onPress }) => {
  // Animated value for the scale of the button
  const scaleValue = useRef(new Animated.Value(1)).current;

  // Function to start the animation
  const animatePress = () => {
    Animated.sequence([
      // Scale down animation
      Animated.timing(scaleValue, {
        toValue: 0.8,
        duration: 150,
        useNativeDriver: true,
      }),
      // Scale back to original size
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (onPress) {
        onPress(); // Call the passed onPress function after animation ends
      }
    });
  };

  // The animated style to apply to the button
  const animatedStyle = {
    transform: [{ scale: scaleValue }],
  };

  return (
    <TouchableOpacity
      style={styles.captureButton}
      onPressIn={animatePress}
      activeOpacity={1} // Disable the default opacity change on press
    >
      <Animated.View style={[styles.captureButtonInner, animatedStyle]}>
        <MaterialCommunityIcons name="camera-plus" size={30} color="#fff" />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // ... other styles ...
  captureButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#4caf50',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  captureButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#388E3C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // ... other styles ...
});

export default CaptureButton;
