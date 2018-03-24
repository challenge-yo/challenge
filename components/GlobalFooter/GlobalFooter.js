import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Card, CardItem } from 'native-base';
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Home from '../Screens/Home/Home'
import One from '../Screens/FakeScreens/One'
import Two from '../Screens/FakeScreens/Two'
import Three from '../Screens/FakeScreens/Three'
import Four from '../Screens/FakeScreens/Four'

export default GlobalFooter = TabNavigator({
    Home: { screen: Home },
    One: { screen: One },
    Two: { screen: Two },
    Three: { screen: Three },
    Four: { screen: Four }
}, {
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
        return (
          <Footer>
            <FooterTab>
              <Button
                vertical
                active={props.navigationState.index === 0}
                onPress={() => props.navigation.navigate("Home")}>
                <Icon name="home" />
              </Button>
              <Button
                vertical
                active={props.navigationState.index === 2}
                onPress={() => props.navigation.navigate("Two")}>
                <Icon name="medal" />
              </Button>
              <Button
                vertical
                active={props.navigationState.index === 3}
                onPress={() => props.navigation.navigate("Three")}>
                <Icon name="person" />
              </Button>
              <Button
                vertical
                active={props.navigationState.index === 4}
                onPress={() => props.navigation.navigate("Four")}>
                <Icon name="people" />
              </Button>
            </FooterTab>
          </Footer>
        );
    }
})