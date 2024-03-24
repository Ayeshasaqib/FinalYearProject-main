import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const RESULT_MAPPING = ['SCAB APPLE', 'HEALTHY', 'MULTIDISEASE', 'Cedar Apple Rust','Disease 5','Disease 6'];

const Output = ({ predictions }) => {
  let content;

  if (predictions) {
    const highestPredictionIndex = predictions.indexOf(Math.max(...predictions));
    const diseaseName = RESULT_MAPPING[highestPredictionIndex];
    const probability = Math.round(predictions[highestPredictionIndex] * 100) + '%';

    content = (
      <View style={styles.predictionContainer}>
        <Text style={styles.diseaseName}>Diagnosis: {diseaseName}</Text>
        <Text style={styles.probability}>Probability: {probability}</Text>
      </View>
    );
  } else {
    
    content = <Text style={styles.noPrediction}>Upload or Take image of a Leaf to analyze for disease</Text>;
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