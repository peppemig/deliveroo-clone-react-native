import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { PlusCircleIcon, MinusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../features/basketSlice';



const DishRow = ({
    id,
    key,
    name,
    imgUrl,
    short_description,
    price
}) => {

    const [isPressed, setIsPressed] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector(state => selectBasketItemsWithId(state, id))

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, key, name, imgUrl, short_description, price}))
    }
    const removeItemFromBasket = () => {
        if (!items.length > 0) return;
        dispatch(removeFromBasket({ id }))
    }

  return (
    <>
    <TouchableOpacity 
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>

        <View className="flex-row">
            <View className="flex-1 pr-2">
                <Text className="text-lg mb-1">{name}</Text>
                <Text className="text-gray-400">{short_description}</Text>
                <Text className="text-gray-400 mt-2">€{price}</Text>
            </View>

            <View>
                <Image style={{borderWidth: 1, borderColor: "#F3F3F4"}} className="h-20 w-20" source={{uri: imgUrl}} />
            </View>
            
        </View>
    </TouchableOpacity>

    {/* SE DISHROW VIENE PREMUTO AGGIUNGO BOTTONI + e - con quantità */}
    { isPressed && (
        <View className="bg-white px-4">
            <View className="flex-row items-center space-x-2 pb-3">
                <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
                    <MinusCircleIcon 
                        size={40} 
                        color={items.length > 0 ? "#00CCBB" : "gray"}/>
                </TouchableOpacity>

                <Text>{items.length}</Text>

                <TouchableOpacity onPress={addItemToBasket}>
                    <PlusCircleIcon size={40} color="#00CCBB"/>
                </TouchableOpacity>
            </View>
        </View>
    )}

    </>
  )
}

export default DishRow