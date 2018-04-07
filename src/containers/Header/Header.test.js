import React from 'react';
import { shallow } from 'enzyme';

describe('Header', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  

})