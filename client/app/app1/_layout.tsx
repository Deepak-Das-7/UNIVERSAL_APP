import { StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const screens: { name: string; icon: keyof typeof MaterialIcons.glyphMap; title: string }[] = [
    { name: 'home', icon: 'home', title: 'Home' },
    { name: 'search', icon: 'search', title: 'Search' },
    { name: 'profile', icon: 'person', title: 'Profile' }
];

const RootLayout = () => (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
        {screens.map(({ name, icon, title }) => (
            <Tabs.Screen
                key={name}
                name={name}
                
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name={icon} size={35} color={color} />,
                    title,
                    headerShown:false
                }}
            />
        ))}
    </Tabs>
);

export default RootLayout;

const styles = StyleSheet.create({});
