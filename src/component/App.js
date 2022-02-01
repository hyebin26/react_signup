import "./App.css";
import Chat from "./chat/chat";
import KakaoMap from "./kakaoMap/kakaoMap";
import Signup from "./signup/signup";

function App({ signupPresenter }) {
  return (
    <>
      {/* <Signup signupPresenter={signupPresenter} /> */}
      <Chat></Chat>
      {/* <KakaoMap></KakaoMap> */}
    </>
  );
}

export default App;
