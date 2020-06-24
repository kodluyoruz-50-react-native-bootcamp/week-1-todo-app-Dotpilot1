import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
        <View>
             <Text style={styles.title}>My ToDo List</Text>
       </View>
       <View>
             <Image />
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});