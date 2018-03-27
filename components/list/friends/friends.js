import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Icon, Body, Right, Thumbnail } from 'native-base';
import { Button, Text } from 'react-native';
import axios from 'axios';

class FriendsCard extends Component {
    constructor() {
        super()
        this.state = {
            confirm: []
        }
    }

    addFriend() {
        axios.post(`http://192.168.3.84:3005/api/addfriend`, {
            id: this.props.id, id2: this.props.id2
        }).then(res => { console.warn('You got so many friends!') })
    }

    confirmFriend() {
        axios.post(`http://192.168.3.84:3005/api/confirmfriend`, {
            id: this.props.id, id2: this.props.id2
        }).then(res => { console.warn('You confirmed your friend!') })
    }

    declineFriend() {
        axios.post(`http://192.168.3.84:3005/api/declinefriend`, {
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
                <Button onPress={() => this.props.title === 'Add Friend' ? this.addFriend() : this.confirmFriend()}

                    title={this.props.title}>
                    <Icon name="add" />
                </Button>
            </Body>
            <Right>
                {this.props.title !== 'Add Friend' ? <Button onPress={() => this.declineFriend()}

                    title='Decline'>
                    <Icon name="minus" />
                </Button> : null}



            </Right>

        </ListItem>
        )
    }
}

export default FriendsCard;