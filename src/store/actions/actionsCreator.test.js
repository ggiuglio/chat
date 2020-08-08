import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  TEST_ACTION
} from './actionsTypes.js'
import { testAction } from './actionsCreator'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {

  describe('testAction', () => {
    it('dispatches a TEST_ACTION action', () => {
      const store = mockStore({ test: 'test' })

      store.dispatch(testAction());

      expect(store.getActions()).toContainEqual({ type: TEST_ACTION, value: 'test' });
    })
  })
})