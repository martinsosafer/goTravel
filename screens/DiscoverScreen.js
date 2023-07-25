import { View, ActivityIndicator } from 'react-native'
import React, { useState, useLayoutEffect, } from 'react'
import {Divider} from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
import DiscoverHeader from '../components/Discover/DiscoverHeader';
import SearchBar from '../components/Discover/SearchBar';
import Categories from '../components/Discover/Categories';
import { Attractions, Hotels, Restaurants } from '../assets';
import Cards from '../components/Discover/Cards';




const DiscoverScreen = () => {
   const navigation = useNavigation();
  useLayoutEffect(() => (
    navigation.setOptions({
      headerShown:false,
    })
  ),[])
  const [selectedCategory, setSelectedCategory] = useState("restaurants")
  const [isLoading, setisLoading] = useState(false)
  
    
  const [blLat, setBlLat] = useState(null);
  const [blLng, setBlLng] = useState(null);
  const [trLat, setTrLat] = useState(null);
  const [trLng, setTrLng] = useState(null);
 

  const handleSearch = (bl_latitude, bl_longitude, tr_latitude, tr_longitude) => {
  setBlLat(bl_latitude);
  setBlLng(bl_longitude);
  setTrLat(tr_latitude);
  setTrLng(tr_longitude);
  setisLoading(true);
};
 
  return (
    <View className=" mt-4 bg-white-100 flex-1 ">
      <DiscoverHeader />
      <SearchBar
        blLat={blLat}
        blLng={blLng}
        trLat={trLat}
        trLng={trLng}
        onSearch={handleSearch}/>
      <View className="flex-row items-center">

      <Categories
        key={"hotels"}
        title={"Hotels"}
        imgSrc={Hotels}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
      <Categories
        key={"atrractions"}
        title={"Attractions"}
        imgSrc={Attractions}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
      <Categories
        key={"restaurants"}
        title={"Restaurants"}
        imgSrc={Restaurants}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
      </View>
      <Divider width={0.5} style={{ marginVertical: 24, backgroundColor: '#3b82f6', }} />
      {isLoading ? <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large"color="#3b82f6"/>
      </View> :
       <View>

      <Cards  blLat={blLat} blLng={blLng} trLat={trLat} trLng={trLng}/>
      </View>
      }
     
    </View>
  )
}

export default DiscoverScreen