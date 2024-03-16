import { Modal, View, StyleSheet,TouchableOpacity,Text,ScrollView } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react'; // Correct import statement
import POPULAR_PLANTS from '../src/api/diseases'; 
import home from './home';

const Pophandler = ({route}) => {
  const plant = POPULAR_PLANTS.find(p => p.id  == route?.params?.val);
  if (plant)
    {
      return(
                 
                  <ScrollView>
                    <View>
                    <Text style={styles.plantHeadings}>Symptoms: </Text>
                    <Text style={styles.plantText}>{plant?.symptoms}</Text>
                    <Text style={styles.plantHeadings}>Causes: </Text>
                    <Text style={styles.plantText}>{plant?.causes}</Text>
                    <Text style={styles.plantHeadings}>Remedies: </Text>
                    <Text style={styles.plantText}>{plant?.remedies}</Text> 
                  </View> 
                 </ScrollView> 
                 
                  
        
      );
    }
  else{
    alert("Name of disease is not correct")
  }
};

const styles = StyleSheet.create({
  plantHeadings: {
    fontWeight: 'bold',
    fontSize:20,
    paddingVertical: 5,
  },
  plantText: {
    textAlign: 'left',
    //paddingVertical: 5,
  },
});

export default Pophandler;
