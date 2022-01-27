import SignupPresenter from "../signup_presenter";
import StubSignup from "./stub_signup";

describe("Signup Presenter", () => {
  let signupPresenter;

  beforeEach(() => {
    signupPresenter = new SignupPresenter(new StubSignup());
  });

  describe("Blur 이벤트", () => {
    it("false: 닉네임,아이디 2글자 미만", () => {
      document.body.innerHTML = "<input id='target' value='1'/><p></p>";
      const target = document.getElementById("target");
      signupPresenter.onHandleTextBlur(target);
      expect(target.nextSibling.textContent).toBe("2글자 이상 입력해주세요.");
    });
    it("false: 닉네임, 아이디 16글자 이상", () => {
      document.body.innerHTML =
        "<input id='target' value='dddddddddddddddddddddd'/><p></p>";
      const target = document.getElementById("target");
      signupPresenter.onHandleTextBlur(target);
      expect(target.nextSibling.textContent).toBe(
        "15글자 이하로 입력해주세요."
      );
    });
    it("success:닉네임,아이디", () => {
      document.body.innerHTML = "<input id='target' value='asdasd123'/><p></p>";
      const target = document.getElementById("target");
      signupPresenter.onHandleTextBlur(target);
      expect(target.nextSibling.textContent).toBe("");
    });
    it("fasle: 비밀번호 8글자 미만", () => {
      document.body.innerHTML =
        "<input type='password' id='target' value='asdasd123'/><p></p>";
    });
    it("fasle: 비밀번호 불일치", () => {
      document.body.innerHTML =
        "<input type='password' id='비밀번호' value='asdasd123123'/><p></p>" +
        "<input type='password'  id='비밀번호 확인' value='asdasd123'/><p></p>";
      const target = document.getElementById("비밀번호 확인");
      signupPresenter.onHandlePwdBlur(target);
      expect(target.nextSibling.textContent).toBe(
        "비밀번호가 일치하지 않습니다."
      );
    });
    it("success: 비밀번호", () => {
      document.body.innerHTML =
        "<input type='password' id='비밀번호' value='asdasd123'/><p></p>" +
        "<input type='password' id='비밀번호 확인' value='asdasd123'/><p></p>";
      const target = document.getElementById("비밀번호 확인");
      signupPresenter.onHandlePwdBlur(target);
      expect(target.nextSibling.textContent).toBe("");
    });
  });
  describe("중복확인", () => {
    describe("닉네임", () => {
      it("false: 닉네임 중복", async () => {
        document.body.innerHTML = "<input id='닉네임' value='test'/><p></p>";
        const target = document.getElementById("닉네임");
        await signupPresenter.onHandleTextBlur(target);
        expect(target.nextSibling.textContent).toBe(
          "이미 사용중인 별명입니다."
        );
      });
      it("success: 닉네임 중복되지 않음", async () => {
        document.body.innerHTML = "<input id='닉네임' value='1233'/><p></p>";
        const target = document.getElementById("닉네임");
        await signupPresenter.onHandleTextBlur(target);
        expect(target.nextSibling.textContent).toBe("");
      });
    });
    describe("아이디", () => {
      it("false: 아이디 중복", async () => {
        document.body.innerHTML = "<input id='아이디' value='test'/><p></p>";
        const target = document.getElementById("아이디");
        await signupPresenter.onHandleCheckId(target);
        expect(target.nextSibling.textContent).toBe(
          "이미 사용중인 아이디입니다."
        );
      });
      it("success: 아이디 중복되지 않음", async () => {
        document.body.innerHTML = "<input id='아이디' value='123123'/><p></p>";
        const target = document.getElementById("아이디");
        await signupPresenter.onHandleCheckId(target);
        expect(target.nextSibling.textContent).toBe("");
      });
    });
  });
  async function onClickSignupBtn() {
    const id = document.getElementById("아이디");
    const nickname = document.getElementById("닉네임");
    const password = document.getElementById("비밀번호");
    const rePassword = document.getElementById("비밀번호 확인");
    await onHandleCheckId(id);
    onHandlePwdBlur(password);
    onHandlePwdBlur(rePassword);
    await onHandleTextBlur(nicknmae);
    let allFalseText = document.getElementsByClassName("falseText");
    allFalseText = allFalseText.filter((item) => item.textContent > 2);
    if (allFalseText.length) {
      // 불가
    }
    if (!allFalseText.length) {
      // submit
    }
  }
  describe("회원가입", () => {});
});
