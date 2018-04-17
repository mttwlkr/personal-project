import React from 'react';
import RiderCard from './RiderCard.js';
import { mockRiderReducerExpected, mockRiderWithZeroGames } from '../../mock-data/mockData';
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

  it('should not render stats if rider has none', () => {
    wrapper = shallow(<RiderCard 
      rider={mockRiderWithZeroGames}
      handleRider={mockHandleRider}
    />);
    expect(wrapper).toMatchSnapshot();
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