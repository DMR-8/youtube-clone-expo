import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './src/screens/Home'
import History from './src/screens/History'
import Search from './src/screens/Search'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import VideoPlayer, { IProps as VideoPlayerProps } from './src/screens/VideoPlayer'
import Constant from 'expo-constants'    
import { MaterialIcons } from '@expo/vector-icons'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { MainReducer } from './src/reducers/reducer'

const Stack = createStackNavigator<RootStackParamList>()
const Tabs = createBottomTabNavigator()
const store = createStore(MainReducer)

const RootHome = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = ''

          if (route.name === 'Home') {
            iconName = 'home'
              
          }  else if (route.name === 'History') {
            iconName = 'subscriptions' 
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    }}
    >
      <Tabs.Screen name = 'Home' component = {Home}/>
      <Tabs.Screen name = 'History' component = {History}/>
    </Tabs.Navigator>
  )
}

export type RootStackParamList = {
  videoPlayer: VideoPlayerProps;
};
export default function App() {
  return (
    <Provider store = { store }>
    <SafeAreaProvider style = {styles.container}>
      <NavigationContainer>
        <Stack.Navigator headerMode = 'none'>
          <Stack.Screen name = 'rootHome' component= {RootHome}/>
          <Stack.Screen name = 'search' component= {Search}/>
          <Stack.Screen name = 'videoPlayer' component= {VideoPlayer}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight
  },
});
