import React from 'react';
import RiderCard from './RiderCard.js';
import { mockAPIRidersData } from '../../mock-data/mockData';
import { shallow } from 'enzyme'

describe('RiderCard', () => {

  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<RiderCard 
      rider={mockAPIRidersData[0]}
    />)
  })

})