import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Output = ({ predictions }) => {
  let content;

  if (predictions) {
    // Assuming 'predictions' now includes 'leafType', 'disease', and 'probability'
    const { leafType, disease, probability } = predictions;
    content = (
      <View style={styles.predictionContainer}>
        <Text style={styles.leafType}>Leaf Type: {leafType}</Text>
        <Text style={styles.diseaseName}>Disease: {disease}</Text>
      </View>
    );
  } else {
    content = <Text style={styles.noPrediction}>Upload or Take an image of a leaf to analyze for disease</Text>;
  }

  return (
    <View style={styles.container}>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  predictionContainer: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  leafType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5, // Add some space between the leaf type and disease name
  },
  diseaseName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  probability: {
    fontSize: 16,
    color: '#666',
  },
  noPrediction: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Output;
