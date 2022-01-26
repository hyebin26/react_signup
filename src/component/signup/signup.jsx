import React from "react";
import SignupForm from "../signupForm/signupForm";
import SignupTitle from "../signupTitle/signupTitle";
import styled from "styled-components";

const Section = styled.section`
  max-width: 300px;
  margin: 0 auto;
  padding-top: 100px;
`;

function Signup(props) {
  return (
    <Section>
      <SignupTitle />
      <SignupForm />
    </Section>
  );
}

export default Signup;
