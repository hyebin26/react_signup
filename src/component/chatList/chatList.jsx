import React from "react";
import styled from "styled-components";

const ChattingList = styled.li``;

const ChatList = ({ name, message, time }) => {
  return (
    <ChattingList>
      <span>{name}: </span>
      <span>{message}</span>
      <span>{time}</span>
    </ChattingList>
  );
};

export default ChatList;
