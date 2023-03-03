import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import useFeaturedRow from '../hooks/useFeaturedRow'


const FeaturedRow = ({id, title, desc}) => {

    const [{data, loading, error}, searchFeaturedRow] = useFeaturedRow();

    useEffect(() => {
      searchFeaturedRow(id)
    }, []);

  if (data) return (

    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB"/>
        </View>

        <Text className="text-xs px-4 text-gray-500">{desc}</Text>

        <ScrollView 
            horizontal
            contentContainerStyle={{paddingHorizontal: 15}}
            showsHorizontalScrollIndicator={false}
            className="pt-4 pb-4"
        >
            {/* restaurant cards */}

            {data.map(data => (
            <RestaurantCard 
                id={data.id}
                key={data.name} 
                title={data.restName}
                imgUrl={data.restImgUrl} 
                short_description={data.description}
                rating={data.rating}
                genre={data.category}
                address={data.address}
                reviews={data.reviews}
                lat={data.lat}
                long={data.lon}
                />
            ))}

        </ScrollView>
    </View>
  )
}

export default FeaturedRow