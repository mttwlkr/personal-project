import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
