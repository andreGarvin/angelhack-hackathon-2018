import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image} from 'react-native';

import Card from '../Card';
import CardSection from '../CardSection';

class CompanyDetail extends Component {
  constructor(props) {
    super(props);
  }
  async createSession(companyName) {
    this.props.navigation.navigate('SupportType', {
      companyName
    })
  }
  render() {
    const { name, thumbnail_img } = this.props.company;
    const {
      thumbnailStyle,
      headerContentStyle,
      thumbnailContainerStyle,
      headerTextStyle,
    } = styles;

    return (
      <TouchableOpacity
        onPress={() => this.createSession(name)}
      >
        <Card>
          
          {/* make sure to link these buttons to the next view page */}
          <CardSection>
            {/* company thumbnail */}
            <View
              style={thumbnailContainerStyle}>
              <Image
                style={thumbnailStyle}
                source={{ uri: thumbnail_img }}
              />
            </View>
            {/* company name */}
            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>{name}</Text>
            </View>
          </CardSection>
        </Card>
      </TouchableOpacity>
    );
  }
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
};

export default CompanyDetail;