import {
  TEST_ACTION
} from './actionsTypes.js'
 
export const testAction = () => {
  return dispatch => {
    dispatch({
      type: TEST_ACTION
    });
  }
}