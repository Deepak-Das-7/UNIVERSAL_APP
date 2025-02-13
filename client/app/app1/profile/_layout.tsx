import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const SecondLayout = () => {
  return (
    <Stack>
          <Stack.Screen name="index" />
          <Stack.Screen name="profile" /> 
    </Stack>
  )
}

export default SecondLayout

const styles = StyleSheet.create({})