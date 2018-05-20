import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import Card from '../Card'
import CardSection from '../CardSection'

const pendingStyle = {color: 'red', borderWidth: 1, }
const deStyle = {color: 'red', borderWidth: 1 }
const newStyle = {color: 'green', borderWidth: 3}
const closedStyle = {color: 'blue', borderWidth: 1}
const companyNameStyle = {}

class ConversationList extends Component{
    render(){
      const list = this.props.data.map(conversation => {
        return (
          <TouchableOpacity
            onPress={() => this.props.navigateFunc('Chat', {
              sessionId: conversation.sessionId
            })}
            key={conversation.sessionId}
          >
            <CardSection style={deStyle}>
            <Text
              style={
                conversation.activity === 'pending' ?
                  pendingStyle :
                    conversation.activity === 'new' ?
                      newStyle : closedStyle
            }>
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
    const { navigation } = this.props;
    this.setState({
      data: navigation.getParam('sessions', [])
    });
  }

  render(){
    return (
      <ConversationList
        navigateFunc={this.props.navigation.navigate}
        data = {this.state.data}
      />
    )
  }
}
