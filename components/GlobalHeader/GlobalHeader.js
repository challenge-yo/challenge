import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { DrawerNavigator } from 'react-navigation'

class GlobalHeader extends Component {


  render() {

    return (
        <Header>
          <Left>
            <Button style={{backgroundColor: 'transparent'}}onPress={ this.props.openDrawer }>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button  transparent>
              <Icon name='person' />
            </Button>
          </Right>
        </Header>
    );
  }
}

export default GlobalHeader