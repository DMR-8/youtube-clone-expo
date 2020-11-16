import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons' 
import MiniCard from '../components/MiniCard';

export default function Search() {
    const [value, setValue] = useState("")
    const themeAccentColor = "#212121"

    return (
        <View style = {styles.container}>
            <View style = {styles.search_box}>
                <Ionicons 
                    name = 'md-arrow-back' size = {32}/>
                <TextInput
                style = {styles.search_text_style}
                onChangeText = {(text) => setValue(text)}
                />
                <Ionicons name = 'md-send' size = {32}/> 
            </View>
            <ScrollView>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search_box: 
    {
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: "center",
        flexDirection:"row",
        alignItems: "center",
        elevation: 10,
        shadowOffset: { width: 0, height: 1},
        shadowColor: 'black', 
        shadowOpacity: 0.4,
        backgroundColor: "white"
    },
    search_text_style: {
        width: "70%",
        height: 40,
        paddingStart: 5,
        backgroundColor: "#e6e6e6",
        marginStart: 20,
        marginEnd: 20
    }
   
})