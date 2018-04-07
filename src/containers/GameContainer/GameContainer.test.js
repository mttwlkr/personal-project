import React from 'react';
import { shallow } from 'enzyme';
import { GameContainer, mapStateToProps, mapDispatchToProps } from './GameContainer.js';
import { mockAPIGamesData } from '../../mock-data/mockData';
import { getGames } from '../../fetches/get-games.js'

jest.mock('../../fetches/get-games')

describe('GameContainer', () => {

  const mockAddGamesToStore = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GameContainer 
      addGamesToStore={mockAddGamesToStore} 
    />) 
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should invoke addGamesToStore and getGames methods on load', () => {
    expect(mockAddGamesToStore).toHaveBeenCalled()
    expect(getGames).toHaveBeenCalled()
  })

  it('should map the correct state', () => {
    const mockState = {games: 'henrik vs quinn'}
    const mapped = mapStateToProps(mockState)
    expect(mapped.games).toEqual(mockState.games)
  })

  it('should dispatch the correct props', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch)
    expect(mockAddGamesToStore).toHaveBeenCalled()
  })

})