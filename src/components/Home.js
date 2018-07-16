import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {SimpleLineIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header } from 'react-native-elements';

class Home extends Component {
   
    render() {
        return(
            <View>
               <Header>
                
                <TouchableOpacity onPress = {()=> {this.props.navigation.openDrawer()}}>
                <SimpleLineIcons name="drawer" size={32} color="white" />
                </TouchableOpacity>
                </Header>
               
              
               
            </View>
        )
    }
}

export default Home;