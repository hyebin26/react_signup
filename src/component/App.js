import "./App.css";
import Signup from "./signup/signup";

function App({ signupPresenter }) {
  return (
    <>
      <Signup signupPresenter={signupPresenter} />
    </>
  );
}

export default App;
