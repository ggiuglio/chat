import reducer, { INITIAL_STATE } from './reducer';
import {
  TEST_ACTION,
} from '../actions/actionsTypes';
import INITIAL_STATE from './reducer';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  describe('when TEST_ACTION is dispatched', () => {
    it('should set test to true', () => {
      expect(
        reducer(INITIAL_STATE, {
          type: TEST_ACTION,
          test: 'some test value'
        })
      ).toEqual(
        {
          test: true
        }
      )
    })
  })
})