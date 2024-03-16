import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import logoImage from '../assets/logo.png';


import CustomButton from '../component/CustomButton';
import InputField from '../component/InputField';

const LoginScreen = () => {
    return (
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <View style={{paddingHorizontal: 25}}>
          <View style={{alignItems: 'center'}}>
            {/* Using an Image component instead of SVG */}
            <Image
              source={logoImage}
              style={{height: 300, width: 300}}
            />
          </View>
  
          <Text
            style={{
              fontSize: 28,
              fontWeight: '500',
              color: '#333',
              marginBottom: 30,
            }}>
            Login
          </Text>
  
          <InputField
            label={'Email ID'}
            icon={
              <MaterialIcons
                name="alternate-email"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            }
            keyboardType="email-address"
          />
  
          <InputField
            label={'Password'}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            }
            inputType="password"
            fieldButtonLabel={"Forgot?"}
            fieldButtonFunction={() => {}}
          />
          
          <CustomButton label={"Login"} onPress={() => {}} />

  
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 30,
            }}>
            {/* Social Media Login Buttons - Consider using react-native-vector-icons if specific icons are needed */}
          </View>
  
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
            }}>
            <Text>New to the app?</Text>
            <TouchableOpacity onPress={() => { /* navigation.navigate('Register') */ }}>
              <Text style={{color: '#008000', fontWeight: '700'}}> Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };

export default LoginScreen;