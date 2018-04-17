import { getGames } from '../get-games';
import { mockAPIGamesData } from '../../mock-data/mockData';

describe('get games', () => {

  it('should return mockAPIRiders data if good response', async () => {
  
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockAPIGamesData)
    }));

    const response = await getGames();
    expect(response).toEqual(mockAPIGamesData);
  });

  it('should return an error if bad response', async () => {

    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));

    const expected = {status: 500};
    expect(getGames()).rejects.toEqual(expected);
  });
});