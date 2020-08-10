import React from 'react';
import styled from 'styled-components';

const MessageBox = styled.div`
  padding: 16px;
  width: fit-content;
  max-width: calc(80vw - 40px);
  box-sizing: border-box;
  margin-bottom: 16px;
  border: 1px solid #d5dade;
  background-color: ${({ isMine }) => isMine ? '#fcf6c5' : 'white'};;
  border-radius: 6px;
  font-size: 16px;
  margin-left: ${({ isMine }) => isMine ? 'auto' : '0'};
  @media (min-width: 700px) {
    max-width: 420px;
  }
`;
const Author = styled.div`
  margin-bottom: 4px;
  color: #bbc4c9;
`;
const Text = styled.div`
  margin-bottom: 4px;
`;
const Date = styled.div`
  color: #bbc4c9;
`;

const Message = ({ message }) => {
  return <MessageBox isMine={message.isMine}>
    {
      message.isMine ? '' :
        <Author>
          {message.author}
        </Author>
    }
    <Text>
      {message.message}
    </Text>
    <Date>
      {message.date}
    </Date>
  </MessageBox>

}

export default Message;