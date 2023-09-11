import React, { useEffect, useState } from 'react'
import {View, Text, Image, StyleSheet, FlatList} from 'react-native'
import yelp from '../api/yelp'
export default function ResultsShowScreen({navigation}) {
    const [res, setRes] = useState({})
    const id = navigation.getParam('id')

    const getResult = async (id)=>{
        const result  = await yelp.get(`/${id}`);
        setRes(result.data)
    }
    useEffect(()=>{
        getResult(id)
    },[])

if(!res)
{return null}

  return (
 <>
 <FlatList data={res.photos}
 keyExtractor={(photo) => photo}
 renderItem={({item})=>{
   return <Image source={{uri : item}} style={styles.image}/> 
    
 }}/>
 </>
  )
}
const styles = StyleSheet.create({
    image : {
        height : 250,
        width : 250
    }
})
