import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator , TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons' 
import MiniCard from '../components/MiniCard';
import {YoutubeResult} from '../classes/youtube_result'



export default function Search() {
    const [value, setValue] = useState("")
    const [miniCardData, setMiniCard] = useState<YoutubeResult[] | null>(null);
    const [isLoading, setIsLoading] = useState(false)
    const themeAccentColor = "#212121"

    const API_URL = 'https://youtube.googleapis.com/youtube/v3/search'
    const API_TOKEN = 'AIzaSyCNtMEy5ZT19xsbG-iib47ZVA-iD_QOHc8'

    const fetchData = () => {
        setIsLoading(true)
        const url = `${API_URL}?q=${value}&key=${API_TOKEN}&part=snippet&type=video&maxResults=10`;
        console.log(url)
        fetch(url)
            .then(res=> res.json())
            .then(data => {
                setMiniCard(data.items)
                setIsLoading(false)
            })
      }

     const renderMiniCard = ({item}:{item: YoutubeResult}) => (
        <MiniCard
            videoId = {item.id.videoId}
            title = {item.snippet.title}
            channel = {item.snippet.channelTitle}
        />
     );
    
    return (
        <View style = {styles.container}>
            <View style = {styles.search_box}>
                <Ionicons 
                    name = 'md-arrow-back' size = {32}/>
                <TextInput
                style = {styles.search_text_style}
                onChangeText = {(text) => setValue(text)}
                />
                <Ionicons name = 'md-send' size = {32} onPress= {() => fetchData()}/> 
            </View>
            {isLoading ? <ActivityIndicator size = "large" color= "red" style={styles.loader_style}/>: null}
            <FlatList
            keyExtractor= {(item, index) => String(index)}
            data = { miniCardData }
            renderItem = { renderMiniCard}
            />
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
    },
    loader_style: {
        marginTop: 20
    }
   
})