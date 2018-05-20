import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Messaging from './Messages';

class Home extends Component {
  render() {
    return (
      <View>
        <Text>HOME</Text>
        <Button
          title="Go to messages"
          onPress={() =>
            this.props.navigation.navigate('Messaging')
          }
        />
      </View>
    )
  }
}

const Root = createStackNavigator({
  Home: Home,
  Messaging,
  // Sessions, 
})

class App extends Component {
  render() {
    return (
      <Root />
    )
  }
}

export default App
