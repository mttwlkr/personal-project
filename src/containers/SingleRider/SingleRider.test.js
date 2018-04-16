import React from 'react';
import { SingleRider, mapStateToProps, mapDispatchToProps } from './SingleRider.js';
import { mockRiderReducerExpected, mockAPIRidersData, mockMatch } from '../../mock-data/mockData';
import { shallow } from 'enzyme';
import { getSingleRider } from '../../fetches/get-single-rider';
import { riderStatsObject } from '../../stats/rider-stats-object.js'

jest.mock('../../fetches/get-single-rider')

describe('SingleRider', () => {

  let wrapper;
  const mockAddSingleRiderToStore = jest.fn()
  const mockAddStatsToSingleRider = jest.fn()

  it('should match the snapshot', () => {
    wrapper = shallow(<SingleRider 
      singleRider={mockRiderReducerExpected}
      addSingleRiderToStore={mockAddSingleRiderToStore}
      addStatsToSingleRider={mockAddStatsToSingleRider}
      riders={mockAPIRidersData}
      match={mockMatch}
    />)
  })

  it('should mapStateToProps correctly', () => {
    const mockState = {riders: 'Johnny Moesely', singleRider: 'Picabo Street'}
    const mapped = mapStateToProps(mockState)
    expect(mapped.riders).toEqual(mockState.riders)
    expect(mapped.singleRider).toEqual(mockState.singleRider)
  })

  it('should mapDispatchToProps correctly', () => {
    const mockDispatch = jest.fn() 
    const mapped = mapDispatchToProps(mockDispatch)
    mapped.addSingleRiderToStore()
    mapped.addStatsToSingleRider()
    expect(mockDispatch).toHaveBeenCalled()
  })

})