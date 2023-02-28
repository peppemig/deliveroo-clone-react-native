import { View, Text, ScrollView } from 'react-native'
import { useEffect } from 'react'
import React from 'react'
import CategoryCard from './CategoryCard'
import useCategories from '../hooks/useCategories';
import ObjectID from 'bson-objectid';


const Categories = () => {

  const [{data, loading, error}, searchCategories] = useCategories();

  useEffect(() => {
    searchCategories()
  }, []);

  //console.log({data})
  //console.log({loading})
  //console.log({error})

  //if(data) {
    //const objectId1 = new ObjectID(data[0]._id);
    //const name1 = (data[0].name);
    //const objectId2 = new ObjectID(data[1]._id);
    //const name2 = (data[1].name);
    //const objectId3 = new ObjectID(data[2]._id);
    //const name3 = (data[2].name);
    //console.log(objectId1)
    //console.log(name1)
    //console.log(objectId2)
    //console.log(name2)
    //console.log(objectId3)
    //console.log(name3)
  //}

  if(data) return (
    <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}>
        {/* categories card*/}
        {data.map(data => (
          <CategoryCard key={data.name} imgUrl={data.imgUrl} title={data.name}/>
        ))}

    </ScrollView>
  )

}

export default Categories