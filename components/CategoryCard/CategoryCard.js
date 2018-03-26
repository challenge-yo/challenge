import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import { Button, Text } from 'react-native'


export default class ChallengeCard extends Component{
    
render() {
    return (    <ListItem button onPress={this.props.nav}>
                <Body>
                    <Text>{this.props.category}</Text>
                </Body>
                <Right>
                    <Thumbnail source={{ uri: this.props.icon}} />
                </Right>
            </ListItem>
    )
    }
}
