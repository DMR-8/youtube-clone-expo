import { NavigationProp } from '@react-navigation/native';
import React from 'react'
import {Dimensions, StyleSheet, Text, View, FlatList} from 'react-native'
import WebView from 'react-native-webview'
import { StackScreenProps } from '@react-navigation/stack';
import {RootStackParamList} from '../../App'
import { useSelector } from 'react-redux'
import { IReducer } from '../reducers/interfaces'
import { YoutubeResult } from '../classes/youtube_result'
import MiniCard from '../components/MiniCard'

type navProps = StackScreenProps<RootStackParamList, 'videoPlayer'>;

export interface IProps {
    videoId: string
    title: string
}

export default function VideoPlayer({route, navigation}: navProps) {
    const cardData = useSelector( (state: IReducer)=> {
        return state.exploreCardDetails
      })

    const renderMiniCard = ({item}:{item: YoutubeResult}) => (
    <MiniCard
        videoId = {item.id.videoId}
        title = {item.snippet.title}
        channel = {item.snippet.channelTitle}
    />
     );

    return (
        <View style={styles.container}>
            <View
            style = {styles.webview_holder}
            >
            <WebView
            source = { {uri: `https://www.youtube.com/embed/${route.params.videoId}`}}/>                
            </View>
            <Text style = {styles.title_holder} numberOfLines = {2} ellipsizeMode = 'tail'>
                {route.params.title}
            </Text>
            <View
            style = {styles.spacer}
            />
           
         <FlatList
            keyExtractor= {(item, index) => String(index)}
            data = { cardData }
            renderItem = { renderMiniCard }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    webview_holder: {
        width: '100%',
        height: 200
    },
    title_holder: {
        fontSize: 20, 
        width: Dimensions.get('screen').width - 50,
        margin: 9
    },
    spacer: {
        borderBottomWidth: 1,
        marginBottom: 5
    }
})