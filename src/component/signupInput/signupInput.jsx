import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 1rem;
  padding-bottom: 0.2rem;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.4rem 0.3rem;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  transition: border-color 0.2s, background-color 0.2s;
  &:hover {
    background-color: #fafafa;
    border-color: #bdbdbd;
  }
`;

const Detail = styled.p`
  font-size: 0.8rem;
  color: rgb(117, 117, 117);
  padding-bottom: 0.5rem;
`;

const SignupInputWrapper = styled.div`
  padding: 0.7rem 0;
`;
const SignupFalse = styled.p`
  color: rgb(255, 119, 119);
  font-size: 0.8rem;
  padding: 0.5rem 0;
`;

const SignupInput = ({ title, type, children, detail, onHandleBlur }) => {
  const handleBlur = (e) => {
    onHandleBlur(e.target);
  };
  return (
    <SignupInputWrapper>
      <Title>{title}</Title>
      <Detail>{detail}</Detail>
      <Input type={type} placeholder={title} id={title} onBlur={handleBlur} />
      <SignupFalse></SignupFalse>
      {children}
    </SignupInputWrapper>
  );
};

export default SignupInput;
