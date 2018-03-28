import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import { Image, StyleSheet } from 'react-native'




export default class ChallengeCard extends Component{
    
render() {
    return ( 
        <Card>
             <CardItem>
                <Left>
                    <Button iconLeft light style={{backgroundColor: 'white'}} onPress={this.props.back}>
                        <Icon name='arrow-back'/>
                        <Text style={{color: 'black'}}>Back</Text>
                   </Button>
                </Left>
            </CardItem>
            <CardItem bordered style={{marginBottom: 10}}>
                <Left></Left>
                <Body>
                    <Text style={{fontWeight: 'bold', fontSize: 22}}>{this.props.name}</Text>
                </Body>
                <Right></Right>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Text>Description:</Text>
                    <Text note>{this.props.description}</Text>
                </Body>
            </CardItem>
            <CardItem bordered>
                <Left>
                    <Text>Category: {this.props.category}</Text>
                </Left>
            </CardItem>
            <CardItem bordered>
                <Left>
                    <Text>Difficulty: {this.props.difficulty}</Text>
                </Left>
            </CardItem>
            <CardItem bordered>
                <Left>
                    <Text>Days to Complete: {this.props.time}</Text>
                </Left>
            </CardItem>
            <CardItem bordered>
                <Left>
                    <Text>Badge:</Text>
                </Left>
                <Right>
                    <Thumbnail source={{ uri: this.props.icon}} />
                </Right>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Button block success>
                        <Icon name='add-circle'/>
                        <Text style={{color: 'black', fontWeight: 'bold'}}>Accept</Text>
                   </Button>
                </Body>
            </CardItem>
        </Card>
       
     )
    }
}
//  <Card style={{flex: 0, justifyContent: 'center', alignItems: 'center', alignContent: 'center',borderRadius: 0, borderWidth: 2}}>
//             <CardItem>
//                 <Left>
//                     <Thumbnail source={{ uri: this.props.icon}} />
//                     <Text style={{fontSize: 28, fontWeight: 'bold', textDecorationLine: 'underline', textAlign: 'center'}}>{this.props.name}</Text>
//                 </Left>
//              </CardItem>
//               <CardItem style={{alignContent: 'center', alignItems: 'center'}}>
//                    <Body style={{flexDirection: 'column', left: 20}}>
//                      <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline', textAlign: 'center'}}>Category</Text>
//                      <Text style={{fontSize: 18 , textAlign: 'center'}}>{this.props.category}</Text>
//                      <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Difficulty</Text>
//                      <Text style={{fontSize: 18 , textAlign: 'center'}}>{this.props.difficulty}</Text>
//                      <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Days to Complete</Text>
//                      <Text style={{fontSize: 18, textAlign: 'center'}}>{this.props.time} days</Text>
//                    </Body>
//                    <Right style={{flexDirection: 'column', right: 40}}> 
//                       <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline', textAlign: 'center'}}>Instructions</Text>
//                       <Text style={{fontSize: 18, textAlign: 'center',  width: 115}}>{this.props.description}</Text>
//                    </Right>
//                </CardItem>
//                <Thumbnail square style={{width: 350, height: 200, margin: 5}}source={{ uri: this.props.photo}} />
               
                   
//                         <Button block success>
//                             <Icon name='add-circle'/>
//                          <Text style={{color: 'black'}}>ACCEPT</Text>
//                       </Button>
//             </Card>
