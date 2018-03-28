import React, { Component } from 'react'
import { Container, Button, Text } from 'native-base'
import Auth0 from 'react-native-auth0'
import axios from 'axios'
import ChallengeCard from '../../ChallengeCard/ChallengeCard'
import { AsyncStorage } from 'react-native'

import GlobalHeader from '../../GlobalHeader/GlobalHeader'

const auth0 = new Auth0({ domain: 'test-new.auth0.com', clientId: 'PFmPSI2W6Hmsi14OH8J5xBWXe9F5z5E6' });

class Home extends Component {


    componentDidMount() {
        this.isLoggedIn()
    }

    async isLoggedIn() {
        const response = await AsyncStorage.getItem('UserData')
        const profile = await response

        if (profile === null) {
            this.props.navigation.navigate('LoginScreen')
        }
    }

    render() {
        return(
            <Container>
            </Container>
        )
    }
}

export default Home