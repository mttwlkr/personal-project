import React from 'react';
import { shallow } from 'enzyme';
import GameCard from './GameCard.js';
import { mockAPIGamesData } from '../../mock-data/mockData';

describe('GameCard', () => {

  let wrapper;
  let mockGame = mockAPIGamesData.posts[0]

  beforeEach(() => {
    wrapper = shallow(<GameCard 
      game={mockGame}
    />)
  })

  it('should match the snapshot', () => {
    

  })
})