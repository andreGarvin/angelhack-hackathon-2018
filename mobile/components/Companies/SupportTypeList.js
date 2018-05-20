import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image} from 'react-native';

import Card from '../Card';
import CardSection from '../CardSection';

import snaptechapi from 'snaptechapi';

class SupportTypeList extends Component {
  constructor(props) {
    // props contains support type
    super(props);
    this.companyName = this.props.navigation.getParam('companyName', '')
    this.supportTypes = ['Switches', 'Routers', 'Wireless', 'Network Security', 'Meraki Cloud', 'WAN Optimization'];
  }
  async createSession() {
    const { sessionId } = await snaptechapi.createSession('ricky', this.companyName)
    this.props.navigation.navigate('Chat', {
      sessionId,
      companyName: this.companyName
    })
  }
  render() {
    const listOfSupportTypes = this.supportTypes.map( supportType => {
        return (
          <TouchableOpacity
            onPress={() => this.createSession()}
            key={supportType}
          >
            <Card>
              <CardSection>
                {/* company support type*/}
                <View style={styles.headerContentStyle}>
                  <Text style={styles.headerTextStyle}>{supportType}</Text>
                </View>
              </CardSection>
            </Card>
          </TouchableOpacity>
        )});

    return listOfSupportTypes; 
  }
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  }
};

export default SupportTypeList;