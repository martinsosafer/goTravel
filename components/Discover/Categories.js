import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Categories = ({title,imgSrc,selectedCategory,setSelectedCategory}) => {
 
  return (
    <TouchableOpacity className="flex-row items-center justify-center px-5 mt-3 "
    onPress={() => setSelectedCategory(title.toLowerCase())}
    >
      <View className={`w-24 h-24 shadow-2xl shadow-blue-500 rounded-full items-center ${selectedCategory=== title.toLowerCase()?"bg-blue-400":""}`}>
        <Image
          source={imgSrc}
          className="w-full h-full object-contain"
        />
      <Text className="text-blue-500 text-[16px] font-semibold">{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Categories