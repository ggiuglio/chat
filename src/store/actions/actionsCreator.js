import {
  TEST_ACTION,
  LOAD_MESSAGES,
  WRITE_MESSAGE
} from './actionsTypes.js'
import axios from 'axios';

export const testAction = () => {
  return dispatch => {
    dispatch({
      type: TEST_ACTION,
      value: 'test'
    });
  }
}

export const loadMessages = () => {
  return dispatch => {
    return axios.get('https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=80Gbn0C8vA0')
      .then((res) => {
        dispatch({
          type: LOAD_MESSAGES,
          messages: res.data
        });
      })
      .catch((err) => {
        console.log(err)
      });
  }
}

export const postMessage = (author, text) => {
  return dispatch => {
    return axios.post(
      'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0',
      { "message": text, "author": author },
      {
        headers: {
          'content-type': 'application/json',
          'token': '80Gbn0C8vA0'
        }
      }
    ).then((res) => {
      dispatch({
        type: WRITE_MESSAGE,
        message: { author: author, message: text }
      });
    })
      .catch((err) => {
        console.log(err)
      });
  }
}