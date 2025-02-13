import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Home = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home</Text>
            <Pressable onPress={() => router.push('/app1/search/profile')} style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
                <Text>Go to Profile</Text>
            </Pressable>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})