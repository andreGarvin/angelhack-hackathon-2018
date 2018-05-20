import React, { Component } from 'react'
import { View } from 'react-native'
import Header from './Header'
import CompanyList from './CompanyList'
import { Text } from 'react-native'
import Sessions from '../components/Sessions'
import Chat from './Chat/Index'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [
        {name: "Cisco", thumbnail_img: "https://www.asaltech.com/wp-content/uploads/2014/08/Cisco-Logo-200x200.png"}
      ]
    };
  }

  render() {
    const data = [{sessionId: '124125', activity: 'closed', companyName: 'Pepsi', technician: 'Bob'},{sessionId: '12125', activity: 'closed', companyName: 'Coke', technician: 'Peter'}]
    return (
      <View style={ {flex: 1} }>
        <Header headerText={'Get Support'} />
        <CompanyList companies={this.state.companies} />
        <Sessions
        data = {data}
        />
      </View >
    )
  }
}

export default App;
