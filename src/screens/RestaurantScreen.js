import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, StarIcon} from 'react-native-heroicons/solid' 
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import useDishes from '../hooks/useDishes';
import DishRow from '../components/DishRow';



const RestaurantScreen = () => {
    const navigation = useNavigation();

    const [{data, loading, error}, searchDishes] = useDishes();

    useEffect(() => {
        searchDishes(id)
    }, []);

    // HIDE TOP NAV BAR
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    // HERE IM USING THE 'useRoute' TO GET THE PARAMS THAT IM PASSING FROM 'RestaurantCard'
    const {params:
    {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
        reviews
    }} = useRoute();


  if (data) return (
    <ScrollView>
        <View className="relative shadow">
            <Image className="w-full h-56 bg-gray-300 p-4" source={{uri: imgUrl}} />

            <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-5 bg-gray-100 rounded-full">
                <ArrowLeftIcon height={30} width={30} color="#00CCBB"/>
            </TouchableOpacity>

            <View className="bg-white">

                <View className="px-4 pt-4">
                    <Text className="text-3xl font-bold">{title}</Text>

                    <View className="flex-row space-x-2 my-1">
                        <View className="flex-row items-center space-x-1">
                            <StarIcon color="green" opacity={0.5} size={22}/>
                            <Text className="text-xs">
                                <Text className="text-green-500">{rating} · {reviews} recensioni</Text>
                            </Text>
                            <MapPinIcon color="gray" opacity={0.5} size={22}/>
                            <Text className="text-xs">
                                <Text className="text-gray-500">{address}</Text>
                            </Text>
                        </View>
                    </View>
                    
                    <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                </View>

                <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y-4 border-gray-300">
                    <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
                    <Text className="pl-2 flex-1 text-md font-bold">
                        Have a food allergy?
                    </Text>
                    <ChevronRightIcon color="#00CCBB" />
                </TouchableOpacity>
            </View>

        </View>

        <View>
            <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
        </View>

        {data.map(data => (
            <DishRow 
                id={data.id}
                key={data.id} 
                name={data.name}
                imgUrl={data.imgUrl} 
                short_description={data.description}
                price={data.price}
                />
            ))}

    </ScrollView>
  )
}

export default RestaurantScreen