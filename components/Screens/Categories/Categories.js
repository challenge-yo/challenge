import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { Button, StyleSheet } from 'react-native'
import CategoryCard from '../../CategoryCard/CategoryCard'
import axios from 'axios'

export default class Category extends Component{
    constructor(props){
        super(props)

        this.state = {
            categories: []
        }
    }
      componentDidMount(){
        this.getCategories()
    }
      getCategories(){
          axios.get('http://172.19.245.84:3005/api/categories').then(response => {
            this.setState({categories: response.data})
          })
      }
  render() {
      
    const categories = this.state.categories.map((category, i) => {
        return <CategoryCard key={i} nav={()=>this.props.navigation.navigate('Challenges', {category: category.category})} category={category.category} icon={category.badge}/>
    })                                     
return (
        <List>{categories}</List>
        )
    }
}
