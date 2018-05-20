import React, { Component } from 'react'
import { View } from 'react-native'
import Header from './Header'
import CompanyList from './CompanyList'

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
    return (
      <View style={ {flex: 1} }>
        <Header headerText={'Get Support'} />
        <CompanyList companies={this.state.companies}/>
      </View >
    )
  }
}

export default App;
