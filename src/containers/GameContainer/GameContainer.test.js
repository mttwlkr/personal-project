import React from 'react';
import { shallow } from 'enzyme';
import { GameContainer, 
  mapStateToProps, 
  mapDispatchToProps } from './GameContainer.js';
import { mockAPIGamesData, 
  mockHistory, 
  mockMatchForPage2, 
  mockMatchForPage1 } from '../../mock-data/mockData';
import { getGames } from '../../fetches/get-games.js';

jest.mock('../../fetches/get-games');

describe('GameContainer', () => {

  const mockAddGamesToStore = jest.fn();
  const mockAddVideoToPlayer = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GameContainer 
      addGamesToStore={mockAddGamesToStore}
      games={mockAPIGamesData}
      addVideoToPlayer={mockAddVideoToPlayer}
      history={mockHistory}
      match={mockMatchForPage1}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('if game page is greater than 1, it should render previous page buttons', () => {
    const mockBlankAPIGames = {};

    wrapper = shallow(<GameContainer 
      addGamesToStore={mockAddGamesToStore}
      games={mockBlankAPIGames}
      addVideoToPlayer={mockAddVideoToPlayer}
      history={mockHistory}
      match={mockMatchForPage2}
    />);
    expect(wrapper.find('.previous-page-button')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke getGames methods on load and match snapshot if', async () => {
    const mockBlankAPIGames = {};

    wrapper = shallow(<GameContainer 
      addGamesToStore={mockAddGamesToStore}
      games={mockBlankAPIGames}
      addVideoToPlayer={mockAddVideoToPlayer}
      history={mockHistory}
      match={mockMatchForPage2}
    />);
    expect(getGames).toHaveBeenCalledWith(2);
    expect(mockAddGamesToStore).toHaveBeenCalled();
  });

  it('should handle route', () => {
    wrapper.instance().handleRoute();
    expect(mockAddVideoToPlayer).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle page click', () => {
    const mockEvent = {target: {value: 66}};
    wrapper.instance().handlePageClick(mockEvent);
    expect(getGames).toHaveBeenCalled();
    expect(mockAddGamesToStore).toHaveBeenCalled();
  });

  it('should invoke handlePageClick on page number click', () => {
    expect(wrapper.state('loading')).toEqual(false);
    let mockEvent = {target: {value: 2}};
    wrapper.find('.next-page-button').simulate('click', mockEvent);
    expect(wrapper.state('loading')).toEqual(true);
    expect(getGames).toHaveBeenCalled();
    expect(mockAddGamesToStore).toHaveBeenCalled();
  });

  it('should map the correct state', () => {
    const mockState = {games: 'henrik vs quinn'};
    const mapped = mapStateToProps(mockState);
    expect(mapped.games).toEqual(mockState.games);
  });

  it('should dispatch the correct props', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addGamesToStore();
    mapped.addVideoToPlayer();
    expect(mockDispatch).toHaveBeenCalled();
  });
});