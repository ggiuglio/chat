import React, { useEffect } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { loadMessages } from '../store/actions/actionsCreator';
import { getMessages } from '../store/selectors/selector';
import Message from './message';
import body_BG from '../assets/images/body_BG.png';
import NewMessage from '../newMessage/newMessage';

const ChatContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('${body_BG}');
  background-size: cover;
`;
const Messages = styled.div`
  width: 100vw;
  max-height: calc(100vh - 80px);
  overflow: auto;
  padding: 16px 24px;
  box-sizing: border-box;
  @media (min-width: 700px) {
    max-width: 640px;
    margin-left: auto;
    margin-right:auto;
  }
`;

const Chat = ({ fetchMessages, messages }) => {
  useEffect(() => {
    fetchMessages();
  }, []);

  return <ChatContainer>
    <Messages>
      {
        messages.map(message =>
          <Message key={message._id} message={message} />
        )
      }
    </Messages>
    <NewMessage />
  </ChatContainer >
}

const mapStateToProps = state => {
  return {
    messages: getMessages(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMessages: () => dispatch(loadMessages()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);