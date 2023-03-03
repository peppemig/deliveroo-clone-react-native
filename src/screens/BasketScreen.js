import { View, Text, TouchableOpacity, Image, ScrollView, Button } from 'react-native'
import React, { memo, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/solid';

const BasketScreen = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();
    const basketTotal = useSelector(selectBasketTotal);
    let deliveryFee = 5.99;

    //group restaurants for basket screen
    useMemo(() => {
      const groupedItems = items.reduce((results, item) => {
        (results[item.id] = results[item.id] || []).push(item)
        return results;
      }, {});

      setGroupedItemsInBasket(groupedItems)
    }, [items]);

    //console.log(groupedItemsInBasket);
    
    //console.log(basketTotal)

    //if (basketTotal === 0) {navigation.goBack()};

    if (basketTotal===0) {deliveryFee = 0.00};

  return (

    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">

        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>
          </View>

          <TouchableOpacity onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5">
            <XCircleIcon color="#00CCBB" height={50} width={50}/>
          </TouchableOpacity>

        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
            <Image source={{uri: "https://links.papareact.com/wru"}}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>
            <Text className="flex-1">Deliver in 50-75 min</Text>
            <TouchableOpacity>
              <Text className="text-[#00CCBB]">Change</Text>
            </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
           {Object.entries(groupedItemsInBasket).map(([key, items]) =>
              <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                <Text className="text-[#00CCBB]">{items.length} x</Text>
                <Image source={{uri: items[0].imgUrl}}
                className="h-12 w-12 rounded-full"/>
                <Text className="flex-1">{items[0].name}</Text>
                <Text className="text-gray-600">€{items[0].price}</Text>
                
                <TouchableOpacity>
                  <Text className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({id: key}))}>
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            )}
        </ScrollView>

        <View className=" bg-white mt-5 space-y-3">

          <View className="flex-row pr-6 pl-6 pt-5">
            <Text className="text-gray-400 flex-1">Subtotal</Text>
            <Text className="text-gray-400">€{basketTotal}</Text>
          </View>

          <View className="flex-row pr-6 pl-6">
            <Text className="flex-1 text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">€{deliveryFee}</Text>
          </View>

          <View className="flex-row pr-6 pl-6">
            <Text className="text-black flex-1">Order Total</Text>
            <Text className="font-bold">€{(basketTotal+deliveryFee).toFixed(2)}</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Preparing")} className="pt-4 pb-4 px-4">
            <View style={{height: 50}} className="items-center justify-center bg-[#00CCBB] rounded-md">
            <Text className="text-white font-bold text-lg">Place Order</Text>
            </View>
          </TouchableOpacity>

          
        </View>

      </View>
    </SafeAreaView>
  )
}

export default BasketScreen