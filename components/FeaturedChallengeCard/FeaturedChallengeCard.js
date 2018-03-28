import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import { StyleSheet, Image } from 'react-native'



export default class ChallengeCard extends Component{
    
render() {
    return ( 
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{ uri: this.props.icon}} />
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>{this.props.name}</Text>
                </Left>
             </CardItem>
              <CardItem>
                  <Left>
                     <Text style={{fontWeight: 'bold', fontSize: 16}}>Category:</Text>
                     <Text>{this.props.category}</Text>  
                  </Left>
                   <Body>
                       <Text>Difficulty:</Text>
                      {/* <Text>{this.props.description}</Text> */}
                      <Text style={{width: 110, fontSize: 10}}>Difficulty: {this.props.difficulty} Category: {this.props.category} Time-Limit: {this.props.time} days</Text>
                   </Body>
               </CardItem>
              <CardItem>
                  <Left>
                      <Button success title=''>
                         <Icon name='add-circle'/>
                         <Text style={{color: 'black'}}>ACCEPT</Text>
                      </Button>
                  </Left>
                  <Body>

                  </Body>
                  <Right>
                      <Button danger title=''>
                        <Icon name='close-circle'/>
                        <Text style={{color: 'black'}}>DECLINE</Text>
                      </Button>
                  </Right>
              </CardItem>
            </Card>
     )
    }
}