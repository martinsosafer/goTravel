import { View, Text, Image } from 'react-native'
import React from 'react'
import { Avatar } from '../../assets'
const DiscoverHeader = () => {
  return (
    <View className="flex-row items-center justify-between px-4 py-5">

    <View>
      <Text className="text-[40px] text-blue-500 font-bold">Discover</Text>
        <Text className="text-[36px] text-blue-500">The Beauty today</Text>
    </View>
      <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center">
        <Image source={Avatar} className="h-full w-full rounded-md object-cover"/>
      </View>
    </View>
  )
}

export default DiscoverHeader