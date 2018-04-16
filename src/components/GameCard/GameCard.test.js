import React from 'react';
import { shallow } from 'enzyme';
import GameCard from './GameCard.js';
import { mockAPIGamesData, 
  mockInstabanger,
  mockBadGameForGameCard } from '../../mock-data/mockData';

describe('GameCard', () => {

  let wrapper;
  let mockGame = mockAPIGamesData.posts[1]
  let mockHandleRoute = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<GameCard
      handleRoute={mockHandleRoute}
      game={mockGame} // game_postclass is a game
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should add styling based on game_postclass', () => {
    let mockGame = mockAPIGamesData.posts[0] // game_postclass is a film
    wrapper = shallow(<GameCard 
      game={mockGame}
      handleRoute={mockHandleRoute}
    />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should add instabanger styling based on game_postclass', () => {
    wrapper = shallow(<GameCard 
      game={mockInstabanger}          // game_postclass is an instabanger
      handleRoute={mockHandleRoute}
    />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render slvsh-styling based on no game_postclass', () => {
    const mockGame = {"post_class": "in-on-out"}
    wrapper = shallow(<GameCard 
      game={mockBadGameForGameCard}   // game_postclass is wrong
      handleRoute={mockHandleRoute}
    />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should invoke handleRoute based on click', () => {
    wrapper.find('.game-container-card').simulate('click')
    expect(mockHandleRoute).toHaveBeenCalledWith(836)
  })
})