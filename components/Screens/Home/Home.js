import React, { Component } from 'react'
import { Container, Button, Text } from 'native-base'
import Auth0 from 'react-native-auth0'
import axios from 'axios'
import ChallengeCard from '../../ChallengeCard/ChallengeCard'
import GlobalFooter from '../../GlobalFooter/GlobalFooter'
import { AsyncStorage } from 'react-native'

const auth0 = new Auth0({ domain: 'test-new.auth0.com', clientId: 'PFmPSI2W6Hmsi14OH8J5xBWXe9F5z5E6' });

class Home extends Component {
    render() {
        return(
            <Container>
                <Button onPress={ () => AsyncStorage.removeItem('UserData', () => {
                    this.props.navigation.navigate('Login')
                }) }><Text>Logout</Text></Button>
            </Container>
        )
    }
}

export default Home