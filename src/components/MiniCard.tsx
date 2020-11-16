import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default function MiniCard() {
    return (
        <View style = {styles.container}>
            <Image 
                source= {{uri: 'https://assets.pokemon.com/assets/cms2/img/video-games/_tiles/pokemon-go/11062020/pokemon-go-169.jpg'}}
                style = {styles.video_image}
                />

                <View style = {styles.title_holder}>
                    <Text style= {styles.title_text} ellipsizeMode= 'tail' numberOfLines= {3}>Chal rha hai apna haiohfoin aiashoiasf aoih ioasopifsajf aopsfjapo</Text>
                    <Text style= {styles.secondary_title_text}>Chal rha hai apna </Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10
    }, 
    video_image: {
        width: '45%',
        height: 120,
        marginLeft: 15
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