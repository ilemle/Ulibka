import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import PhotoScreen from '../screens/PhotoScreent';
import MainScreen from '../screens/MainScreen';
import { BackButton } from '../components';
import { IPhoto } from '../types';

export type RootStackParamList = {
    MainScreen: undefined;
    PhotoScreen: { photo: IPhoto } | undefined
}
const Stack = createNativeStackNavigator();


export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{ title: 'Photos' }}
            />
            <Stack.Screen
                name="PhotoScreen"
                component={PhotoScreen}
                options={{
                    title: 'Photo',
                    headerLeft: () => (
                        <BackButton />)
                }}
            />
        </Stack.Navigator>
    );
};