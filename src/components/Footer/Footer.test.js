import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer.js';

describe('footer', () => {

  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});

