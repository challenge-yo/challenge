import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import { Button, Text } from 'react-native'
import Categories from '../../Screens/Categories/Categories'
import ChallengeCard from '../../ChallengeCard/ChallengeCard'
import CategoryCard from '../../CategoryCard/CategoryCard'
import axios from 'axios'

export default class ChallengeLists extends Component{
    constructor(props){
        super(props)

        this.state = {
            challenges: []
        }
    }
    componentDidMount(){
        this.categorizeChallenges()
    }
  
    categorizeChallenges(){
        const { params } = this.props.navigation.state
        const category = params.category
        // console.warn(category)
        axios.get(`http://192.168.3.139:3005/api/challengeByCategory/${category}`).then(response => {
            this.setState({challenges: response.data})

        })}
    

  render() {
  
    const challenges =  this.state.challenges.map((challenge, i) => {
        return <ChallengeCard key={i} nav={()=>this.props.navigation.navigate('Featured', {id: challenge.id})}name={challenge.challenge_name} category={challenge.category} difficulty={challenge.difficulty}
        time={challenge.due_time} icon={challenge.badge} description={challenge.description}/> 
    })

    return (
      <Container>
          <List>{challenges}</List>

          
        </Container> 
    );
  }
}