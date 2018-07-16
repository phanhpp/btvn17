import React from "react";
import { Text, TouchableOpacity} from 'react-native';

const Button = ({onPress,children}) => {
    const {buttonStyle,textStyle} = styles;
    return (
        <TouchableOpacity 
        onPress={onPress }
        style = {buttonStyle}>
        <Text style = {textStyle}>
        {children}
        </Text>
      </TouchableOpacity>
        
    );
};
const styles = {
    textStyle:{
        alignSelf: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: '600', 
        paddingTop: 5,
        paddingBottom: 5,
    },
    buttonStyle:{
        flex:1, // expand as much in width as it can
        backgroundColor: '#EE2C51',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#EE2C51',
        marginLeft: 25,
        marginRight: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
       

    }
}

export  {Button};