import React from "react";
import styled from "styled-components";
import SignupCheckbox from "../signupCheckbox/signupCheckbox";

const SignupNoticeWrapper = styled.div`
  border: 1px solid rgb(219, 219, 219);
  padding: 0px 23px 6px 16px;
`;

const SignupNotice = ({ handleNoticeInput, notice }) => {
  return (
    <SignupNoticeWrapper>
      {notice.map((item) => (
        <SignupCheckbox
          key={item.id}
          id={item.id}
          handleNoticeInput={handleNoticeInput}
          state={item.state}
          name={item.name}
          label={item.label}
        />
      ))}
    </SignupNoticeWrapper>
  );
};

export default SignupNotice;
