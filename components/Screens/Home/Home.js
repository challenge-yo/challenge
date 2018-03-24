import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Card, CardItem } from 'native-base';
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Header from '../../Header/Header'


// Test Pages

import One from '../FakeScreens/One'
import Two from '../FakeScreens/Two'
import Three from '../FakeScreens/Three'
import Four from '../FakeScreens/Four'

// Test Pages

class Home extends Component {
    render() {
        return(
            <Container>
                    <Header />
            </Container>
        )
    }
}

export default Home