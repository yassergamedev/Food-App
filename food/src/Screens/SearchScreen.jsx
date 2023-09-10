import React, { useEffect, useState } from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import SearchBar from '../Components/SearchBar'
import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import ResultsList from '../Components/ResultsList'
export default function SearchScreen() {
  const [term, setTerm] =  useState("")
  const [searchApi, results] = useResults()


  const filterResultsByPrice = (price)=>{

   return results.filter(result=>{
      return result.price === price
    })
  }

  return (
    <View style={{flex : 1}}>
      
      <SearchBar 
      term={term}
      onTermChange={setTerm}
      onTermSubmit={searchApi}/>
    <Text>We Have Found {results.length} results </Text>
    <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
    <ResultsList results={filterResultsByPrice('$$')} title="A bit Pricier" />
    <ResultsList results={filterResultsByPrice('$$$')} title="Expensive" />
    </View>
  )
}
const styles = StyleSheet.create({
    
})