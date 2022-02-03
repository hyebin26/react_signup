import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SignupPresenter from "./component/signup/signup_presenter";
import StubSignup from "./component/signup/test/stub_signup";
import { store } from "./store";
import { Provider } from "react-redux";
import faceStore from "./facebook/modules/faceStore";

// const signupPresenter = new SignupPresenter(new StubSignup());

ReactDOM.render(
  // <Provider store={faceStore}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // </Provider>,
  document.getElementById("root")
);
