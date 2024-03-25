// React and React Native core imports
import React, { useState, useEffect } from 'react';
import { StyleSheet, 
View, 
Text, 
TouchableOpacity, 
Modal, 
Image, 
ScrollView, 
ActivityIndicator, 
TextInput, 
Alert, 
KeyboardAvoidingView, 
Platform, 
ImageBackground,FlatList } from 'react-native';
import Background from '../component/background'; // Import the Background component
// Third-party imports for icons and TensorFlow.js
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';

// Expo permissions and image picker for handling media
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

// Additional utilities
import * as jpeg from 'jpeg-js';

// Local imports from your project structure
import Output from '../Output';
import POPULAR_PLANTS from '../src/api/diseases';
import LoadingScreen from '../component/LoadingAnimation';
import Pophandler from '../component/pophandler';
// Note: Ensure you have the necessary packages installed:
// For icons, TensorFlow.js, permissions, and image picker:
// expo install @expo/vector-icons expo-permissions expo-image-picker
// npm install @tensorflow/tfjs @tensorflow/tfjs-react-native jpeg-js


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


export default HomeScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [image, setImage] = useState(null);
  const [isTfReady, setTfReady] = useState(false);
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [modelStatus, setModelStatus] = useState('Loading TensorFlow model...');
  const [modelerror, setmodelerror] = useState("NULL")
  const [selectedPlant, setSelectedPlant] = useState(false);
  const [pop, setpop] = useState(false);
  const [name, setname] = useState();
  const [val, setval] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [displaySuggestions, setDisplaySuggestions] = useState([]);
  const [suggestions, setsuggestions] = useState([]);
  useEffect(() => {
    (async () => {
      setIsLoading(true); // Start loading
      try {
        await tf.ready();
        setTfReady(true);
        tf.serialization.registerClass(CustomL2Regularizer);
  
        const modelJson = require('../models/model.json');
        const weights = require('../models/shared.bin');
      
        const loadedModel = await tf.loadLayersModel(bundleResourceIO(modelJson, weights));
        setModel(loadedModel);
        setModelStatus('Model loaded successfully');
      } catch (error) {
        console.error("Error loading TensorFlow model:", error);
        setmodelerror(error.message)
        setModelStatus('Failed to load model');
      }
      setIsLoading(false); // End loading once everything is done
      await getPermissionAsync(); // Assume this is an async operation
    })();
  }, []);
  
  useEffect(() => {
    (async () => {
      const mediaLibraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      if (mediaLibraryStatus.status !== 'granted' || cameraStatus.status !== 'granted') {
        alert('We need access to your camera and photos to proceed.');
      }
    })();
  }, []);

  useEffect(() => {
    setSearchQuery(''); // This will clear the input field
  }, []);

  useEffect(() => {
      const allNames = POPULAR_PLANTS.map(plant => plant.name);
      const uniqueNames = [...new Set(allNames)]; // Convert array to set to remove duplicates
      setsuggestions(uniqueNames);
    }, []);
 
  
  const resetState = () => {
    setImage(null);
    setPredictions(null);
    setIsAnalyzing(false);
  };
  
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
  const handleSubmitEditing = () => {
      const foundplant = POPULAR_PLANTS.find(p => p.name.toLowerCase() == searchQuery.toLowerCase());
      
      if (foundplant) {
        setval(foundplant.id);
      } else {
        setval(0)
        console.log("No matching plant found.");
      }
    };  

  
  
  const updateSearchQuery = (input) => {
    
    if (input.length > 2) { // Only show suggestions if the input length is greater than 2
      const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(input.toLowerCase())
      );
      setDisplaySuggestions(filteredSuggestions);
    } else {
      setDisplaySuggestions([]);
    }
  };
    const renderPlantCard = (plant) => {
      return (
        <TouchableOpacity
          key={plant.id}
          onPress={() => navigation.navigate('Disease Details', { val: plant.id })}
          style={styles.cardContainer}
        >
          <ImageBackground source={plant.imageUri} style={styles.cardImage} imageStyle={styles.cardImageInner}>
            <View style={styles.cardOverlay}>
              <Text style={styles.cardTitle}>{plant.name}</Text>
              {/* You can add more details or actions here */}
            </View>
          </ImageBackground>
        </TouchableOpacity>
      );
    };
  return (
    
    isLoading ? 
    <LoadingScreen/> :
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 80}
    >
    <ImageBackground
      source={require('../assets/back1.jpg')}
      style={styles.background}
    >
    <ScrollView style={styles.fullScreen}>
    
    <ScrollView style={styles.container}>
    <ScrollView horizontal={true} style={styles.carouselContainer} showsHorizontalScrollIndicator={false}>
      {POPULAR_PLANTS.map(renderPlantCard)}
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
            onChangeText={(e) => { setSearchQuery(e); updateSearchQuery(e); }}
            onSubmitEditing={() =>{ handleSubmitEditing}}
          />
        
        <TouchableOpacity 
              onPress={()=> { handleSubmitEditing; 
              navigation.navigate('Disease Details',
                  { val: val } )}} 
              style={styles.searchButton}>
          <MaterialIcons name="search" size={25} color="#6a994e" />
        </TouchableOpacity>
        
      </View>
        <View style={styles.liist}>
            <FlatList
              data={displaySuggestions}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => { setSearchQuery(item); handleSubmitEditing(); }}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
    </ScrollView>
    </ScrollView>
    </ImageBackground>

    </KeyboardAvoidingView>
    //</Background>
  );
};
    




const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
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
  plantHeadings: {
    fontWeight: 'bold',
    fontSize:20,
    paddingVertical: 5,
  },
  plantText: {
    textAlign: 'left',
    //paddingVertical: 5,
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
  liist:{
    flexDirection: 'row',
      paddingHorizontal: 20,
      marginTop: 20, // Add margin at the top to place it below the buttons
      alignSelf: 'center', // Center the container
      width: '90%',
      marginLeft:200,
  },
  // Adjust the searchInput to fill the searchContainer
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    fontSize: 18,
    marginRight: 15, // Added margin here
  },
  searchButton: {
    marginLeft: 10,
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#d9ed92',
    borderRadius: 25, // Make it circular
    elevation: 2, // Optional for shadow on Android
    // Add shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
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
  
  modelbackground:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center',
  },
  modelcontainer:{
    width:'80%',
    height:'80%',
    backgroundColor:'white',
    paddingHorizontal:20,
    //paddingVertical:30,
    borderRadius:20,
    elevation:20,
  },
  closebutton:{
    // marginTop:"0%",
    // alignItems:'center',
    color:'Black',
    fontWeight: 'bold',
    fontSize:20,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  cardContainer: {
    width: 180, // fixed width for the card
    height: 220, // fixed height for the card
    borderRadius: 15, // rounded corners
    overflow: 'hidden', // this will hide the image behind the border radius
    marginHorizontal: 10, // space between cards
    shadowColor: '#000', // shadow for card
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, // shadow for Android
    borderColor: '#FFFFFF',
    borderWidth:2,
  },
  cardImage: {
    flex: 1, // image will fill the container
    justifyContent: 'flex-end', // align the overlay text to the bottom
  },
  cardImageInner: {
    borderRadius: 15, // ensure the inner image also has rounded corners
  },
  cardOverlay: {
    backgroundColor: '#FFFFFF', // semi-transparent overlay for text readability
    padding: 10, // padding inside the overlay
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#000000', // white color for the text
    fontSize: 18, // larger font size for the title
    textAlign: 'center'
  },
});