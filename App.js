<<<<<<< HEAD


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js taco
        </Text>
      </View>
=======
import React, { Component } from 'react'
import GlobalFooter from './components/GlobalFooter/GlobalFooter'
import GlobalHeader from './components/GlobalHeader/GlobalHeader'
import { Container } from 'native-base'
import { StackNavigator } from 'react-navigation'
import ChallengeList from './components/Screens/ChallengeLists/ChallengeLists'
class App extends Component {
  render() {
    return (
      <Container>
        <GlobalHeader openDrawer={ () => this.props.navigation.navigate('DrawerOpen') }/>
        <GlobalFooter />
      </Container>
>>>>>>> master
    );
  }
}
export default StackNavigator({
  Home: { screen: App },
  
 
}, {
  headerMode: 'none'
})

