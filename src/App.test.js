import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
 
import App from './App';
 
const mockStore = configureStore([]);
 
describe('Main App Component', () => {
  let store;
  let component;
  const stateMessages = [
    {
      "author": "Tom",
      "id": 0,
      "isMine": false,
      "message": "Hi this is my first message",
      "timeStamp": "1/19/1970",
    },
    {
      "author": "Lisa",
      "id": 1,
      "isMine": false,
      "message": "How is the project going?",
      "timeStamp": "1/19/1970",
    },
    {
      "author": "Tom",
      "id": 2,
      "isMine": false,
      "message": "It proceeds fine?",
      "timeStamp": "1/19/1970",
    },
    {
      "author": "Giulio",
      "id": 3,
      "isMine": true,
      "message": "Hi, can I have access to the shared folder?",
      "timeStamp": "1/19/1970",
    },
  ];
 
  beforeEach(() => {
    store = mockStore({
      messages: stateMessages
    });
 
    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
 
  it('should render the app', () => {
    expect(component.toJSON()).toBeTruthy();
  });
});