import reducer, { INITIAL_STATE } from './reducer';
import {
  TEST_ACTION,
  LOAD_MESSAGES
} from '../actions/actionsTypes';

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
          myName: 'Giulio',
          messages: [],
          test: true
        }
      )
    })
  })

  describe('when LOAD_MESSAGES is dispatched', () => {
    it('should set test to true', () => {
      const messages = [
        {
          author: 'Tom',
          message: 'Hi this is my first message',
          timeStamp: 1521096122339
        },
        {
          author: 'Lisa',
          message: 'How is the project going?',
          timeStamp: 1521096352339
        },
        {
          author: 'Tom',
          message: 'It proceeds fine?',
          timeStamp: 1521096552339
        },
        {
          author: 'Giulio',
          message: 'Hi, can I have access to the shared folder?',
          timeStamp: 1521096952339
        }
      ];
      const stateMessages = [
        {
          "author": "Tom",
          "id": 0,
          "isMine": false,
          "message": "Hi this is my first message",
          "timeStamp": 1521096122339,
          "date": "Mar 15, 2018 07:42",
        },
        {
          "author": "Lisa",
          "id": 1,
          "isMine": false,
          "message": "How is the project going?",
          "timeStamp": 1521096352339,
          "date": "Mar 15, 2018 07:45",
        },
        {
          "author": "Tom",
          "id": 2,
          "isMine": false,
          "message": "It proceeds fine?",
          "timeStamp": 1521096552339,
          "date": "Mar 15, 2018 07:49",
        },
        {
          "author": "Giulio",
          "id": 3,
          "isMine": true,
          "message": "Hi, can I have access to the shared folder?",
          "timeStamp": 1521096952339,
          "date": "Mar 15, 2018 07:55",
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
          messages: stateMessages,
          test: false
        }
      )
    })
  })
})