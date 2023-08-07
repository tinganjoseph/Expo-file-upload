
import React, { useState, useEffect } from 'react';
import {
    View, Text, TouchableOpacity,
    ScrollView, StatusBar, Image,Alert,ActivityIndicator
} from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import * as ImagePicker from 'expo-image-picker';
import {
    Ionicons} from "@expo/vector-icons";
const App = () => {
  const [CardImage, SetCardImage] = useState(null);

  const handleImagePicker = async (imageType) => {
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
    });

    if (!result.canceled) {
      SetCardImage(result.assets[0].uri); 
    }
};

  return (
    <TailwindProvider>
      <View>
     
    </View>
    </TailwindProvider>
   
  )
}

export default App