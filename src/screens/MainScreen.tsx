
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    useColorScheme,
    View,
    Text,
    FlatList,
} from 'react-native'
import { Loader, PhotoFlatList, Screen } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/redux';
import { photosRequest } from '../store/redux/photos';
import { IPhoto } from '../types';



const MainScreen = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    const dispatch = useDispatch()

    const photos: IPhoto[] = useSelector((state: RootState) => state.photosReducer.photos)

    const racersFetching: boolean = useSelector((state: RootState) => state.photosReducer.photos_fetching)

    useEffect(() => {
        dispatch(photosRequest())
    }, [])

    const onPressPhoto = () => {

    }

    if (racersFetching) {
        return <Loader />
    }
    return (
        <Screen>
            <FlatList
                data={photos}
                renderItem={({ item }) => {
                    return <PhotoFlatList
                     onPress={onPressPhoto}
                      photo={item}
                      style={styles.image}
                    />
                }}
            />

        </Screen>
    )

};

const styles = StyleSheet.create({
    image:{
        marginBottom:20,
    }
});

export default MainScreen;
