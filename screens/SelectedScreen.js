import { View, Text, ScrollView,Image,TouchableOpacity } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
const SelectedScreen = ({route}) => {

  const navigation = useNavigation();
  const data = route?.params?.params;
   useLayoutEffect(() => (
    navigation.setOptions({
      headerShown:false,
    })
  ), [])
   
  return (
  
      <ScrollView className="flex-1 px-4 py-6 bg-white relative mt-4">
      <View className="relative bg-white shadow-lg shadow-blue-500">
        
        <Image
        source={{uri:data?.photo?.images.large?.url || 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'}}
        className="w-full h-72 object-cover  rounded-2xl"/>
        <View className="absolute flex-row inset-x-0 justify-between px-6 mt-4">
          <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-white"
          onPress={()=>navigation.navigate("Discover")}
          >
            <FontAwesome5 name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
           <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-blue-400">
            <Ionicons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
         <View className="absolute flex-row bottom-5 inset-x-0 justify-between px-6 ">
          <View className="flex-row space-x-2 items-center bg-green-500 rounded-md">
          
            <Text className="text-[32px] font-bold text-gray-100 shadow-2xl shadow-black">
            {data?.price}
            </Text>
          </View>
          <View className="px-2 py-1 rounded-md bg-teal-200 justify-center items-center">
          <Text className="text-black font-semibold">{data?.open_now_text}</Text>
        </View>
        </View>
        
      </View>
      <View className="mt-6">
        <Text className="text-blue-500 text-[24px] font-bold">{data?.name}</Text>
        <View className="flex-row items-center space-x-2 mt-2">
          <FontAwesome name="map-marker" size={20} color="#FF0000" />
          <Text className="text-blue-300 text-[14px] font-bold">{data?.location_string}</Text>
        </View>
      </View>

      <View className="mt-4 flex-row items-center justify-between">
        {/* Algunos restos no tiene rating!!! */}
        {data?.rating && (
          <View className="flex-row items-center space-x-2">
            <View className="w-12 h-12 rounded-2xl bg-blue-400 items-center justify-center shadow-md">
              <FontAwesome name='star' size={24} color="#FFFF00" />
              </View>
              <View>
              <Text className="text-gray-400">{data?.rating}</Text>
              <Text className="text-yellow-400 font-bold">Rating</Text>
                </View>
            </View>
           

        )}
        {data?.price && (
          <View className="flex-row items-center space-x-2">
            <View className="w-12 h-12 rounded-2xl bg-green-400 items-center justify-center shadow-md">
              <MaterialIcons name='attach-money' size={24} color="#FFF" />
              </View>
              <View>
              <Text className="text-gray-400">{data?.price}</Text>
              <Text className="text-green-400 font-bold">Price Level</Text>
                </View>
            </View>
           

        )}
         {data?.bearing && (
          <View className="flex-row items-center space-x-2">
            <View className="w-12 h-12 rounded-2xl bg-gray-500 items-center justify-center shadow-md">
              <FontAwesome5 name="map-signs" size={24} color="red"/>
              </View>
              <View>
              <Text className="text-gray-400">{data?.bearing}</Text>
              <Text className="text-red-400 font-bold">Bearing</Text>
                </View>
            </View>
           

        )}
      </View>
      {data?.description && (
        <Text className="mt-4 tracking-wide text-[16px] font-semibold text-gray-400">
          {data?.description}
        </Text>
      )}
         {data?.cuisine && (
        <View className="flex-row gap-2 items-center justify-start flex-wrap mt-1">
          {data?.cuisine.map((n) => (
            <TouchableOpacity
              key={n.key}
              className="px-2 py-1 rounded-md bg-blue-300"
          >
              <Text>{n.name}</Text>
            </TouchableOpacity>
          ))}
          
       </View>
      )}
      <View className="space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
        {data?.phone && (
          <View className=" items-center flex-row space-x-5">
            <FontAwesome name="phone" size={24} color="#60A5D9" />
            <Text className="text-lg">{data?.phone}</Text>
          </View>
        )}
          {data?.email && (
          <View className=" items-center flex-row space-x-5">
            <FontAwesome name="envelope" size={24} color="#60A5D9" />
            <Text className="text-lg">{data?.email}</Text>
          </View>
        )}
          {data?.address && (
          <View className=" items-center flex-row space-x-5">
            <FontAwesome name="map-pin" size={24} color="#60A5D9" />
            <Text className="text-lg">{data?.address}</Text>
          </View>
        )}
        
      </View>
        <View className="mt-4 px-4 py-4 rounded-lg bg-blue-600 items-center justify-center mb-12">
          <Text className="text-3xl font-semibold uppercase tracking-wider text-white">Book Now</Text>
        </View>
      </ScrollView>
  
  )
}

export default SelectedScreen