import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function Header() {
  const themeAccentColor = "#212121"
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <View style= {styles.icon_view}> 
          <AntDesign name='youtube' size = {34} color = 'red'/>
          <Text style = {Object.assign({ color : themeAccentColor }, styles.header_text)} >
              YouTube
          </Text>
        </View>
        <View style = {styles.right_icon_view}>
          <Ionicons style= {styles.icon_view} name = 'ios-videocam' size={34} color = {themeAccentColor}/>
          <Ionicons style= {styles.icon_view} name = 'ios-search' size={34} color = {themeAccentColor} onPress={() => navigation.navigate('search')}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 10,
    shadowOffset: { width: 0, height: 1},
    shadowColor: 'black', 
    shadowOpacity: 0.4,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header_text: {
    marginLeft: 5,
    fontSize: 22,
    fontWeight: 'bold'
  }, 
  icon_view: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  right_icon_view: {
    flexDirection: 'row',
    margin: 10,
  }
});
