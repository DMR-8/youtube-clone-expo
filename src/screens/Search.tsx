import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons' 


export default function Search() {
    const [value, setValue] = useState("")

    return (
        <View style = {styles.container}>
            <Ionicons name = 'md-arrow-back' size = {32}/>
            <TextInput
            onChangeText = {(text) => setValue(text)}
            />
            <Ionicons name = 'md-send' size = {32}/> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    video_image: {

    },
    details_holder: {

    }, 
    title_holder: {
    }, 
    title_text: {
    },
    secondary_title_text: {
    }
})