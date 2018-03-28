import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Button, Image } from 'native-base';
import { StyleSheet } from 'react-native'
import FeaturedCard from '../../FeaturedChallengeCard/FeaturedChallengeCard'

import axios from 'axios'

export default class Category extends Component{
    constructor(props){
        super(props)

        this.state = {
            challenges: [],
            showToast: false
        }
        
    }
      componentDidMount(){
        this.getSpecificChallenge()
    }
    

      getSpecificChallenge(){
        const { params } = this.props.navigation.state
        const id = params.id
        axios.get(`http://192.168.3.139:3005/api/specificChallenge/${id}`).then(response => {
          this.setState({challenges: response.data})
        })
      }
    
    
    
  render() {
    const challenge = this.state.challenges.map((challenge, i) => {
      return  <FeaturedCard key={i} name={challenge.challenge_name} category={challenge.category} difficulty={challenge.difficulty}
      time={challenge.due_time} icon={challenge.badge} photo={challenge.image} description={challenge.description} nav={()=>this.props.navigation.navigate("Challenges")}
      back={() => this.props.navigation.navigate('Challenges')} /> 
    })
    return (
        <Container>

          {challenge}
    
       
     
         </Container>
    )
  }
}



