import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ChatList from "../chatList/chatList";
import io from "socket.io-client";

const ChatWrapper = styled.div``;
const ChatUl = styled.ul`
  width: 500px;
  height: 500px;
  border: 1px solid black;
`;

const socket = io.connect("http://localhost:3001");
const Chat = () => {
  const [chat, setChat] = useState([]);
  const textRef = useRef(null);

  const handleChatSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    const today = new Date();
    const hours = today.getHours();
    const min = today.getMinutes();
    const midday = hours >= 12 ? "오후" : "오전";
    const chatUser = localStorage.getItem("chatUser");
    const time =
      hours >= 12
        ? `${midday} ${hours - 12}:${min}`
        : `${midday} ${hours}:${min}`;
    socket.emit("message", {
      name: chatUser,
      message: textRef.current.value,
      time,
    });
    textRef.current.value = "";
  };

  const handleTextareaKey = (e) => {
    if (e.which === 13 && e.ctrlKey) {
      textRef.current.value = textRef.current.value + "\n";
    }
    if (e.which === 13 && !e.shiftKey && !e.ctrlKey) {
      e.preventDefault();
      handleChatSubmit();
    }
  };
  useEffect(() => {
    socket.on("message", ({ name, message, time }) => {
      setChat((chat) => [...chat, { name, message, time }]);
    });
  }, []);

  useEffect(() => {
    return () => socket.close();
  }, []);
  return (
    <ChatWrapper>
      <h2>Chat Log</h2>
      <ChatUl>
        {chat.length
          ? chat.map((item) => (
              <ChatList
                name={item.name}
                message={item.message}
                time={item.time}
              />
            ))
          : ""}
      </ChatUl>
      <form onSubmit={handleChatSubmit}>
        <h1>Message</h1>
        <textarea onKeyPress={handleTextareaKey} ref={textRef}></textarea>
        <button>전송</button>
      </form>
    </ChatWrapper>
  );
};

export default Chat;
