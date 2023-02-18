import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import PhotoScreen from '../screens/PhotoScreent';
import MainScreen from '../screens/MainScreen';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{ title: '1' }}
            />
            <Stack.Screen
                name="RacerProfileScreen"
                component={PhotoScreen}
                options={{ title: '2' }}
            />
        </Stack.Navigator>
    );
};