import React, { Component } from 'react';
import { Image, Button, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Input, Item } from 'native-base';

import axios from 'axios'
type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {
      data: [{}, {}]
    }
    this.getChallenges = this.getChallenges.bind(this)
  }
  componentDidMount(){
    this.getChallenges()
  }
  getChallenges(){
    axios.get('http://192.168.3.139:3005/api/challenges').then(response => {
      console.log(response.data)
      this.setState({data: response.data})
    })
  }
    
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/827863-200.png'}} />
                <Body>
                  <Text>{this.state.data[0].challenge_name}</Text>
                  <Text note>Category: {this.state.data[0].category}</Text>
                  <Text note>Difficulty: {this.state.data[0].difficulty}</Text>
                  <Text note>Time-limit: {this.state.data[0].due_time} days</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'data:image/jpeg;base64,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'}} style={{height: 200, width: 340, flex: 1}}/>
                <Text>
                  {this.state.data[0].description}
                </Text>
                <Text note>Suggested wager: ${this.state.data[0].suggested_wager}.00</Text>
                <Text note>Award amount: {this.state.data[0].award_amount} pts</Text>
                <Item style={styles.inputBox}regular>
                  <Input placeholder='Wager' />
                </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button title='accept'>
                </Button>
              </Left>
              <Right>
                <Button title='decline'></Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    width: 70,
    height: 20
  }
})
