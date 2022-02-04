import React from "react";
import styled from "styled-components";
import { BsCameraVideo } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { MdOutlineCallToAction } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const MessageWrapper = styled.div`
  position: absolute;
  bottom: -130px;
  left: -170px;
  width: 20rem;
  background: white;
  border-radius: 5px;
  padding: 1rem;
`;
const MessageNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MessageInput = styled.input`
  background: #f2f2f2;
  border: none;
  padding: 0.4rem;
  font-size: 1rem;
  border-radius: 13px;
  width: 100%;
`;
const MessageSearch = styled.div`
  padding: 1rem 0;
`;
const MessageListWrapper = styled.ul``;
const MessageAllWrapper = styled.div``;
const MessageList = styled.li``;
const Messagetitle = styled.h2``;
const MessageNavIconsWrapper = styled.ul`
  display: flex;
  align-items: center;
`;
const MessageNavIconList = styled.li`
  padding: 0.3rem 0.3rem;
  position: relative;
  svg {
    width: 25px;
    height: 25px;
    color: #949494;
  }
  &:hover {
    border-radius: 50%;
    background: #f2f2f2;
    ::after {
      content: "${(prop) => prop.info}";
      bottom: -28px;
      right: 0;
      position: absolute;
      white-space: nowrap;
      color: white;
      background: #3e3e3e;
      padding: 0.2rem;
      font-size: 0.8rem;
      border-radius: 3px;
    }
  }
`;

const MessageBox = (props) => {
  return (
    <MessageWrapper>
      <MessageNav>
        <Messagetitle>Messenger</Messagetitle>
        <MessageNavIconsWrapper>
          <MessageNavIconList info="옵션">
            <BiDotsHorizontalRounded />
          </MessageNavIconList>
          <MessageNavIconList info="messenger에서 모두보기">
            <BsCameraVideo />
          </MessageNavIconList>
          <MessageNavIconList info="새 룸스 만들기">
            <HiOutlineClipboardList />
          </MessageNavIconList>
          <MessageNavIconList info="새 메시지">
            <MdOutlineCallToAction />
          </MessageNavIconList>
        </MessageNavIconsWrapper>
      </MessageNav>
      <MessageSearch>
        <MessageInput placeholder="Messenger 검색" />
      </MessageSearch>
      <MessageListWrapper>
        <MessageList></MessageList>
      </MessageListWrapper>
      <MessageAllWrapper></MessageAllWrapper>
    </MessageWrapper>
  );
};

export default MessageBox;
