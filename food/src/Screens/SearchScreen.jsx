import React, { useEffect, useState } from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import SearchBar from '../Components/SearchBar'
import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import ResultsList from '../Components/ResultsList'
export default function SearchScreen() {
  const [term, setTerm] =  useState("")
  const [searchApi, results] = useResults()
  return (
    <View>
      
      <SearchBar 
      term={term}
      onTermChange={setTerm}
      onTermSubmit={searchApi}/>
    <Text>We Have Found {results.length} results </Text>
    <ResultsList title='Effective Price'/>
    <ResultsList title='A bit Pricier'/>
    <ResultsList title='Expensive'/>
    </View>
  )
}
const styles = StyleSheet.create({
    
})