import React, { Component } from 'react';
import { TabNavigator, TabView } from 'react-navigation'
import { Footer, FooterTab, Button, Icon } from 'native-base'

// Views 

import StackNav from './StackNav'
import Home from '../Screens/Home/Home'
import Category from '../Screens/Categories/Categories'
import Three from '../Screens/FakeScreens/Three'
import Four from '../Screens/FakeScreens/Four'
import LoginScreen from '../Screens/LoginScreen/LoginScreen'

const TabNav = TabNavigator({
    Stack: { screen: StackNav },
    Home: { screen: Home },
    Category: { screen: Category },
    Three: { screen: Three },
    Four: { screen: Four },
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
                active={props.navigationState.index === 1}
                onPress={() => props.navigation.navigate("Category")}>
                <Icon name="medal" />
              </Button>
              <Button
                vertical
                active={props.navigationState.index === 2}
                onPress={() => props.navigation.navigate("Three")}>
                <Icon name="person" />
              </Button>
              <Button
                vertical
                active={props.navigationState.index === 3}
                onPress={() => props.navigation.navigate("Four")}>
                <Icon name="people" />
              </Button>
            </FooterTab>
          </Footer>
        );
    }
})

export default TabNav;