import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, ActivityIndicator, TextInput, Alert } from 'react-native';
import React, { useState, useEffect } from 'react'; // Correct import statement
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Ensure you have expo vector icons installed
import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as jpeg from 'jpeg-js';
import Output from '../Output';

class CustomL2Regularizer {
  constructor(l2) {
      this.l2 = l2; // L2 regularization factor
  }

  apply(x) {
      // Apply L2 regularization: 0.5 * lambda * sum(square(weights))
      return tf.mul(tf.scalar(0.5 * this.l2), tf.sum(tf.square(x)));
  }

  getConfig() {
      // Method for serialization
      return { l2: this.l2 };
  }

  static get className() {
      // Class name for TensorFlow.js to use during serialization
      return 'L2';
  }
}


export default HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle the identification process
  const handleIdentify = () => {
    // Implement your identification logic here
  };
  const [image, setImage] = useState(null);
  const [isTfReady, setTfReady] = useState(false);
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [modelStatus, setModelStatus] = useState('Loading TensorFlow model...');
  const [modelerror, setmodelerror] = useState("NULL")
  const resetState = () => {
    setImage(null);
    setPredictions(null);
    setIsAnalyzing(false);
  };
  const POPULAR_PLANTS = [
    {
      id: '1',
      name: 'Scab',
      imageUri: require('../images/Scab.jpg'),
    },
    {
      id: '2',
      name: 'Brown Rot',
      imageUri: require('../images/brownrot.jpg'), // Replace with actual image path or require statement
    },
    {
      id: '3',
      name: 'Grape Black Rot',
      imageUri: require('../images/GrapeBlackRot.jpg'), // Replace with actual image path or require statement
    },
  ];
  useEffect(() => {
    (async () => {
      try {
        await tf.ready();
        setTfReady(true);
        tf.serialization.registerClass(CustomL2Regularizer);

        const modelJson = require('../models/model.json');
        const weights = require('../models/shared.bin');
      
        // const loadedModel = await tf.loadLayersModel('./assets/CustomModel3/model.json');
        const loadedModel = await tf.loadLayersModel(bundleResourceIO(modelJson, weights));

        setModel(loadedModel);
        setModelStatus('Model loaded successfully');
      } catch (error) {
        console.error("Error loading TensorFlow model:", error);
        setmodelerror(error.message)
        setModelStatus('Failed to load model');
      }
      getPermissionAsync();
    })();
  }, []);

  // const handlerSelectImage = async () => {
  //   try {
  //     setIsAnalyzing(true);
  //     let response = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       allowsEditing: true,
  //       quality: 1,
  //       aspect: [4, 3],
  //     });
  
  //     if (!response.cancelled) {
  //       const source = { uri: response.uri };
  //       setImage(source.uri);
  //       const imageTensor = await imageToTensor(source);
  //       const predictionTensor = await model.predict(imageTensor);
        
  //       // Convert the tensor to array
  //       const predictionArray = await predictionTensor.data();
  //       console.log(predictionArray)
  //       // Set the predictions state with the array
  //       setPredictions(predictionArray);
  
  //       setIsAnalyzing(false);
  //     }
  //   } catch (error) {
  //     console.error("Error in handlerSelectImage:", error);
  //     setIsAnalyzing(false);
  //   }
  // };
  const handleImageSelection = async () => {
    try {
      const cameraPermissionResult = await ImagePicker.requestCameraPermissionsAsync();
      const mediaLibraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (cameraPermissionResult.status !== 'granted' || mediaLibraryStatus.status !== 'granted') {
        alert('We need access to your camera and photos to proceed.');
        return;
      }

    
      let response;
      const action = await showImagePickerOptions(); // Implement this function based on your UI
      if (action === 'camera') {
        response = await ImagePicker.launchCameraAsync();
      } else {
        response = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
          aspect: [4, 3],
        });
      }

      if (!response.cancelled) {
        const source = { uri: response.uri };
        setImage(source.uri);
        const imageTensor = await imageToTensor(source);
        const predictionTensor = await model.predict(imageTensor);

        const predictionArray = await predictionTensor.data();
        setPredictions(predictionArray);
        console.log(predictionArray)
        setIsAnalyzing(false);
      }
    } catch (error) {
      console.error("Error in handleImageSelection:", error);
      setIsAnalyzing(false);
    }
  };

  const imageToTensor = async (source) => {
    const response = await fetch(source.uri, {}, { isBinary: true });
    const rawImageData = await response.arrayBuffer();
    const { width, height, data } = jpeg.decode(rawImageData, { useTArray: true });

    const buffer = new Uint8Array(width * height * 3);
    let offset = 0;
    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset];
      buffer[i + 1] = data[offset + 1];
      buffer[i + 2] = data[offset + 2];
      offset += 4;
    }

    const img = tf.tensor3d(buffer, [width, height, 3]);
    const resizedImg = tf.image.resizeBilinear(img, [128, 128]);
    return resizedImg.expandDims(0).toFloat().div(tf.scalar(255));
  };

  useEffect(() => {
    (async () => {
      const mediaLibraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      if (mediaLibraryStatus.status !== 'granted' || cameraStatus.status !== 'granted') {
        alert('We need access to your camera and photos to proceed.');
      }
    })();
  }, []);

 
  async function showImagePickerOptions() {
    return new Promise((resolve) => {
      Alert.alert(
        "Select Photo",
        "Choose where to pick your photo from:",
        [
          {
            text: "Camera",
            onPress: () => resolve('camera'),
          },
          {
            text: "Gallery",
            onPress: () => resolve('gallery'),
          },
          {
            text: "Cancel",
            onPress: () => resolve(null),
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
    });
  }

  return (
    <ScrollView style={styles.container}>
       <ScrollView horizontal={true} style={styles.carouselContainer} showsHorizontalScrollIndicator={false}>
        {POPULAR_PLANTS.map((plant) => (
          <View key={plant.id} style={styles.plantCard}>
            <Image source={plant.imageUri} style={styles.plantImage} />
            <Text style={styles.plantName}>{plant.name}</Text>
            {/* Additional details like user avatars and number added can go here */}
          </View>
        ))}
      </ScrollView>
      <View style={styles.welcomeContainer}>
        <Text style={styles.headerText}>Welcome to Leaf Care</Text>
        <Text style={styles.infoText}>
            AI-Powered Leaf Disease Detection App
        </Text>
      </View>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={model && !predictions && !isAnalyzing ? handleImageSelection : () => {
          if(predictions){
            resetState();
          }
        }}
        
      >
        <Text style={styles.buttonText}></Text>
        <MaterialCommunityIcons name="camera-plus" size={70} color="green" />
      </TouchableOpacity>

      <Output predictions={predictions} />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search plant by name"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      
    </ScrollView>
  );
};
    




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9edc9',
  },
  carouselContainer: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  plantCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
  },
  plantImage: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  plantName: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
  },
  identifyButton: {
    backgroundColor: '#4caf50',
    borderRadius: 50,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  identifyButtonText: {
    color: 'white',
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20, // Add margin at the top to place it below the buttons
    alignSelf: 'center', // Center the container
    width: '90%', // Increase the width to make the search box appear bigger
  },

  // Adjust the searchInput to fill the searchContainer
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25, // Increase the border radius for a more rounded appearance
    paddingVertical: 15, // Increase padding to make the input taller
    paddingHorizontal: 20,
    backgroundColor: 'white',
    fontSize: 18, // Increase font size for better visibility
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20, // Add padding at the bottom for scroll content
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#386641',
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#6a994e',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },
  image: {
    width: '90%',
    height: '100%',
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center', // Center the icon inside the button
    alignSelf: 'center', // Center the button in its container
    padding: 10, // Padding around the icon
    // Optional: If you want a shadow effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },

  cameraIcon: {
    fontSize: 60, // Large size for the camera icon
    color: '#386641', // Icon color, you can choose any color
  },
  infoSection: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#a7c957',
    borderRadius: 20,
    marginHorizontal: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#6a994e',
    textAlign: 'center',
  },
  image1: {
    
    marginTop: 50,
    width: 300,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 150, // Optional: if you want the image to be rounded
  },
  imageContainer: {
    //alignItems: 'center',
  },
 
  uploadedText: {
    
    fontSize: 20,
    marginTop: 10,
    color: 'green',
  },
  welcomeContainer: {
    padding: 20, // Adjust padding as needed
    alignItems: 'center', // Center the content
  },
  uploadedImage: {
    width: 200, // Adjust the size as needed
    height: 200, // Adjust the size as needed
    borderRadius: 10, // Optional: if you want the image to be rounded
    marginVertical: 10, // Add margin for spacing
    backgroundColor: 'white'
  },
});
