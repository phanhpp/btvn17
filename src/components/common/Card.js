import React from "react";
import {View, Dimensions } from 'react-native';
const hei= Dimensions.get('window').height;
const wid= Dimensions.get('window').width;
const Card = (props) => {
  return(
      <View style={styles.containerStyle}>
       {props.children};
      </View>
  );
};
// {props.children} renders any component that we pass to the card - component
const styles ={
    containerStyle: {
        width: wid,
        height: hei,
         backgroundColor: '#243065' 


    }
}

export  {Card};
