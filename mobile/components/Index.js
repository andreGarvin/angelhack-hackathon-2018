import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';


import Chat from './Chat';
import Header from './Header';
import Camera from './Camera';
import Companies from './Companies';

import SnapTechAPI from 'snaptechapi';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      companies: [],
      sessions: {}
    }
  }

  async componentDidMount() {
    const companies = await SnapTechAPI.getCompanies()
    this.setState({
      companies,
    })
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

export default Root;
