import React from 'react';
import RiderCard from './RiderCard.js';
import { mockRiderReducerExpected } from '../../mock-data/mockData';
import { shallow } from 'enzyme';

describe('RiderCard', () => {

  let wrapper;
  const mockHandleRider = jest.fn();

  it('should match the snapshot', () => {
    wrapper = shallow(<RiderCard 
      rider={mockRiderReducerExpected}
      handleRider={mockHandleRider}
    />);
  });

  it('should invoke handleRider on click', () => {
    wrapper = shallow(<RiderCard 
      rider={mockRiderReducerExpected}
      handleRider={mockHandleRider}
    />);
    wrapper.find('.rider-container-card').simulate('click');
    expect(mockHandleRider).toHaveBeenCalled();
  });
});