import React from "react";
import SignupInput from "../signupInput/signupInput";
import styled from "styled-components";
import SignupBtn from "../signupBtn/signupBtn";

const SignupFormWrapper = styled.div``;

const Select = styled.select`
  padding: 0.4rem 0.3rem;
  width: 45%;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  outline: none;
`;

const SignupForm = (props) => {
  return (
    <SignupFormWrapper>
      <SignupInput type="text" title="이메일">
        @
        <Select name="email" id="email">
          <option value="">선택해주세요</option>
          <option value="naver.com">naver.com</option>
          <option value="google.com">google.com</option>
        </Select>
        <SignupBtn title="이메일 인증하기" />
      </SignupInput>
      <SignupInput
        type="password"
        title="비밀번호"
        detail="영문,숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
      />
      <SignupInput type="password" title="비밀번호 확인"></SignupInput>
      <SignupInput
        type="text"
        title="닉네임"
        detail="다른 유저와 겹치지 않는 별명을 입력해주세요.(2~15자)"
      />
      <SignupBtn title="회원가입하기" />
    </SignupFormWrapper>
  );
};

export default SignupForm;
