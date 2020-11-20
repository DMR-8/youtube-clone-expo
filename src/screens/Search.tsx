import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator , TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons' 
import MiniCard from '../components/MiniCard';
import { YoutubeResult } from '../classes/youtube_result'
import { useNavigation } from '@react-navigation/native'
import { API_TOKEN } from '../components/values'
import { useDispatch, useSelector } from 'react-redux'
import { IReducer } from '../reducers/interfaces';


export default function Search() {
    const [value, setValue] = useState("")
    const miniCardData = useSelector( (state: IReducer)=> {
        return state.cardDetails
    })
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const themeAccentColor = "#212121"
    const navigation = useNavigation()
    const API_URL = 'https://youtube.googleapis.com/youtube/v3/search'

    const fetchData = () => {
        setIsLoading(true)
        const url = `${API_URL}?q=${value}&key=${API_TOKEN}&part=snippet&type=video&maxResults=10`;
        console.log(url)
        fetch(url)
            .then(res=> res.json())
            .then(data => {
                dispatch({type: 'update', payload: data.items})
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
    
    useEffect(() => {
        dispatch({type:'update', payload: []})
    },[])
    return (
        <View style = {styles.container}>
            <View style = {styles.search_box}>
                <Ionicons 
                    name = 'md-arrow-back' size = {32}
                    onPress = {()=> {navigation.goBack()}}
                    />
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
        paddingTop: 15,
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