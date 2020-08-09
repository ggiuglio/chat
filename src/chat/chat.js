import React, { useEffect } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { loadMessages } from '../store/actions/actionsCreator';
import { postMessage } from '../store/actions/actionsCreator';
import { getMessages } from '../store/selectors/selector';
import Message from './message';
import body_BG from '../assets/images/body_BG.png';

import { loadMessagesMock } from '../store/actions/actionsCreator';

const ChatContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('${body_BG}');
  background-size: cover;
  padding: 16px 24px;
  box-sizing: border-box;
`;

const Chat = ({ fetchMessages, writeMessage, messages }) => {
  useEffect(() => {
    fetchMessages();
  }, []);

  return <ChatContainer>
    {
      messages.map(message =>
        <Message key={message.id} message={message} />
      )
    }
  </ChatContainer >
}

const mapStateToProps = state => {
  return {
    messages: getMessages(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMessages: () => dispatch(loadMessagesMock()),
    writeMessage: (author, text) => dispatch(postMessage(author, text))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);