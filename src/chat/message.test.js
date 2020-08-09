import React from 'react';
import renderer from 'react-test-renderer';
import Message from './message';

describe('Message', () => {
  let component;
  const message = {
    author: 'Giulio',
    message: 'This is my message',
    date: '19 may 2020 18:34'
  }

  beforeEach(() => {
      component = renderer.create(
          <Message message = {message}/>
      );
  });

  it('should render a message', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

});