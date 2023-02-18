
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    useColorScheme,
    View,
    Text,
} from 'react-native'
import Screen from '../components/Screen'
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { Racer } from '../types';
import { RootState } from '../store/redux';
import { photosRequest } from '../store/redux/photos';


const MainScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const dispatch = useDispatch()
   
    const photos: Racer[] = useSelector((state: RootState) => state.photosReducer.photos)
   
    const racersFetching: boolean = useSelector((state: RootState) => state.photosReducer.photos_fetching)

    useEffect(() => {
        dispatch(photosRequest())
    },[])
    
    return (
        <Screen>
            <TouchableOpacity
                style={{ width: 200, height: 200, backgroundColor: 'green' }}
                onPress={() => dispatch(photosRequest())}>
                <Text>
                    1234
                </Text>
            </TouchableOpacity>

        </Screen>
    )

};

const styles = StyleSheet.create({

});

export default MainScreen;
