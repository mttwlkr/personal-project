import App from './App';
import React from 'react';
import { shallow } from 'enzyme';
import { mockAPIRidersData, mockAPIGamesData } from '../../mock-data/mockData';

describe.skip('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  
  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })


})
