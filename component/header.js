import { View, Text } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native';

const CustomHeader = ({title}) => {
  focused=useIsFocused()
   const labels = {
      Home: 'Home',
      Updates: 'Updates',
      Settings: 'Settings',
      Profilee: 'Profile',
    };
    const headerTitle = labels[title] || title;
  return (
    <View style={{marginLeft:15}}>
    
      <Text style={{fontWeight:'bold', fontSize:22, color:'white', textAlign:'center',marginLeft:50}}> {headerTitle}</Text>
    </View>
  )
}

export default CustomHeader