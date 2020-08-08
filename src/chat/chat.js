import React, { useEffect } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { loadMessages } from '../store/actions/actionsCreator';
import { postMessage } from '../store/actions/actionsCreator';


const ChatContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Chat = ({ getMessages, writeMessage }) => {
  useEffect(() => {
    getMessages();

    writeMessage('Giulio', 'My first test message');
  });

  return <ChatContainer>
    This is where the chat will sit
  </ChatContainer>
}

const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => dispatch(loadMessages()),
    writeMessage: (author, text) => dispatch(postMessage(author, text))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);