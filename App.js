import React, { Component } from 'react'
import GlobalFooter from './components/GlobalFooter/GlobalFooter'
import GlobalHeader from './components/GlobalHeader/GlobalHeader'
import { Container } from 'native-base'
import { StackNavigator } from 'react-navigation'
class App extends Component {
  render() {
    return (
      <Container>
        <GlobalHeader openDrawer={ () => this.props.navigation.navigate('DrawerOpen') }/>
        <GlobalFooter />
      </Container>
    );
  }
}
export default StackNavigator({
  Home: { screen: App }
}, {
  headerMode: 'none'
})

