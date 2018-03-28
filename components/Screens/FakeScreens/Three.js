
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import {IP} from './../../../ip'
// import ProfileCard from './../'


class Profile extends Component {
    constructor() {
        super()
        this.state = {
        profile : []    
        }
    }

// componentDidMount(){
//     getProfile()
// }

// getProfile(){
//         axios.get(`${IP}/api/getprofile`, {
            
//         }).then(res => { console.warn('You got your profile, you stud!!', res.data) })
// } //this.setState({profile:res.data})

    render() {

        // const user = this.state.data.map((friend, i) => {
        //     return <ProfileCard key={i} title="Add Friend" user={user.user_name} icon={user.image} score={user.score} />
        // })
    

        return (
            <Content>
                <Text>Three</Text>
                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                        <Thumbnail source={{ uri: this.props.icon }} />
                            <Body>
                                <Text>NativeBase</Text>
                                <Text note>April 15, 2016</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: 200, flex: 1 }} />
                            <Text>
                                I like index stuff
                </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent textStyle={{ color: '#87838B' }}>
                                <Icon name="logo-github" />
                                <Text>1,926 stars</Text>
                            </Button>
                        </Left>
                    </CardItem>
                </Card> 
                 <Button block success title="Validate Friends">
                 <Text style={{color: 'black'}}>Validate Friends</Text>
            </Button>  
  
            </Content>
    
              
        );
    }
}


export default Profile 