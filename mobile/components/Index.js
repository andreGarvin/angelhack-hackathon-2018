import React, { Component } from 'react'
import { Text } from 'react-native'
import Sessions from '../components/Sessions'

class App extends Component {
  render() {
    const data = [{sessionId: '124125', activity: 'closed', companyName: 'Pepsi', technician: 'Bob'},{sessionId: '12125', activity: 'closed', companyName: 'Coke', technician: 'Peter'}]
    return (
      <Sessions
      data = {data}
      />
    )
  }
}

export default App
