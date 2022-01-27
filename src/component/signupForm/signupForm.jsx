import React from "react";
import SignupInput from "../signupInput/signupInput";
import styled from "styled-components";
import SignupBtn from "../signupBtn/signupBtn";
import SignupNotice from "../signupNotice/signupNotice";

const SignupFormWrapper = styled.form``;

const SignupForm = ({ handleNoticeInput, notice }) => {
  const onHandleBlur = (target) => {
    console.log(target);
  };
  return (
    <SignupFormWrapper>
      <SignupInput
        type="text"
        title="아이디"
        onHandleBlur={onHandleBlur}
        detail="다른 유저와 겹치지 않는 아이디를 입력해주세요.(2~15자)"
      >
        <SignupBtn title="아이디 중복확인" />
      </SignupInput>
      <SignupInput
        type="password"
        title="비밀번호"
        detail="영문,숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
        onHandleBlur={onHandleBlur}
      />
      <SignupInput
        type="password"
        title="비밀번호 확인"
        onHandleBlur={onHandleBlur}
      />
      <SignupInput
        type="text"
        title="닉네임"
        detail="다른 유저와 겹치지 않는 별명을 입력해주세요.(2~15자)"
        onHandleBlur={onHandleBlur}
      />
      <SignupNotice handleNoticeInput={handleNoticeInput} notice={notice} />
      <SignupBtn title="회원가입하기" />
    </SignupFormWrapper>
  );
};

export default SignupForm;
