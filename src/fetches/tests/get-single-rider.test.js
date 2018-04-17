import { getSingleRider } from '../get-single-rider.js';
import { mockAPIRidersData } from '../../mock-data/mockData.js';

describe('getSingleRider', () => {

  const mockRider = mockAPIRidersData[0];
  const mockRiderId = 30;

  it('should return a single game if response is good', async () => {

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve( mockRider )
    }));

    const answer = await getSingleRider(mockRiderId);
    expect(answer).toEqual(mockRider);
  });

  it('should return an error if response is bad', async () => {

    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));

    const expected = {status: 500};
    expect(getSingleRider()).rejects.toEqual(expected);
  });
});