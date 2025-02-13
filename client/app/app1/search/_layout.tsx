import { StyleSheet } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const SecondLayout = () => (
  <Stack>
    {/* <Stack screenOptions={{ headerShown: false }}> */}
    <Stack.Screen name="index" options={{ title: 'Home' }} />
    <Stack.Screen name="profile" options={{ title: 'Profile' }} />
  </Stack>
);

export default SecondLayout;

const styles = StyleSheet.create({});
