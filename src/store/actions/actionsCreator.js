import {
  LOAD_MESSAGES,
  WRITE_MESSAGE
} from './actionsTypes.js'
import axios from 'axios';

export const loadMessages = () => {
  return (dispatch, getState) => {
    const token = getState().myToken;
    return axios.get(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=${token}`)
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

export const postMessage = (text) => {
  return (dispatch, getState) => {
    const author = getState().myName;
    const token = getState().myToken;
    return axios.post(
      'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0',
      { "message": text, "author": author },
      {
        headers: {
          'content-type': 'application/json',
          'token': token
        }
      }
    ).then((res) => {

      dispatch({
        type: WRITE_MESSAGE,
        message: res.data
      });
    })
      .catch((err) => {
        console.log(err)
      });
  }
}