import { View, Text ,Image} from 'react-native'
import React from 'react'
import { HeroImg } from '../../assets'
import Gobutton from './Gobutton'
import *as Animatable from "react-native-animatable"
const HeroImage = () => {
  return (
    <View className="flex-1 relative items-center justify-center overflow-hidden">
      <Animatable.Image source={HeroImg}
        className=" object-contain w-full h-full"
        animation="fadeInUp"
        easing="ease-in-out"
        duration={2000}
      />
      <Gobutton/>
    </View>
  )
}

export default HeroImage