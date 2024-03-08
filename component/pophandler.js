export default Pophandler =  ({visible, plant}) => {
    // Check if plant is defined before accessing its properties
    if (!plant) {
      return null; // Render nothing if plant is undefined
    }
  
    return (
      <Modal transparent ={true} visible={visible}>
        <View style={styles.modelbackground}>
          <View style={styles.modelcontainer}>
            <ScrollView>
              <TouchableOpacity onPress={()=>setpop(false)}>
                  <Text style={styles.closebutton}></Text>
                  <MaterialCommunityIcons name="close-octagon-outline" size={50} color="black" />      
              </TouchableOpacity>
             
              <View>
                <Text style={styles.plantHeadings}>Symptoms: </Text>
                <Text style={styles.plantText}>{plant.symptoms}</Text>
                <Text style={styles.plantHeadings}>Causes: </Text>
                <Text style={styles.plantText}>{plant.causes}</Text>
                <Text style={styles.plantHeadings}>Remedies: </Text>
                <Text style={styles.plantText}>{plant.remedies}</Text> 
              </View> 
                     
            </ScrollView> 
          </View>
        </View>
      </Modal>
    );
  };