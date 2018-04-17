import React from 'react';
import { SingleRider, 
  mapStateToProps, 
  mapDispatchToProps } from './SingleRider.js';
import { mockSingleRider, 
  mockAPIRidersData, 
  mockMatch } from '../../mock-data/mockData';
import { shallow } from 'enzyme';
import { getSingleRider } from '../../fetches/get-single-rider';

jest.mock('../../fetches/get-single-rider');

describe('SingleRider', () => {

  let wrapper;
  const mockAddSingleRiderToStore = jest.fn();
  const mockAddStatsToSingleRider = jest.fn();

  it('if there are riders in store, it should match the snapshot', () => {
    wrapper = shallow(<SingleRider 
      singleRider={mockSingleRider}
      addSingleRiderToStore={mockAddSingleRiderToStore}
      addStatsToSingleRider={mockAddStatsToSingleRider}
      riders={mockAPIRidersData}
      match={mockMatch}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('if there are not riders in store, it should match snapshot', () => {
    const blankRiders = [];
    const blankSingleRider = {};

    wrapper = shallow(<SingleRider 
      singleRider={blankSingleRider}
      addSingleRiderToStore={mockAddSingleRiderToStore}
      addStatsToSingleRider={mockAddStatsToSingleRider}
      riders={blankRiders}
      match={mockMatch}
    />);
    expect(wrapper).toMatchSnapshot(); 
  });

  it('should invoke gSR, aSRTS, aSTSR if no riders array', () => {
    const blankRiders = [];
    
    wrapper = shallow(<SingleRider 
      singleRider={mockSingleRider}
      addSingleRiderToStore={mockAddSingleRiderToStore}
      addStatsToSingleRider={mockAddStatsToSingleRider}
      riders={blankRiders}
      match={mockMatch}
    />);
    expect(getSingleRider).toHaveBeenCalled();
    expect(mockAddSingleRiderToStore).toHaveBeenCalled();
    expect(mockAddStatsToSingleRider).toHaveBeenCalled();
  });

  it('should mapStateToProps correctly', () => {
    const mockState = {riders: 'Johnny Moesely', singleRider: 'Picabo Street'};
    const mapped = mapStateToProps(mockState);
    expect(mapped.riders).toEqual(mockState.riders);
    expect(mapped.singleRider).toEqual(mockState.singleRider);
  });

  it('should mapDispatchToProps correctly', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addSingleRiderToStore();
    mapped.addStatsToSingleRider();
    expect(mockDispatch).toHaveBeenCalled();
  });
});