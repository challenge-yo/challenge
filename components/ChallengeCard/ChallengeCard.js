import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import { Button, Text } from 'react-native'


export default class ChallengeCard extends Component{
    
render() {
    return ( <ListItem avatar>
                <Left>
                    <Thumbnail source={{uri: this.props.icon}}/>
                </Left>
                <Body>
                    <Text>{this.props.name}</Text>
                    <Text note>{this.props.description}</Text>
                </Body>
                <Right>
                    <Text note>Difficulty: {this.props.difficulty}</Text>
                    <Text note>Category: {this.props.category}</Text>
                    <Text note>Time-Limit: {this.props.time} days</Text> 
                </Right>
            </ListItem>)
    }
}