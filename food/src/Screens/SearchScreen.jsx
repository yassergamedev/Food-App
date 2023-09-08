import React, { useState } from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import SearchBar from '../Components/SearchBar'
import yelp from '../api/yelp'
export default function SearchScreen() {
  const [term, setTerm] =  useState("")
  const [results, setResults] = useState([])

  const searchApi = async ()=>{
   const response = await yelp.get('/search',{
    params:{
      term,
      limit : 50,
      location : 'san jose'
    }
   })
   setResults(response.data.businesses)
  }
  return (
    <View>
      
      <SearchBar 
      term={term}
      onTermChange={setTerm}
      onTermSubmit={searchApi}/>
    <Text>We Have Found {results.length} results </Text>
    
    </View>
  )
}
const styles = StyleSheet.create({
    
})