import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Card() {
    return (
        <View style = {styles.container}>
            <Image 
                source= {{uri: 'https://assets.pokemon.com/assets/cms2/img/video-games/_tiles/pokemon-go/11062020/pokemon-go-169.jpg'}}
                style = {styles.video_image}
                />
            <View style= {styles.details_holder}> 
                <MaterialCommunityIcons name = 'account-circle' size= {40} color = 'red'/>
                <View style = {styles.title_holder}>
                    <Text style= {styles.title_text} ellipsizeMode= 'tail' numberOfLines= {2}>Chal rha hai apna haiohfoin aiashoiasf aoih ioasopifsajf aopsfjapo</Text>
                    <Text style= {styles.secondary_title_text}>Chal rha hai apna</Text>
                </View>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
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
        fontSize: 20,
        width: Dimensions.get("screen").width * 0.7,
    },
    secondary_title_text: {
        marginLeft: 3
    }
})