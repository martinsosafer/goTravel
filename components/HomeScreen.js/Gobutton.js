 import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import *as  Animatable from "react-native-animatable"
import { useNavigation } from "@react-navigation/native"
const Gobutton = () => {
  const navigation = useNavigation(); 
  return (
    <View className="absolute bottom-30 w-24 h-24 border-l-2 border-r-2 border-t-4  border-b-4 border-cyan-400 rounded-full items-center justify-center">
      <TouchableOpacity onPress={()=>navigation.navigate("Discover")}>

        <Animatable.View
          className="w-20 h-20 items-center justify-center rounded-full bg-cyan-400"
          animation="pulse" 
          easing="ease-in-out" 
          iterationCount="infinite"
        >
      <Text className="text-gray-50 text-[40px]">Go</Text>
      </Animatable.View>
      </TouchableOpacity>

    </View>
  )
}

export default Gobutton