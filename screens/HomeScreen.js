import { View, Text,SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import GoSection from '../components/HomeScreen.js/GoSection'
import SloganSection from '../components/HomeScreen.js/SloganSection'
import HeroImage from '../components/HomeScreen.js/HeroImage'
import *as  Animatable from "react-native-animatable"


const HomeScreen = () => {

  const navigation = useNavigation();
  useLayoutEffect(() => (
    navigation.setOptions({
      headerShown:false,
    })
  ),[])
  return (
    <View className="mt-20 bg-white-100 flex-1 ">
      <GoSection />
      <SloganSection />
      <Animatable.View className="w-[440px] h-[440px] bg-blue-500 rounded-full absolute bottom-32 left-36"
       animation="fadeInRight"
        duration={1500}
      >
     
      </Animatable.View>
      <Animatable.View className="w-[440px] h-[440px] bg-orange-500 rounded-full absolute -bottom-28 -left-36"
       animation="fadeInLeft"
        duration={1500}
      >
     
      </Animatable.View>
      <HeroImage />
      
    </View>
  )
}

export default HomeScreen