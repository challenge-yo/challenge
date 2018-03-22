
import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import styles from './app.styles'
import gStyles from './src/styles/global.styles'

export default class App extends Component {
  render() {
    console.log('poops')
    return (
      <View style={styles.container}>
        <Text style={gStyles.baseFont}>
          Welcome to React Native ll00!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
      </View>
    );
  }
}
