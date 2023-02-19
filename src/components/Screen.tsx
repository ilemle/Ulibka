
import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native'

interface ScreenProps {
    children: JSX.Element | null
}

const Screen = (props: ScreenProps):JSX.Element => {
    const { children } = props
    return (
        <SafeAreaView style={styles.mainSafeAreaStyle}>
            <StatusBar
              
            />
            <View style={styles.children}>
                {children}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainSafeAreaStyle: {
        flex: 1,
    },
    children: {
        flex:1,
        paddingHorizontal:18,
        paddingVertical:24,
    }
});

export default Screen;
