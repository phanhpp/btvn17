import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class LogOut extends Component {
    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                
                <Button title = {'LogOut'} 
                backgroundColor= 'rgba(0,0,0,0)'
                color= "rgba(0,122,255,1)"
                onPress = {()=> {this.props.navigation.navigate('auth')}}
                />
            </View>
        )
    }
}

export default LogOut;