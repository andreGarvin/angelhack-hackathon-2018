import React from 'react';
import { ScrollView } from 'react-native';

import CompanyDetail from './CompanyDetail';

const CompanyList = (props) => { 
  return (
    <ScrollView>
      {props.companies.map( company => ( <CompanyDetail key={company.name} company={company} />)) }
    </ScrollView>
  );
}

export default CompanyList;