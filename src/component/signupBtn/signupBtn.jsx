import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 0.5rem 0;
  margin: 1.4rem 0;
  border: 1px solid rgb(218, 220, 224);
  background:${(props) =>
    props.name === "회원가입하기"
      ? "background-color: #35c5f0;"
      : "rgb(247, 248, 250);"}
  color: rgb(194, 200, 204);
  ${(props) =>
    props.name === "회원가입하기"
      ? "color: #fff;background-color: #35c5f0;border:1px solid #35c5f0;&:hover{border-color: #09addb;background-color: #09addb;}"
      : "color: rgb(194, 200, 204);background:rgb(247, 248, 250);border:1px solid rgb(218, 220, 224);&:hover{background-color: #fff;border-color: #35c5f0;color: #35c5f0;}"}
  cursor: pointer;
  transition: 0.2s border-color, 0.2s background-color, 0.2s color;
`;

const SignupBtn = ({ title, handleOnClick }) => {
  const onClick = (e) => {
    e.preventDefault();
    handleOnClick(e.target);
  };
  return (
    <>
      <Button onClick={onClick} name={title}>
        {title}
      </Button>
    </>
  );
};

export default SignupBtn;
