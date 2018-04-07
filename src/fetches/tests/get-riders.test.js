import { getRiders } from '../get-riders';
import { mockAPIRidersData } from '../../mock-data/mockData'

describe('getRiders', () => {

  it('if good response, should return a riders object with an array of riders', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        mockAPIRidersData
      })
    }))

    const response = await getRiders()
    expect(response.mockAPIRidersData).toEqual(mockAPIRidersData)
  })

  it('if bad response, throw error', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }))

    const expected = {status: 500}
    expect(getRiders()).rejects.toEqual(expected)
  })

})