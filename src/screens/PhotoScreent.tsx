
import React, { useState } from 'react';
import {
    StyleSheet,
    useColorScheme,
    View,
    Text,
} from 'react-native'
import Screen from '../components/Screen'
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { Racer } from '../types';
import { RootState } from '../store/redux';


const PhotoScreen = (props) => {
    const isDarkMode = useColorScheme() === 'dark';
    const dispatch = useDispatch()
    //@ts-ignore
    const racers: Racer[] = useSelector((state: RootState) => state.racersReducer.racers)
    //@ts-ignore
    const racersFetching: boolean = useSelector((state: RootState) => state.racersReducer.racers_fetching)


    return (
        <Screen>
            <View style={{ flex: 1 }}>

               <Text>2</Text>
            </View>
        </Screen>
    )

};

const styles = StyleSheet.create({

});

export default PhotoScreen;
