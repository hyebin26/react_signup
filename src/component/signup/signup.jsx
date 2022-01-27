import React, { useReducer, useState } from "react";
import SignupForm from "../signupForm/signupForm";
import SignupTitle from "../signupTitle/signupTitle";
import styled from "styled-components";

const Section = styled.section`
  max-width: 400px;
  margin: 0 auto;
  padding-top: 100px;
`;

const noticeInputArray = [
  { id: 1, state: false, name: "allAgree", label: "전체동의" },
  { id: 2, state: false, name: "ageAgree", label: "만 14세 이상입니다" },
  { id: 3, state: false, name: "policyAgree", label: "이용약관" },
  { id: 4, state: false, name: "infoAgree", label: "개인정보수집 및 이용동의" },
  {
    id: 5,
    state: false,
    name: "eventAgree",
    label: "이벤트, 프로모션 알림 메일 및 SMS수신",
  },
];

function Signup(props) {
  const [notice, setNotice] = useState(noticeInputArray);
  const handleNoticeInput = (id) => {
    setNotice(
      notice.map((item) => {
        if (id === 1) {
          return { ...item, state: !item.state };
        }
        if (item.id === id) {
          return { ...item, state: !item.state };
        }
        if (item.id !== id) {
          return item;
        }
      })
    );
    // 전체동의를 누를 경우
    // 다른 체크박스들의 상태가 변하게
    // 결국 다른 상태들을 가지고 있따가 변경해줘야됨
  };

  return (
    <Section>
      <SignupTitle />
      <SignupForm handleNoticeInput={handleNoticeInput} notice={notice} />
    </Section>
  );
}

export default Signup;
