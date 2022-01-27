import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App";
import SignupPresenter from "./component/signup/signup_presenter";
import StubSignup from "./component/signup/test/stub_signup";

const signupPresenter = new SignupPresenter(new StubSignup());

ReactDOM.render(
  <React.StrictMode>
    <App signupPresenter={signupPresenter} />
  </React.StrictMode>,
  document.getElementById("root")
);
