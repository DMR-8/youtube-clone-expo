import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from  '../components/Header'
import Card from '../components/Card'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
