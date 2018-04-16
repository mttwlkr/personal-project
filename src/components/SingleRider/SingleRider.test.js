import React from 'react';
import SingleRider from './SingleRider.js';
import { mockAPIRidersData } from '../../mock-data/mockData';
import { shallow } from 'enzyme'

describe('SingleRider', () => {

  let wrapper;

  it.skip('should match the snapshot', () => {
    wrapper = shallow(<SingleRider 
      rider={mockAPIRidersData[0]}
    />)
  })

})