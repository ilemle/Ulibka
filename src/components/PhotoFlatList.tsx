import React, { useState } from "react"
import { StyleSheet, TouchableOpacity, ViewStyle, Dimensions, Image } from "react-native"
import { IPhoto } from "../types"


interface IPhotoFlatList {
    style?: ViewStyle,
    onPress: () => void,
    photo: IPhoto,
}

const PhotoFlatList = (props: IPhotoFlatList): JSX.Element => {

    const { style,
        onPress,
        photo,
    } = props



    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={onPress}
        >
            <Image
                style={[styles.image]}
                source={{ uri: photo.url_l }}
                resizeMode={'contain'}
            />
        </TouchableOpacity >
    )
}

export default PhotoFlatList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        width: 300,
        height: 200
    }
})
