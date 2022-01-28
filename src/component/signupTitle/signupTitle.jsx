import React from "react";
import styled from "styled-components";

const Logo = styled.h2`
  font-weight: 800;
  position: absolute;
  top: 0;
  left: 0;
`;
const Title = styled.h3`
  font-size: 1.2rem;
`;
const Wrapper = styled.div``;

const SignupTitle = React.memo(() => {
  return (
    <Wrapper>
      <Logo>오늘의집</Logo>
      <Title>회원가입</Title>
    </Wrapper>
  );
});

export default SignupTitle;
