import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CardsContainer from './CardsContainer';
import { NotFound } from '../../assets';
import { getPlacesData } from '../../api';

const Cards = ({ blLat, blLng, trLat, trLng }) => {
  const [hasData, setHasData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    console.log('blLat:', blLat);
    console.log('blLng:', blLng);
    console.log('trLat:', trLat);
    console.log('trLng:', trLng);
    getPlacesData(blLat, blLng, trLat, trLng)
      .then((data) => {
        setMainData(data);
        console.log('Main data:', data); // Log the updated value of mainData
        setHasData(data.length > 0); // Update hasData based on the received data
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error retrieving data:', error);
        setHasData(false);
        setIsLoading(false);
      });
  }, [blLat, blLng, trLat, trLng]);

  // useEffect(() => {
  //   console.log('Main data:', mainData);
  // }, [mainData]);


  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator className="text-blue-500 items-center justify-center mt-[500px]" size="large" />
      </View>
    );
  }

  return (
    <View>
      <View className="flex-row items-center justify-between px-4">
        <Text className="text-blue-500 text-2xl font-bold">Top Tips</Text>
        <TouchableOpacity className="flex-row items-center justify-center space-x-2">
          <Text className="text-blue-400 text-xl font-bold">Explore</Text>
          <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
        </TouchableOpacity>
      </View>

      {hasData ? (
        <ScrollView className="px-4 mt-8 ">
          <View className="flex-row items-center justify-evenly flex-wrap  ">
            {mainData?.map((data, i) => (
              <CardsContainer
                key={data?.id || i}
                imageSrc={data?.photo?.images.medium?.url || 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'}
                title={data?.name}
                location={data?.location_string}
                data={data}
              />
            ))}
          </View>
        </ScrollView>
      ) : (
        <View className="flex justify-center items-center">
          <Image source={NotFound} className="w-48 h-48" />
          <Text>No data available</Text>
        </View>
      )}
    </View>
  );
};

export default Cards;
