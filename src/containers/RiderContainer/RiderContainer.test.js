import React from 'react';
import { shallow } from 'enzyme';
import { RiderContainer}  from './RiderContainer.js';
import { addRidersToStore } from '../../fetches/get-riders';

jest.mock('../../fetches/get-riders')

describe('RiderContainer', () => {

  const mockAddRidersToStore = jest.fn()
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RiderContainer 
      addRidersToStore={mockAddRidersToStore}
    />)
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})