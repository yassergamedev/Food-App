import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const ResultsList = ({ title, results }) => {
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
            <View style={styles.item}>
                <Image style={styles.image} source={{uri : item.image_url}}/>
              <Text style={{fontWeight: 'bold',}}>{item.name}</Text>
            </View>
          );
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

export default ResultsList;
