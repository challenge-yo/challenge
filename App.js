import React, { Component } from 'react'
import GlobalFooter from './components/GlobalFooter/GlobalFooter'
import GlobalHeader from './components/GlobalHeader/GlobalHeader'
import { Container } from 'native-base';

class App extends Component {

  render() {
    return (
      <Container>
        <GlobalHeader  />
        <GlobalFooter />
      </Container>
    );
  }
}

export default App