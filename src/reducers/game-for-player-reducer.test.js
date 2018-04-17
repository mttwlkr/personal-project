import gameForPlayer from './game-for-player-reducer.js';

describe('gameForPlayer', () => {

  it('should return an array if state is undefined', () => {
    const answer = gameForPlayer(undefined, '');
    expect(answer).toEqual([]);
  });

  it('should put the newest id at index zero of the state array', () => {
    const mockState = [40];
    const expected = [50, 40];
    const mockAction = { type: 'ADD_VIDEO_TO_PLAYER', id: 50};
    const answer = gameForPlayer(mockState, mockAction);
    expect(answer).toEqual(expected);
  });
});