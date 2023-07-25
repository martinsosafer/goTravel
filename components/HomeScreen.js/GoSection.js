import { View, Text } from 'react-native'
import React from 'react'

const GoSection = () => {
  return (
    <View className="flex-row items-center space-x-2 mb-2 px-6">
      <View className="w-16 h-16 bg-blue-500 rounded-full items-center justify-center">
      <Text className="text-orange-500 text-3xl font-semibold">Go</Text>

      </View>
      <Text className="text-blue-500 text-3xl font-semibold">Travel</Text>
    </View>
  )
}

export default GoSection