import React, { useEffect } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { loadMessages } from '../store/actions/actionsCreator';
import { postMessage } from '../store/actions/actionsCreator';
import { getMessages } from '../store/selectors/selector';

import { loadMessagesMock } from '../store/actions/actionsCreator';

const ChatContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Chat = ({ fetchMessages, writeMessage, messages }) => {
  useEffect(() => {
    fetchMessages();
  }, []);

  return <ChatContainer>
    {
      messages.map(message =>
        <div key={message.id}>
          <div>
            {message.author}
          </div>
          <div>
            {message.message}
          </div>
        </div>
      )
    }
  </ChatContainer>
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