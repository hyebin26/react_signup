import React from "react";
import styled from "styled-components";

const SignupCheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.id === "divallAgree"
      ? "padding:1.5rem 0;border-bottom: 1px solid rgb(219, 219, 219);"
      : "padding:0.5rem 0"};
`;
const SignupCheckInput = styled.input`
  display: none;
`;

const SignupCheck = styled.label`
  display: inline-block;
  width: 23px;
  height: 23px;
  border: ${(props) =>
    props.needCheck
      ? "1px solid rgb(255,119,119);"
      : "1px solid rgb(219, 219, 219);"}
  border-radius: 3px;
  position: relative;
  transition: 0.3s background;
  &:hover {
    background: rgb(240, 240, 240);
  }
`;

const SignupForCheck = styled.span`
  color: #fff;
  font-size: 0.9rem;
  background-color: ${(props) => (props.state ? "#35c5f0;" : "")};
  display: block;
  width: 23px;
  height: 23px;
  text-align: center;
  display: block;
  border-radius: 3px;
`;

const SignupLabelText = styled.label`
  padding-left: 0.4rem;
`;

const SignupNeed = styled.span`
  padding-left: 0.2rem;
  ${({ name }) =>
    name === "eventAgree" ? "rgb(219, 219, 219)" : "color:#09addb"}
`;

const SignupCheckbox = ({
  name,
  label,
  state,
  handleNoticeInput,
  id,
  need,
  needCheck,
}) => {
  const handleClickCheckInput = (e) => {
    handleNoticeInput(id);
  };
  console.log(needCheck);
  return (
    <SignupCheckBoxWrapper id={"div" + name}>
      <SignupCheckInput
        type="checkbox"
        id={name}
        onClick={handleClickCheckInput}
        checked={state ? true : false}
      />
      <SignupCheck
        htmlFor={name}
        className={need ? "falseInput" : ""}
        needCheck={needCheck}
        data-id={id}
      >
        <SignupForCheck state={state}>{state ? "✔" : ""}</SignupForCheck>
      </SignupCheck>
      <SignupLabelText htmlFor={name}>{label}</SignupLabelText>
      <SignupNeed name={name}>
        {name === "eventAgree" ? "(선택)" : name === "allAgree" ? "" : "(필수)"}
      </SignupNeed>
    </SignupCheckBoxWrapper>
  );
};

export default SignupCheckbox;
