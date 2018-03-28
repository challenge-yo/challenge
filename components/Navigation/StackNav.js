import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import IOSIcon from "react-native-vector-icons/Ionicons";
import { AsyncStorage } from 'react-native'

// screens 
import App from '../../App'
import Home from '../Screens/Home/Home'
import Category from '../Screens/Categories/Categories'
import Three from '../Screens/FakeScreens/Three'
import Four from '../Screens/FakeScreens/Four'
import LoginScreen from '../Screens/LoginScreen/LoginScreen'


const StackNav = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions:({navigation}) => ({
            title: "Home",
            headerLeft:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <IOSIcon name="ios-menu" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 },
        })
    },
    Category: {
        screen: Category,
        navigationOptions:({navigation}) => ({
            title: "Category",
            headerRight:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <IOSIcon name="ios-menu" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
    },
    Three: {
        screen: Three,
        navigationOptions:({navigation}) => ({
            title: "Three",
            headerRight:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <IOSIcon name="ios-menu" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
    },
    Four: {
        screen: Four,
        navigationOptions:({navigation}) => ({
            title: "Four",
            headerRight:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <IOSIcon name="ios-menu" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
    },
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions:({navigation}) => ({
            title: "Login",
            headerRight:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <IOSIcon name="ios-menu" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 },
            header: null,
            tabBarVisible: false,
        })
    }
})

export default StackNav;