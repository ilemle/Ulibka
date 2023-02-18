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

    const width = Dimensions.get('screen').width
    // const height = 

    const [imageHeight, setImageHeight] = useState<number>(200)
    console.log('imageHeight');

    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={onPress}
        >
            <Image
                onLayout={(event) => setImageHeight(event.nativeEvent.layout.height)}
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
