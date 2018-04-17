import React from 'react';
import { shallow } from 'enzyme';
import { RiderContainer, 
  mapStateToProps, 
  mapDispatchToProps }  from './RiderContainer.js';

import { getRiders } from '../../fetches/get-riders';
import { mockAPIRidersData, 
  mockHistory } from '../../mock-data/mockData';

jest.mock('../../fetches/get-riders');

describe('RiderContainer', () => {

  const mockAddStatsToStore = jest.fn();
  const mockAddRidersToStore = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RiderContainer 
      addRidersToStore={mockAddRidersToStore}
      addStatsToStore={mockAddStatsToStore}
      riders={mockAPIRidersData}
      history={mockHistory}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke getRiders and addRidersToStore on load', () => {
    const mockAddRidersToStore = jest.fn();
    const mockEmptyRiders = [];
    
    wrapper = shallow(<RiderContainer 
      addRidersToStore={mockAddRidersToStore}
      addStatsToStore={mockAddStatsToStore}
      riders={mockEmptyRiders}
      history={mockHistory}
    />);
    expect(getRiders).toHaveBeenCalled();
  });

  it('handleOriginal should set state', () => {
    let mockEvent = {target: {className: 'rt-th slvsh-stats-header'}};
    wrapper.instance().handleOriginal(mockEvent);
    expect(wrapper.state('clicked')).toEqual(true);
  });

  it('handleOriginal should set state', () => {
    let mockEvent = {target: {className: 'trick-key-div'}};
    wrapper.instance().handleOriginal(mockEvent);
    expect(wrapper.state('clicked')).toEqual(true);
  });

  it('handleOriginal should set state', () => {
    let mockEvent = {target: {className: 'trick-key'}};
    wrapper.instance().handleOriginal(mockEvent);
    expect(wrapper.state('clicked')).toEqual(true);
  });

  it('handleRider should update history', () => {
    wrapper.instance().handleRider(23);
    expect(wrapper).toMatchSnapshot();
  });

  it('handleOriginal should set state to false if not correct class', () => { 
    let mockEvent = {target: {className: 'something-that-doesnt-match'}};
    wrapper.instance().handleOriginal(mockEvent);
    expect(wrapper.state('clicked')).toEqual(false);
  });

  it.skip('should invoke handleOriginal on click', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleOriginal');
    wrapper.find('rt-th slvsh-stats-header').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('should mapStateToProps correctly', () => {
    const mockState = {riders: [{name: 'Jonny Moesley', id: 30}]};
    const mapped = mapStateToProps(mockState);
    expect(mapped.riders).toEqual(mockState.riders);
  });

  it('should mapDispatchToProps correctly', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addRidersToStore();
    mapped.addStatsToStore();
    expect(mockDispatch).toHaveBeenCalled();
  });
});