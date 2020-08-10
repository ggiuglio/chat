import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { loadMessagesMock } from '../store/actions/actionsCreator';
import ReactTestUtils from 'react-dom/test-utils';


import Chat from './chat';
const { act } = renderer;


const mockStore = configureStore([]);

describe('Chat container', () => {
  let store;
  let component;
  const stateMessages = [
    {
      "author": "Tom",
      "_id": 0,
      "isMine": false,
      "message": "Hi this is my first message",
      "date": "1/19/1970",
    },
    {
      "author": "Lisa",
      "_id": 1,
      "isMine": false,
      "message": "How is the project going?",
      "date": "1/19/1970",
    },
    {
      "author": "Tom",
      "_id": 2,
      "isMine": false,
      "message": "It proceeds fine?",
      "date": "1/19/1970",
    },
    {
      "author": "Giulio",
      "_id": 3,
      "isMine": true,
      "message": "Hi, can I have access to the shared folder?",
      "date": "1/19/1970",
    },
  ];

  beforeEach(() => {
    store = mockStore({
      messages: stateMessages
    });
    store.dispatch = jest.fn();
    act(() => {
      component = renderer.create(
        <Provider store={store}>
          <Chat />
        </Provider>
      );
    });
  });

  it('should dispatch loadMessagesMock action', () => {
    expect(store.dispatch).toHaveBeenCalledTimes(1)
  });

  it('should render message list', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

});