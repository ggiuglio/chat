import React, { useState } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { postMessage } from '../store/actions/actionsCreator';

const NewMessageBar = styled.div`
  width: 100vw;
  height: 80px;
  position: absolute;
  bottom: 0;
  background-color: #d5dade;
  padding: 10px 20px;
  box-sizing: border-box;
`;
const NewMessageInput = styled.textarea`
  height: 55px;
  width: Calc(100vw - 120px);
  border-radius: 6px;
  resize: none;
`;
const NewMessageButton = styled.button`
  width: 50px;
  margin-left: 12px;
  background-color: #d5dade;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 20px;
  vertical-align: 23px;
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
`

const NewMessage = ({ writeMessage }) => {
  const [messageInput, setMessageInput] = useState('');
  const sendMessage = () => {
    writeMessage(messageInput);
    setMessageInput('');
  };

  return <NewMessageBar>
    <NewMessageInput value={messageInput} onChange={(e) => setMessageInput(e.target.value)} />
    <NewMessageButton  onClick={() => sendMessage()}>Send</NewMessageButton>
  </NewMessageBar>
}

const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
    writeMessage: (text) => dispatch(postMessage(text)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);