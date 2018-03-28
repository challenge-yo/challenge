import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import { DrawerNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";
import TabNav from './TabNav'

export const DrawerNav = DrawerNavigator({
    Home: {
        screen: TabNav,
        navigationOptions: {
            drawerLabel: "Home",
            drawerIcon: ({ tintColor }) => <Icon name="home" size={24} />,
        }
    }
});

export default DrawerNav