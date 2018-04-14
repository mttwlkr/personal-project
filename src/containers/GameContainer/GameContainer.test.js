import React from 'react';
import { shallow } from 'enzyme';
import { GameContainer, mapStateToProps, mapDispatchToProps } from './GameContainer.js';
import { mockAPIGamesData } from '../../mock-data/mockData';
import { getGames } from '../../fetches/get-games.js'

jest.mock('../../fetches/get-games')

describe('GameContainer', () => {

  const mockAddGamesToStore = jest.fn();
  const mockAddVideoToPlayer = jest.fn();
  const mockHistory = { 
    location: "/games/",
    pathname: "/games/870" }
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GameContainer 
      addGamesToStore={mockAddGamesToStore}
      games={mockAPIGamesData}
      addVideoToPlayer={mockAddVideoToPlayer}
      history={mockHistory}
    />) 
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should invoke addGamesToStore and getGames methods on load', () => {
    expect(mockAddGamesToStore).toHaveBeenCalled()
    expect(getGames).toHaveBeenCalled()
  })

  it('should handle route', () => {

    // expect(addVideoToPlayer).toHaveBeenCalled()
  })

  it('should handle page click', () => {
    
  })

  it('should map the correct state', () => {
    const mockState = {games: 'henrik vs quinn'}
    const mapped = mapStateToProps(mockState)
    expect(mapped.games).toEqual(mockState.games)
  })

  it('should dispatch the correct props', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch)
    mapped.addGamesToStore()
    mapped.addVideoToPlayer()
    expect(mockDispatch).toHaveBeenCalled()
  })

})