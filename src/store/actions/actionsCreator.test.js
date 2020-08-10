import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import thunk from 'redux-thunk';
import {
  LOAD_MESSAGES
} from './actionsTypes.js';
import {
  testAction,
  loadMessages,
  postMessage
} from './actionsCreator';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('axios');


describe('async actions', () => {

  describe('loadMessage', () => {
    it('should dipatch LOAD_MESSAGE action with the list of messages fetched from the server', () => {
      const messageList = [
        {
          author: 'Giulio',
          message: 'test message',
          timeStamp: 1521096352339
        },
        {
          author: 'Tom',
          message: 'another test message',
          timeStamp: 1521027352339
        }
      ];

      axios.get = jest.fn().mockResolvedValue({ data: messageList });
      const store = mockStore({ test: 'test' })

      return store.dispatch(loadMessages()).then(() => {
        expect(store.getActions()).toContainEqual({ type: LOAD_MESSAGES, messages: messageList });
      });
    });
  });

  describe('postMessage', () => {
    it('should make a POST http request passing the message to post', () => {

      axios.post = jest.fn().mockResolvedValue({ data: 'success' });
      const store = mockStore({ myName: 'Giulio', myToken: "80Gbn0C8vA0" })

      return store.dispatch(postMessage('test message'));
      expect(axios.post).toHaveBeenCalledWith(
        "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0",
        { "author": "Giulio", "message": "test message" },
        { "headers": { "content-type": "application/json", "token": "80Gbn0C8vA0" } }
      );
    });
    it('should dispatch WRITE_MESSAGE action when successfull', () => {
      const message = {
        _id: 0,
        author: 'Giulio',
        message: 'test message',
        timeStamp: 1521096352339
      };

      axios.post = jest.fn().mockResolvedValue({ data: message });
      const store = mockStore({ myName: 'Giulio', myToken: "80Gbn0C8vA0" })

      return store.dispatch(postMessage('test message')).then(() => {
        expect(store.getActions()).toContainEqual({ "message": message, "type": "WRITE_MESSAGE" });
      });
    })
  });
});