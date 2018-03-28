import React, { Component } from 'react';
import { Button, Container, Header, Content, List, ListItem, Left, Icon, Body, Right, Thumbnail, Text } from 'native-base';
import axios from 'axios';

class FriendsCard extends Component {
    constructor() {
        super()
        this.state = {
            confirm: []
        }
    }

    addFriend() {
        axios.post(`http://172.19.245.84:3005/api/addfriend`, {
            id: this.props.id, id2: this.props.id2
        }).then(res => { console.warn('You got so many friends!') })
    }

    confirmFriend() {
        axios.post(`http://172.19.245.84:3005/api/confirmfriend`, {
            id: this.props.id, id2: this.props.id2
        }).then(res => { console.warn('You confirmed your friend!') })
    }

    declineFriend() {
        axios.post(`http://172.19.245.84:3005/api/declinefriend`, {
            id: this.props.id, id2: this.props.id2
        }).then(res => { console.warn('You have enough friends!') })
    }


    render() {
        return (<ListItem >

            <Left>
                <Thumbnail source={{ uri: this.props.icon }} />
            </Left>

            <Body>
                <Text>{this.props.friend}</Text>
                <Button success onPress={() => this.props.title === 'Add Friend' ? this.addFriend() : this.confirmFriend()}

                    title={this.props.title}>
                    <Icon name="add-circle" />
                    <Text style={{color: 'black'}}>Accept </Text>
                </Button>
                {this.props.title !== 'Add Friend' ? <Button danger onPress={() => this.declineFriend()}>

                       <Icon name='close-circle'/>
                       <Text style={{color: 'black'}}>DECLINE</Text>

                </Button> : null}
            </Body>
            <Right>




            </Right>
        </ListItem>
        )
    }
}

export default FriendsCard;