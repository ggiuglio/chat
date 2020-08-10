import reducer, { INITIAL_STATE } from './reducer';
import {
  LOAD_MESSAGES
} from '../actions/actionsTypes';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  describe('when LOAD_MESSAGES is dispatched', () => {
    it('should set test to true', () => {
      const messages = [
        {
          _id: 0,
          author: 'Tom',
          message: 'Hi this is my first message',
          timestamp: 1521096122339
        },
        {
          _id: 1,
          author: 'Lisa',
          message: 'How is the project going?',
          timestamp: 1521096352339
        },
        {
          _id: 2,
          author: 'Tom',
          message: 'It proceeds fine?',
          timestamp: 1521096552339
        },
        {
          _id: 3,
          author: 'Giulio',
          message: 'Hi, can I have access to the shared folder?',
          timestamp: 1521096952339
        }
      ];
      const stateMessages = [
        {
          author: "Tom",
          _id: 0,
          isMine: false,
          message: "Hi this is my first message",
          timestamp: 1521096122339,
          date: "Mar 15, 2018 07:42",
        },
        {
          author: "Lisa",
          _id: 1,
          isMine: false,
          message: "How is the project going?",
          timestamp: 1521096352339,
          date: "Mar 15, 2018 07:45",
        },
        {
          author: "Tom",
          _id: 2,
          isMine: false,
          message: "It proceeds fine?",
          timestamp: 1521096552339,
          date: "Mar 15, 2018 07:49",
        },
        {
          author: "Giulio",
          _id: 3,
          isMine: true,
          message: "Hi, can I have access to the shared folder?",
          timestamp: 1521096952339,
          date: "Mar 15, 2018 07:55",
        },
      ];
      expect(
        reducer(INITIAL_STATE, {
          type: LOAD_MESSAGES,
          messages: messages
        })
      ).toEqual(
        {
          myName: 'Giulio',
          myToken: "qSdDhODv3pca",
          messages: stateMessages,
          test: false
        }
      )
    })
  })
})