import "./App.css";
import KakaoMap from "./kakaoMap/kakaoMap";
import Signup from "./signup/signup";

function App({ signupPresenter }) {
  return (
    <>
      {/* <Signup signupPresenter={signupPresenter} /> */}
      <KakaoMap></KakaoMap>
    </>
  );
}

export default App;
