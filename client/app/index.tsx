import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '@/components/AppsCard/Card';
import { Colors } from '@/Color';

const HomePage = () => {
  const image = require('@/assets/images/Chat.png')
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>DAS's Universe</Text>
      <View style={styles.cardContainer}>
        <Card title="App 1" appRoute="/app1" imageSource={image} />
        <Card title="App 2" appRoute="/app2" imageSource={image} />
        <Card title="App 3" appRoute="/app3" imageSource={image} />
        <Card title="App 4" appRoute="/app4" imageSource={image} />
        <Card title="App 5" appRoute="/app5" imageSource={image} />
        <Card title="App 6" appRoute="/app6" imageSource={image} />
        <Card title="App 7" appRoute="/app7" imageSource={image} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundLight, // Light background
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
    color: Colors.textPrimary, // Dark green text color
    letterSpacing: 1.2,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
});

export default HomePage;
