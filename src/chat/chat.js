import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';

const ChatContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Chat = () => {
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);