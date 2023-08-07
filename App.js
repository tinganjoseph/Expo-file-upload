
import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity,
  ScrollView, StatusBar, Image, Alert, ActivityIndicator
} from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import * as ImagePicker from 'expo-image-picker';
import {
  Ionicons
} from "@expo/vector-icons";
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
      <View className="flex-1 bg-[#ffffff]">
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <View className="w-full h-10 bg-white" />
        <View className="flex-row space-x-2 ">
          <View className="flex-row">
            <TouchableOpacity >
              <View>
                <Text className="p-2 text-base font-bold">Image Picker</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex-grow"></View>
        </View>
        <View className="justify-center p-2 mt-3 ">
                <View className="mt-8 items-center">
                    <Text className="text-[#000000] font-bold mx-5 text-[15px]">
                        File/Image Uploading ..
                    </Text>
                    <Text className="text-[#000000] font-normal  text-xs mx-5  mb-8">
                        Upload Image from Gallery
                    </Text>
                </View>


        </View>


      </View>
    </TailwindProvider>

  )
}

export default App