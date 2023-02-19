
import React, { useEffect } from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    RefreshControl,
    TextStyle
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { RootState } from '../store/redux';
import { photosRequest } from '../store/redux/photos';

import { IPhoto } from '../types';
import { RootStackParamList } from '../navigation/navigation';
import { Loader, PhotoFlatList, Screen, Error } from '../components'



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


    return (
        <Screen>
            <>
                <Text style={styles.versionText}>версия {require('../../package.json').version}</Text>
                {photoErr && <>
                    <Text style={styles.errorText}>Не удалось обновить по причине:</Text>
                    <Error style={styles.errorText} error={photoErr} />
                </>}
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
                    ListEmptyComponent={<Text style={styles.emptyListText}>Список пуст</Text>}
                />
            </>
        </Screen>
    )

};

const defaultTextStyle = {
    textAlign: 'center',
    marginBottom: 20,
} as TextStyle

const styles = StyleSheet.create({
    image: {
        marginBottom: 20,
    },
    versionText: {
        ...defaultTextStyle
    },
    emptyListText: {
        ...defaultTextStyle,
        fontSize: 24,
    },
    errorText: {
        ...defaultTextStyle,
        fontSize: 24,
    },
});

export default MainScreen;
