import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import useFeaturedCategories from '../hooks/useFeaturedCategories';


const HomeScreen = () => {

  const [{data, loading, error}, searchFeaturedCategories] = useFeaturedCategories();

  useEffect(() => {
    searchFeaturedCategories()
  }, []);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  if (data) {
    console.log(data)
  }

  if(data) return (
    <SafeAreaView className="bg-white flex-1">

      {/* HEADER */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <View>
            <Image source={{uri: 'https://links.papareact.com/wru'}} className="h-7 w-7 bg-gray-300 p-4 rounded-full" />
          </View>

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB"></ChevronDownIcon>
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB"/>
      </View>

      {/* SEARCH */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-1 flex-row space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder='Restaurants and cuisines' keyboardType='default'/>
        </View>

        <AdjustmentsHorizontalIcon color="#00CCBB"/>
      </View>

      {/* BODY */}
      <ScrollView className="bg-gray-100">

        {/* categories */}
        <Categories />

        {/* categories card*/}
        {data.map(data => (
          <FeaturedRow key={data.name} id={data.id} title={data.name} desc={data.description}/>
        ))}
        
      </ScrollView>


    </SafeAreaView>
  )
}

export default HomeScreen