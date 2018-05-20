import React, { Component } from 'react';
import { ScreenOrientation } from 'expo';
import { View, Text, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Chat from './Chat';
import Header from './Header';
import Camera from './Camera';
import Companies from './Companies';
import Sessions from './Sessions';
import SupportType from './Companies/SupportTypeList'

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
    ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
    const companies = await SnapTechAPI.getCompanies()
    const sessions = await SnapTechAPI.sessions('user', 'ricky')
    this.setState({
      companies,
      sessions,
    })
  }

  render() {

    return (
      <View style={{ flex: 1 }}>
          <Header headerText={'Get Support'} />
          {
            this.state.companies.length !== 0 ?
            <Companies
              navigation={this.props.navigation}
              companies={this.state.companies} />
            :
            <ActivityIndicator size="large" color="#0000ff" />
          }
          <TouchableOpacity
            style={{
                flex: .10,
                height: 10,
                marginHorizontal: 2,
                marginBottom: 10,
                marginTop: 20,
                borderRadius: 8,
                backgroundColor: '#80bfff', 
                borderColor: 'white',
                borderWidth: 1,
                padding: 5,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onPress={() =>
              this.props.navigation.navigate('Sessions', {
                sessions: this.state.sessions,
              })
            }
          >
            <Text>Sessions</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const Root = createStackNavigator({
  Home: Home,
  Companies,
  SupportType,
  Sessions,
  Camera,
  Chat,
})

export default Root;