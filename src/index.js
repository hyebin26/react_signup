import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App";
import SignupPresenter from "./component/signup/signup_presenter";
import StubSignup from "./component/signup/test/stub_signup";
import { store } from "./store";
import { Provider } from "react-redux";

const signupPresenter = new SignupPresenter(new StubSignup());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App signupPresenter={signupPresenter} />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
