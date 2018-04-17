import React from 'react';
import { SVGDonut } from './SVGDonut.js';
import { shallow } from 'enzyme';

describe('SVGDonut', ()=> {

  it('should match snapshot', () => {
    const mockStat = .75;
    const mockString = 'Offense';
    const wrapper = shallow(<SVGDonut 
      stat={mockStat}
      string={mockString}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});