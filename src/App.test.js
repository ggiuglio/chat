import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
 
import App from './App';
 
const mockStore = configureStore([]);
 
describe('Main App Component', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      test: 'sample text',
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