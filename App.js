import React, { Component } from 'react'
import GlobalFooter from './components/GlobalFooter/GlobalFooter'
import GlobalHeader from './components/GlobalHeader/GlobalHeader'
import { Container } from 'native-base'
import { StackNavigator } from 'react-navigation'
import One from './components/Screens/FakeScreens/One'
import ChallengeList from './components/Screens/ChallengeLists/ChallengeLists'

import Home from './components/Screens/Home/Home'
import LoginScreen from './components/Screens/LoginScreen/LoginScreen'

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalFooter />
      </Container>
    );
  }
}

export default App