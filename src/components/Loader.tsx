import React from "react"
import { StyleSheet, View, ActivityIndicator } from "react-native"

const Loader = ():JSX.Element => {
    
    return (
        <View
            style={styles.viewLoader}
        >
            <ActivityIndicator
                size={'large'}
                color={'green'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewLoader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default Loader