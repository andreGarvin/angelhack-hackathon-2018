import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import CompanyDetail from './CompanyDetail';

class CompanyList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
        {
          this.props.companies.map(company => {
            return(
              <CompanyDetail
                navigation={this.props.navigation}
                key={company.name}
                company={company} />
            )
          })
        }
      </ScrollView>
    );
  }
}

export default CompanyList;