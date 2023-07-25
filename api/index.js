import axios from "axios"

export const getPlacesData = async (bl_lat,bl_lng,tr_lat, tr_lng) => {
  
  try {
   const {data:{data}}= await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`, { params: {
    bl_latitude: bl_lat ? bl_lat:'32.52883196043871',
    tr_latitude: tr_lat ? tr_lat:'42.00950300443976',
    bl_longitude: bl_lng ? bl_lng: '-124.4820030490848',
    tr_longitude:  tr_lng ? tr_lng:'-114.1312110028529',
    restaurant_tagcategory_standalone: '10591',
    restaurant_tagcategory: '10591',
    limit: '12',
    currency: 'USD',
    open_now: 'false',
    lunit: 'km',
    lang: 'en_US'
    },
      headers: {
    'X-RapidAPI-Key': 'f830aeee2fmsh93f04c1165483efp18c482jsncf797965d9a2',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
    },
    )
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}