import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

interface IProps {
    videoId: any
    title: any
    channel: any
}

export default function MiniCard(props: IProps) {
    return (
        <View style = {styles.container}>
            <Image 
                source= {{uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
                style = {styles.video_image}
                />

                <View style = {styles.title_holder}>
                    <Text style= {styles.title_text} ellipsizeMode= 'tail' numberOfLines= {3}>{props.title}</Text>
                    <Text style= {styles.secondary_title_text}>{props.channel}</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10,
        paddingStart: 15,
        paddingEnd: 15
    }, 
    video_image: {
        width: '45%',
        height: 120,
    },
    title_holder: {
        marginLeft: 10,
        width: Dimensions.get("screen").width * 0.5,
    }, 
    title_text: {
        fontSize: 15,
        width: Dimensions.get("screen").width * 0.5,
    },
    secondary_title_text: {
        fontSize: 12,
        marginLeft: 3,
        color: "grey"
    }
})