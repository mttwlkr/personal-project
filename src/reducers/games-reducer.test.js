import gamesReducer from './games-reducer.js';

describe('gamesReducer', () => {

  it('should return an empty object if state is undefined', () => {
    const answer = gamesReducer(undefined, "");
    expect(answer).toEqual({});
  });

  it('should return an object of games if stat is defined', () => {
    const mockAction = {
      type: "ADD_GAMES_TO_STORE", 
      games: {posts: ['Johnny Moesley vs Johnny Moesley']}
    };
    const answer = gamesReducer({}, mockAction);
    expect(answer).toEqual(mockAction.games);
  });

  it('should add a currentGame object to the store', () => {
    const mockCurrentState = 
    { games: { 
      "current_page": 1,
      "total_pages": 42,
      "posts": 
        [{"id": 850, title: "jmo vs jmo"}] 
    } 
    };

    const mockAction = {
      type: "ADD_SINGLE_GAME_TO_STORE", 
      currentGame: {id: 666, title: 'Johnny Moesley vs Johnny Moesley'}
    };

    const expected = { 
      "games": { 
        "current_page": 1,
        "total_pages": 42,
        "posts": 
          [{"id": 850, "title": "jmo vs jmo"}] 
      },
      "currentGame": {"id": 666, "title": "Johnny Moesley vs Johnny Moesley"}
    };
    const answer = gamesReducer(mockCurrentState, mockAction);
    expect(answer).toEqual(expected);
  });
});