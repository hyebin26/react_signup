import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 1rem;
  padding-bottom: 0.2rem;
`;
const Input = styled.input`
  width: ${(props) => (props.name === "이메일" ? "50%" : "100%")};
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
`;

const SignupInputWrapper = styled.div`
  padding: 0.7rem 0;
`;

const SignupInput = ({ title, type, children, detail }) => {
  return (
    <SignupInputWrapper>
      <Title>{title}</Title>
      <Detail>{detail}</Detail>
      <Input type={type} placeholder={title} name={title} />
      {children}
    </SignupInputWrapper>
  );
};

export default SignupInput;
