import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Header from './Header';
import Camera from './Camera';
import Companies from './Companies';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      companies: [
        { name: "Cisco", thumbnail_img: "https://www.asaltech.com/wp-content/uploads/2014/08/Cisco-Logo-200x200.png" }
      ]
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
          <Header headerText={'Get Support'} />
          <Companies companies={this.state.companies} />
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
  Companies,
  Camera,

  // Sessions,
})

class App extends Component {
  render() {
    return (
      <Root />
    )
  }
}

export default App;
