import React from 'react';
import { Text, View, Image} from 'react-native';

import Card from '../Card';
import CardSection from '.../CardSection';

const CompanyDetail = ({ company }) => {
  const { name, thumbnail_img} = company;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
  } = styles;

  return (
    <Card>

    {/* make sure to link these buttons to the next view page */}
      <CardSection>
        {/* company thumbnail */}
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_img}}
          />
        </View>
        {/* company name */}
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{name}</Text>
        </View>
      </CardSection>
    </Card>
  );
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