import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import App from '../../App'
import One from '../Screens/FakeScreens/One'


export default DrawerNavigator({
    Home: { screen: App },
    One: { screen: One }
})