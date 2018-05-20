import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';


import Chat from './Chat';
import Header from './Header';
import Camera from './Camera';
import Companies from './Companies';
import Sessions from './Sessions';

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
    // const sessions = await SnapTechAPI.sessions('user', 'ricky')
    this.setState({
      companies,
      // sessions,
    })
  }

  render() {
    const data = [
      {sessionId: '124125', activity: 'closed', companyName: 'Pepsi', technician: 'Bob'},
      {sessionId: '12125', activity: 'closed', companyName: 'Coke', technician: 'Peter'}
    ]

    return (
      <View style={{ flex: 1 }}>
          <Header headerText={'Get Support'} />
          <Companies
            navigation={this.props.navigation}
            companies={this.state.companies} />
          <Button
            title="Go to messages"
            onPress={() =>
              this.props.navigation.navigate('Sessions', {
                sessions: data,
              })
            }
          />
      </View>
    )
  }
}

export default App
const Root = createStackNavigator({
  Home: Home,
  Companies,
  Sessions,
  Camera,
  Chat,
})

export default Root;