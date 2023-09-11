import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
export default function ResultDetails({result}) {
  return (<View style={styles.item}>
    {result.image_url ? <Image style={styles.image} source={{uri : result.image_url}}/> :
    <Text>No Image Available</Text>}
    
              <Text style={{fontWeight: 'bold',}}>{result.name}</Text>
              <View style={{flexDirection :'row'}}>
              <AntDesign name="star" size={17} color="black" />
              <Text style={styles.marginAdjuser}>{result.rating} ({result.review_count})</Text>
              </View>
  </View>
   
  )
}

const styles = StyleSheet.create({
    marginAdjuser:{
        marginLeft : 5
    },
    container: {
      flex: 1,
    },
    title: {
      marginLeft : 10,
      fontSize: 20,
      fontWeight: 'bold',
    },
   
    image:{
      height : 120, width : 200, borderRadius : 40
    }
  });
  