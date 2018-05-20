import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import Card from '../components/Card'
import CardSection from '../components/CardSection'

var pendingStyle = {color: 'red', borderWidth: 1, }
var deStyle = {color: 'red', borderWidth: 1 }
var newStyle = {color: 'green', borderWidth: 3}
var closedStyle = {color: 'blue', borderWidth: 1}
var companyNameStyle = {}

// return(
//   <TouchableOpacity key={conversation.sessionId}>
//     <View style={deStyle}>
//       <View style = {conversation.activity === 'pending' ? pendingStyle : conversation.activity === 'new' ? newStyle : pendingStyle}>
//         {conversation.activity}
//       </View>
//       <View style = {companyNameStyle}>
//         {conversation.companyName}
//       </View>
//       <View>
//         {conversation.technician}
//       </View>
//     </View>
//   </TouchableOpacity>
// );

class ConversationList extends Component{
    render(){
      const list = this.props.data.map(conversation => {
        return (
          <TouchableOpacity key={conversation.sessionId}>
          <CardSection style={deStyle}>
          <Text style = {conversation.activity === 'pending' ? pendingStyle : conversation.activity === 'new' ? newStyle : closedStyle}>
            {conversation.activity}
          </Text>
          <Text style = {companyNameStyle}>
            {conversation.companyName} Tech name:{conversation.technician}
          </Text>
          </CardSection>
          </TouchableOpacity>
        )
      })
      return <Card>{list}</Card>
    }
};

// this will be the default component that renders first and call the other components
export default class Sessions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // set as state any information that will be changing with updates
      data: [],
    };
  }
  // search(searchTerm){
  //
  //   data = this.state.data.companies(s)
  //   this.setState(data)
  // }

  componentDidMount(){
    // potentially import data
    this.setState({
      // props?
      data: this.props.data
    });
    console.log(this.props.data)
  }
  render(){
    const data = this.state.data
    return (
      <ConversationList
        data = {data}
      />
    )
  }
}
