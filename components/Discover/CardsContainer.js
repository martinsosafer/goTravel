import { Text, TouchableOpacity,Image, View } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"
import { FontAwesome } from '@expo/vector-icons';
const CardsContainer = ({ imageSrc, title, location, data }) => {
  const navigation = useNavigation();
  // console.log("imageSrc:", imageSrc);
  // console.log("title:", title);
  // console.log("location:", location);
  console.log("data:", data);


  return (
    <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-3 shadow-md bg-white w-[182px] mb-4"
    onPress={()=>navigation.navigate("SelectedScreen",{params: data})}
    >
      <Image
        source={{ uri: imageSrc }}
        className="w-full h-40 rounded-md "
      />
      <Text className="text-blue-400 text-[18px] font-bold">{title?.length > 14 ? `${title.slice(0, 13)}...` : title}
      {/* si el titulo es mayor a 13characters lo corta y devuelve 3 puntos */}
      </Text>
      <View className="flex-row items-center space-x-1">
          <FontAwesome name="map-marker" size={20} color="#FF0000" />
            <Text className="text-blue-300 text-[14px] font-bold">{location?.length > 13 ? `${location.slice(0, 13)}...` : location}
      </Text>
      </View>
    </TouchableOpacity>
    
  )
}

export default CardsContainer