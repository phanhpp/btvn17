import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import {createStackNavigator,createBottomTabNavigator, createDrawerNavigator} from 'react-navigation'
import AuthScreen from './src/components/AuthScreen';
import Home from './src/components/Home';
import User from './src/components/User';
import Notification from './src/components/Notification';
import Message from './src/components/Message';
import LogOut from './src/components/LogOut'
const  wid = Dimensions.get('window').width
const  hei = Dimensions.get('window').height

export default class App extends React.Component {
  render() {
    const Main = createStackNavigator(
      {
      auth: AuthScreen,
      home: createDrawerNavigator({
       
        Home: createBottomTabNavigator({
          Home,
          Message,
          Notification,
          User
        }),


        LogOut, 
        
      },
     
    
    ),
      
    }, {headerMode: 'null'}
  )
    
    return (
      <View style={styles.container}>
      <Main/> 
      </View>
    );
  }
}

const styles={
  container: {
    height: hei,
    width: wid,
  },
};
