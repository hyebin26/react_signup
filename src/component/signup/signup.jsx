import React, { useCallback, useState } from "react";
import SignupForm from "../signupForm/signupForm";
import SignupTitle from "../signupTitle/signupTitle";
import styled from "styled-components";

const Section = styled.section`
  max-width: 400px;
  margin: 0 auto;
  padding-top: 100px;
`;

const noticeInputArray = [
  {
    id: 1,
    state: false,
    name: "allAgree",
    label: "전체동의",
    need: false,
    needCheck: false,
  },
  {
    id: 2,
    state: false,
    name: "ageAgree",
    label: "만 14세 이상입니다",
    need: true,
    needCheck: false,
  },
  {
    id: 3,
    state: false,
    name: "policyAgree",
    label: "이용약관",
    need: true,
    needCheck: false,
  },
  {
    id: 4,
    state: false,
    name: "infoAgree",
    label: "개인정보수집 및 이용동의",
    need: true,
    needCheck: false,
  },
  {
    id: 5,
    state: false,
    name: "eventAgree",
    label: "이벤트, 프로모션 알림 메일 및 SMS수신",
    need: false,
    needCheck: false,
  },
];

function Signup({ signupPresenter }) {
  const [notice, setNotice] = useState(noticeInputArray);
  const handleNoticeInput = (id) => {
    if (id === 1) {
      setNotice((prev) =>
        prev.map((item2) => {
          return { ...item2, state: !item2.state, needCheck: false };
        })
      );
    }
    if (id !== 1) {
      setNotice((prevState) =>
        prevState.map((item) => {
          if (item.id === id) {
            return { ...item, state: !item.state, needCheck: false };
          }
          if (item.id !== id) {
            return item;
          }
        })
      );
    }
  };
  const onSubmitSignup = async (e) => {
    e.preventDefault();
    const id = document.getElementById("아이디");
    const nickname = document.getElementById("닉네임");
    const password = document.getElementById("비밀번호");
    const rePassword = document.getElementById("비밀번호 확인");
    signupPresenter.onHandleTextBlur(id);
    signupPresenter.onHandleCheckId(id);
    signupPresenter.onHandleTextBlur(nickname);
    signupPresenter.onHandlePwdBlur(password);
    signupPresenter.onHandlePwdBlur(rePassword);
    let allFalseText = document.querySelectorAll(".falseText");
    let allCheckBox = document.querySelectorAll(".falseInput");
    allFalseText = [...allFalseText];
    allCheckBox = [...allCheckBox];
    allFalseText = allFalseText.filter((item) => item.textContent.length > 2);
    allCheckBox.map((item) => {
      if (item.children[0].textContent === "") {
        allFalseText.push(item);
        setNotice((prev) =>
          prev.map((prevItem) =>
            prevItem.id === item.dataset.id * 1
              ? { ...prevItem, needCheck: true }
              : prevItem
          )
        );
      }
    });
    if (allFalseText.length) {
      window.scrollTo(0, allFalseText[0].offsetTop - 150);
    }
    if (!allFalseText.length) {
      alert("회원가입 대성공!");
    }
  };
  const handleTextBlur = useCallback(
    (target) => {
      signupPresenter.onHandleTextBlur(target);
    },
    [signupPresenter.onHandleTextBlur]
  );
  const handlePwdBlur = useCallback(
    (target) => {
      signupPresenter.onHandlePwdBlur(target);
    },
    [signupPresenter.onHandlePwdBlur]
  );
  const handleCheckId = useCallback(
    (target) => {
      signupPresenter.onHandleCheckId(target);
    },
    [signupPresenter.onHandleCheckId]
  );
  return (
    <Section>
      <SignupTitle />
      <SignupForm
        handleNoticeInput={handleNoticeInput}
        notice={notice}
        onSubmitSignup={onSubmitSignup}
        handleTextBlur={handleTextBlur}
        handlePwdBlur={handlePwdBlur}
        handleCheckId={handleCheckId}
      />
    </Section>
  );
}

export default Signup;
