import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default function VideoPlayer() {
    return (
        <View style={styles.container}>
            <Text>Video Player Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})