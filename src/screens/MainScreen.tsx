
import React, { useEffect } from 'react';
import {
    StyleSheet,
    useColorScheme,
    FlatList,
    View,
    Text,
    RefreshControl
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { RootState } from '../store/redux';
import { photosRequest } from '../store/redux/photos';

import { IPhoto } from '../types';
import { RootStackParamList } from '../navigation/navigation';
import { Loader, PhotoFlatList, Screen } from '../components'



const MainScreen = (): JSX.Element => {
    const dispatch = useDispatch()
    const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const photos: IPhoto[] = useSelector((state: RootState) => state.photosReducer.photos)
    const photoErr: string | null = useSelector((state: RootState) => state.photosReducer.photos_error)
    const photosFetching: boolean = useSelector((state: RootState) => state.photosReducer.photos_fetching)

    useEffect(() => {
        dispatch(photosRequest())
    }, [])

    const onRefreshPhotos = () => {
        dispatch(photosRequest())
    }

    const onPressPhoto = (photo: IPhoto) => {
        navigate.navigate('PhotoScreen', { photo })
    }

    if (photosFetching && !photos) {
        return <Loader />
    }

    if (photoErr) {
        return (
            <Text>
                {photoErr}
            </Text>
        )
    }
    return (
        <Screen>
            <>
                <Text style={styles.versionText}>версия {require('../../package.json').version}</Text>
                <FlatList
                    data={photos}
                    renderItem={({ item }) => {
                        return <PhotoFlatList
                            onPress={() => onPressPhoto(item)}
                            photo={item}
                            style={styles.image}
                        />
                    }}
                    refreshControl={<RefreshControl
                        refreshing={photosFetching && !photos}
                        onRefresh={onRefreshPhotos}
                    />}
                />
            </>
        </Screen>
    )

};

const styles = StyleSheet.create({
    image: {
        marginBottom: 20,
    },
    versionText: {
        textAlign: 'center',
        marginBottom: 20,
    }
});

export default MainScreen;
