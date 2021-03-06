import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';
import Card from '../components/Card'
import Header from '../components/Header';
import { YoutubeResult } from '../classes/youtube_result'
import { API_TOKEN } from '../components/values'
import { useDispatch, useSelector } from 'react-redux'
import { IReducer } from '../reducers/interfaces'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const API_URL = 'https://youtube.googleapis.com/youtube/v3/search'
  const dispatch = useDispatch()
  const cardData = useSelector( (state: IReducer)=> {
    return state.exploreCardDetails
  })
    const fetchData = () => {
        setIsLoading(true)
        const url = `${API_URL}?&key=${API_TOKEN}&part=snippet&type=video&maxResults=10`;
        console.log(url)
        fetch(url)
            .then(res=> res.json())
            .then(data => {
              dispatch({type: 'updateExplore', payload: data.items})
              setIsLoading(false)
            })
      }
    const renderCard = ({item}:{item: YoutubeResult}) => (
      <Card
          videoId = {item.id.videoId}
          title = {item.snippet.title}
          channel = {item.snippet.channelTitle}
      />
    );

    useEffect(() => {
        fetchData()
    },[]);
  return (
    <View style={styles.container}>
      <Header/>
      {isLoading ? <ActivityIndicator size = "large" color= "red" style={styles.loader_style}/>: null}
      <FlatList
      keyExtractor= {(item, index) => String(index)}
      data = { cardData }
      renderItem = { renderCard }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loader_style: {
    marginTop: 20
  },
  
});
