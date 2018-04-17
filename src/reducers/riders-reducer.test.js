import ridersReducer from './riders-reducer';
import { mockRiderReducerState, 
  mockRiderReducerActionObject, 
  mockRiderReducerExpected } from '../mock-data/mockData.js';

describe('ridersReducer', () => {

  it('should return an empty array if state undefined', () => {
    const answer = ridersReducer(undefined, '');
    expect(answer).toEqual([]);
  });

  it('should return an array of riders', () => {
    const mockAction = {
      type: "ADD_RIDERS_TO_STORE", 
      riders: [
        {id: 30, name: "Nicky Keefer"}, 
        {id: 23, name: "Torin Yater-Wallace"}
      ]
    };
    const answer = ridersReducer([], mockAction);
    expect(answer).toEqual(mockAction.riders);
  });

  it('should return a new object with the rider and updated stats', () => {
    const answer = ridersReducer(mockRiderReducerState, 
      mockRiderReducerActionObject);
    expect(...answer).toEqual(mockRiderReducerExpected);
  });
});