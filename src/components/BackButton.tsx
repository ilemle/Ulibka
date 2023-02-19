import React from "react"
import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity, Text, useColorScheme, StyleSheet } from "react-native"

const BackButton = (): JSX.Element => {

    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
        >
            <Text style={styles.backButtonText}>Назад</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    backButtonText: {
        marginBottom: 16,
        fontSize: 16,
    },

});

export default BackButton