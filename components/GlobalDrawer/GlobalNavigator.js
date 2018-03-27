import React from 'react'
import { StackNavigator } from 'react-navigation'
import App from '../../App'
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import ChallengeList from '../Screens/ChallengeLists/ChallengeLists'
import Challenges from '../Screens/Challenges/Challenges'
import Categories from '../list/Categories/Categories'

// Fake screens

import One from '../Screens/FakeScreens/One'
import Two from '../Screens/FakeScreens/Two'
import Three from '../Screens/FakeScreens/Three'
import Four from '../Screens/FakeScreens/Four'


export default StackNavigator({
    Home: { screen: App },
    Login: { screen: LoginScreen },
    ChallengeList: { screen: ChallengeList },
    Challenges: { screen: Challenges },
    Categories: { screen: Categories },
    One: { screen: One },
    Two: { screen: Two },
    Three: { screen: Three },
    Four: { screen: Four }
})