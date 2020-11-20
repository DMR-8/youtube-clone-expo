import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import Header from '../components/Header';
import Card from '../components/Card'
import { YoutubeResult } from '../classes/youtube_result'
import { useSelector } from 'react-redux'
import { IReducer } from '../reducers/interfaces'

export default function History() {
    const cardData = useSelector( (state: IReducer)=> {
        return state.cardDetails
    })

    const renderCard = ({item}:{item: YoutubeResult}) => (
        <Card
            videoId = {item.id.videoId}
            title = {item.snippet.title}
            channel = {item.snippet.channelTitle}
        />
     );
    return (
        <View style={styles.container}>
            <Header/>
            {cardData.length == 0 ? <Text style={styles.empty_text_style}>No Recent Serach History</Text>: null}
            <FlatList
            keyExtractor= {(item, index) => String(index)}
            data = { cardData }
            renderItem = { renderCard }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    empty_text_style: {
        width: '100%',
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})