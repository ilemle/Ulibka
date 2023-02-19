
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

import Screen from '../components/Screen'
import { PhotoFlatList } from '../components';
import { IPhoto } from '../types';


const PhotoScreen = (props): JSX.Element => {

    const { route } = props
    const { photo }: { photo: IPhoto } = route.params

    return (
        <Screen>
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{photo.title}</Text>
                <PhotoFlatList
                    onPress={() => { }}
                    photo={photo}
                    style={styles.image}
                />
            </View>
        </Screen>
    )

};

const styles = StyleSheet.create({
    image: {
        flex: 1
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
    }
});

export default PhotoScreen;
