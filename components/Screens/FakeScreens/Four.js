import React, { Component } from 'react';
import {  List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import axios from 'axios';
import FriendsCard from './../../list/friends/friends';


export default class Four extends Component {
    constructor(){
        super()
        this.state = {
            data:[],
            data2:[]

        }
    }

    componentDidMount(){
       this.getFriends()
       this.confirmFriends()
    }

    getFriends(){
        axios.get('http://192.168.3.84:3005/api/friends').then(res => {
            this.setState({data:res.data})
         })
        }  

        confirmFriends(){
            axios.get('http://192.168.3.84:3005/api/confirm').then(res => {
                this.setState({data2:res.data})
             })
            }  
       
  render() { 
    const friends = this.state.data.map((friend, i) => {
        return <FriendsCard key={i} title="Add Friend" friend={friend.user_name} icon={friend.image} id={friend.user_id1} id2={friend.user_id2} />
    })

    const confirm = this.state.data2.map((friend, i) => {
        return <FriendsCard key={i} title="Confirm" friend={friend.user_name} icon={friend.image} id={friend.user_id1} id2={friend.user_id2} />
    })
    return (
       
          <List>

            {friends}
            {confirm}
          </List>
       
      
       
      
    );
  }
}
