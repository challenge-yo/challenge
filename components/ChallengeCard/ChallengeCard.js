import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import { Button, Text } from 'react-native'


export default class ChallengeCard extends Component{
    
render() {
    return ( <ListItem button onPress={this.props.nav}>
                <Left>
                    <Thumbnail source={{uri: this.props.icon}}/>
                </Left>
                <Body>
                    <Text style={{right: 90, fontSize: 16, fontWeight: 'bold'}}>{this.props.name}</Text>
                    <Text style={{right: 90, fontSize: 12}}>{this.props.description}</Text>
                </Body>
                <Right>
                    <Text style={{width: 110, fontSize: 10}}>Difficulty: {this.props.difficulty}</Text>
                    <Text style={{width: 110, fontSize: 10}}>Category: {this.props.category}</Text>
                    <Text style={{width: 110, fontSize: 10}}>Time-Limit: {this.props.time} days</Text> 
                </Right>
            </ListItem>)
    }
}