import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface IProps {
    videoId: any
    title: any
    channel: any
}

export default function Card(props: IProps) {
    return (
        <View style = {styles.container}>
            <Image 
                source= {{uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
                style = {styles.video_image}
            />
            <View style= {styles.details_holder}> 
                <MaterialCommunityIcons name = 'account-circle' size= {40} color = 'red'/>
                <View style = {styles.title_holder}>
                    <Text style= {styles.title_text} ellipsizeMode= 'tail' numberOfLines= {2}>{props.title}</Text>
                    <Text style= {styles.secondary_title_text}>{props.channel}</Text>
                </View>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
    },
    video_image: {
        width: '100%',
        height: 200
    },
    details_holder: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 5
    }, 
    title_holder: {
        marginLeft: 10,
    }, 
    title_text: {
        fontSize: 18,
        width: Dimensions.get("screen").width * 0.7,
    },
    secondary_title_text: {
        marginLeft: 3
    }
})