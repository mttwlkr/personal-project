import React from 'react';
import { shallow } from 'enzyme';
import { RiderContainer, mapStateToProps, mapDispatchToProps }  from './RiderContainer.js';
import { getRiders } from '../../fetches/get-riders';
import { mockAPIRidersData } from '../../mock-data/mockData'

jest.mock('../../fetches/get-riders')

describe('RiderContainer', () => {

  const mockAddStatsToStore = jest.fn()
  const mockAddRidersToStore = jest.fn()
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RiderContainer 
      addRidersToStore={mockAddRidersToStore}
      addStatsToStore={mockAddStatsToStore}
      riders={mockAPIRidersData}
    />)
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should invoke getRiders and addRidersToStore', () => {
    expect(getRiders).toHaveBeenCalled()
    expect(mockAddRidersToStore).toHaveBeenCalled()
  })

  it('should mapStateToProps correctly', () => {
    const mockState = {riders: [{name: 'Jonny Moesley', id: 30}]}
    const mapped = mapStateToProps(mockState)
    expect(mapped.riders).toEqual(mockState.riders)
  })

  it('should mapDispatchToProps correctly', () => {
    const mockDispatch = jest.fn()
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addRidersToStore()
    expect(mockDispatch).toHaveBeenCalled()
  })
})