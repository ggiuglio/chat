import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import Chat from './chat';
 
const mockStore = configureStore([]);
 
describe('Chat container', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      test: 'sample text',
    });
 
    component = renderer.create(
      <Provider store={store}>
        <Chat />
      </Provider>
    );

  });
 
  it('should render hello world message', () => {
    expect(component.toJSON().children[0]).toEqual('This is where the chat will sit');
  });
 
});