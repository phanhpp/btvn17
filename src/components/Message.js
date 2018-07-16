import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Message extends Component {
    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#03A9F4'}}>
                <Text>Message</Text>
                <Text>Message</Text>
                <Text>Message</Text>
                <Text>Message</Text>
                <Text>Message</Text>
                <Text>Message</Text>
                <Text>Message</Text>
                <Text>Message</Text>
            </View>
        )
    }
}

export default Message;