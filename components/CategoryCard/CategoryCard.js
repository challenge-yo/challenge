import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import { Button, Text } from 'react-native'


export default class ChallengeCard extends Component{
    
render() {
    return (    <ListItem style={{height: 78}}button onPress={this.props.nav}>
                <Body>
                    <Text style={{fontSize: 20, fontWeight: '900'}}>{this.props.category}</Text>
                </Body>
                <Right>
                    <Thumbnail source={{ uri: this.props.icon}} />
                </Right>
            </ListItem>
    )
    }
}
