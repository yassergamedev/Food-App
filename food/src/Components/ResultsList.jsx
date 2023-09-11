import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ResultDetails from './ResultDetails';
import { withNavigation } from 'react-navigation';
const ResultsList = ({ title, results, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
      style={{backgroundColor : 'white'}}
      horizontal
        keyExtractor={result => result.id}
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>{navigation.navigate('result',{id: item.id} )}}>
            <ResultDetails result={item}/>
            </TouchableOpacity>);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginLeft : 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image:{
    height : 120, width : 200, borderRadius : 40
  }
});

export default withNavigation(ResultsList);
