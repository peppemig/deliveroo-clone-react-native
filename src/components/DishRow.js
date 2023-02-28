import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const DishRow = ({
    id,
    key,
    name,
    imgUrl,
    short_description,
    price
}) => {
  return (
    <TouchableOpacity className="bg-white border p-4 border-gray-200">
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
  )
}

export default DishRow