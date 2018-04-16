import singleRiderReducer from './single-rider-reducer';
import { riderStatsObject } from '../stats/rider-stats-object.js';
import { mockRiderReducerState, mockRiderReducerActionObject, mockRiderReducerExpected } from '../mock-data/mockData.js';

describe('singleRiderReducer', () => {

  it('should return an empty object if state undefined', () => {
    const answer = singleRiderReducer(undefined, '')
    expect(answer).toEqual({})
  })

  it('should return an object of the current rider', () => {
    const mockAction = {type: "ADD_SINGLE_RIDER_TO_STORE", currentRider: {id: 30, name: "Nicky Keefer"}}
    const answer = singleRiderReducer({}, mockAction)
    expect(answer).toEqual(mockAction.currentRider)
  })

  it('should replace an existing rider with the updated rider', () => {
    const mockStateRider = {id: 30, name: "Nicky Keefer"}
    const mockAction = {type: "ADD_SINGLE_RIDER_TO_STORE", currentRider: {id: 66, name: "Jonny Moeseley"}}
    const answer = singleRiderReducer(mockStateRider, mockAction)
    expect(answer).toEqual(mockAction.currentRider)
  })

  it('should add the riders stats to the riders profile', () => {
    const mockStateRider = {id: 60, name: 'Jonny Moeseley'}
    const mockAction = {type: "ADD_STATS_TO_SINGLE_RIDER", riderStatsObject: {"60": {slvsh_id: 60, Offense: .75}}}
    const answer = singleRiderReducer(mockStateRider, mockAction)
    expect(answer.Offense).toEqual(mockAction.riderStatsObject["60"].Offense)
  })
})