import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

// apikey=AIzaSyA2Fq36n33JpPhuzO_riZdsI2867qCHdm4
const SearchBar = ({ onSearch }) => {
  
   

  return (
    <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4  shadow-2xl shadow-blue-500">
      <GooglePlacesAutocomplete
        GooglePlacesDetailsQuery={{ fields: "geometry" }}
        //el geometry object es nececesario para obtener el lugar gracias a la longitud y latitud segun lo que buscamos con google places 
        placeholder='Search'
        fetchDetails={true}
        // 'details' is provided when fetchDetails = true
   onPress={(data, details = null) => {
  if (details && details.geometry && details.geometry.viewport) {
    const { lat: blLat, lng: blLng } = details.geometry.viewport.southwest;
    const { lat: trLat, lng: trLng } = details.geometry.viewport.northeast;
    onSearch(blLat, blLng, trLat, trLng);
  }
}}

      query={{
        key: 'AIzaSyA2Fq36n33JpPhuzO_riZdsI2867qCHdm4',
        language: 'en',
      }}
    />
    </View>
  )
}
// Object {
//   "northeast": Object {
//     "lat": 42.00950300443976,
//     "lng": -114.1312110028529,
//   },
//   "southwest": Object {
//     "lat": 32.52883196043871,
//     "lng": -124.4820030490848,
//   },
// }
export default SearchBar