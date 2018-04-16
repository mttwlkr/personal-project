import React from 'react';
import { VideoPlayer, mapStateToProps, mapDispatchToProps } from './VideoPlayer.js';
import { shallow } from 'enzyme';
import { getSingleVideo } from '../../fetches/get-single-video';
import { mockAPIGamesData } from '../../mock-data/mockData';

jest.mock('../../fetches/get-single-video');

describe('VideoPlayer', () => {

  let wrapper;
  const mockAddSingleGameToStore = jest.fn();
  const mockHistory = {location: {pathname: '/games/836'}}
  const mockLocation = {location: {pathname: '/games/836'}}
  const mockPlayer = [836] 
  const mockCurrentGame = {currentGame: mockAPIGamesData.posts[0]}

  beforeEach(() => {
    wrapper = shallow(<VideoPlayer 
      addSingleGameToStore={mockAddSingleGameToStore}
      games={mockAPIGamesData}
      history={mockHistory}
      location={mockLocation}
      gameForPlayer={mockPlayer}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should pull a singular game if there are games in store', () => {
    wrapper = shallow(<VideoPlayer 
      addSingleGameToStore={mockAddSingleGameToStore}
      games={mockCurrentGame}
      history={mockHistory}
      location={mockLocation}
    />)
    expect(wrapper).toMatchSnapshot()   
  })

  it('should mapStateToProps', () => {
    const mockState = { gameForPlayer: [50], games: {posts: []} }
    const mapped = mapStateToProps(mockState)
    expect(mapped.gameForPlayer).toEqual(mockState.gameForPlayer)
    expect(mapped.games).toEqual(mockState.games)
  })

  it('should mapDispatchToProps correctly', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addSingleGameToStore();
    expect(mockDispatch).toHaveBeenCalled();
  })
})