import React, {Component} from 'react';
import {Image, TouchableOpacity, Text, View} from 'react-native';

import {Button, Card, CardSection,Input} from "./common"


class AuthScreen extends Component {
    
   
    state = {email:''}; // text initalize with an empty string
    state = {password:''};
    render() {
        return(
         <Card>
              <CardSection>
                 
                 <Image
                 style = {styles.imageStyle}
                 source = {require('./common/anh.png')}
                 />
                </CardSection>
               
             
             <CardSection>
                 <Input
                 placeholder = 'user@gmail.com'
                 lable = 'Email'
                 value = {this.state.email}
                 onChangeText={email => this.setState({email})}
                 />
            </CardSection>
               
             <CardSection>
              <Input
                 secureTextEntry 
                 placeholder = 'password'
                 lable = 'Password'
                 value = {this.state.password}
                 onChangeText={password=> this.setState({password})}
                 />
             </CardSection>

              

             <CardSection>
                 <Button  onPress = {()=> {this.props.navigation.navigate('home')}}>
                     Log in
                 </Button>
             </CardSection>
             
             
            
                 
            

         </Card>
         
        );
    }
}

const styles ={
    imageStyle: {
     flex :1,
     alignItems: 'stretch',
     height : 320,
     width:null,
    },
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        
        
    },
    signView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    }, 
    signText: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    }
}
export default AuthScreen;