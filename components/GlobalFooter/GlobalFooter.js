import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Card, CardItem } from 'native-base';
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Home from '../Screens/Home/Home'
import LoginScreen from '../Screens/LoginScreen/LoginScreen'
import One from '../Screens/FakeScreens/One'
import Challenges from '../Screens/Challenges/Challenges'
import Three from '../Screens/FakeScreens/Three'
import Four from '../Screens/FakeScreens/Four'
import Categories from '../list/Categories/Categories'

export default GlobalFooter = TabNavigator({
    Login: { screen: LoginScreen },
    Home: { screen: Home },
    One: { screen: One },
    Categories: { screen: Categories},
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
                active={props.navigationState.index === 1}
                onPress={() => props.navigation.navigate("Home")}>
                <Icon name="home" />
              </Button>
              <Button
                vertical
                active={props.navigationState.index === 3}
                onPress={() => props.navigation.navigate("Categories")}>
                <Icon name="medal" />
              </Button>
              <Button
                vertical
                active={props.navigationState.index === 4}
                onPress={() => props.navigation.navigate("Three")}>
                <Icon name="person" />
              </Button>
              <Button
                vertical
                active={props.navigationState.index === 5}
                onPress={() => props.navigation.navigate("Four")}>
                <Icon name="people" />
              </Button>
            </FooterTab>
          </Footer>
        );
    }
})