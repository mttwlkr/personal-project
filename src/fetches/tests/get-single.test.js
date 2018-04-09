import { getSingle } from '../get-single.js';
import { mockAPIGamesData } from '../../mock-data/mockData.js'

describe('getSingle', () => {

  const mockGame = mockAPIGamesData.posts[0]
  const mockURL = '/games/500'

  it('should return a single game if response is good', async () => {

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve( mockGame )
    }))

    const answer = await getSingle(mockURL)
    expect(answer).toEqual(mockGame)
  })

  it('should return an error if response is bad', async () => {

    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }))

    const expected = {status: 500}
    expect(getSingle()).rejects.toEqual(expected)
  })
})