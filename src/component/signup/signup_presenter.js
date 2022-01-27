export default class SignupPresenter {
  constructor(signupFetch) {
    this.signupFetch = signupFetch;
  }
  async onHandleTextBlur(target) {
    const MAX_TEXT = 15;
    const MIN_TEXT = 2;
    const falseText = target.nextSibling;
    if (target.value.length < MIN_TEXT) {
      falseText.textContent = "2글자 이상 입력해주세요.";
      return;
    }
    if (target.value.length > MAX_TEXT) {
      falseText.textContent = "15글자 이하로 입력해주세요.";
      return;
    }
    if (target.id === "닉네임") {
      const checkNickname = await this.signupFetch.checkNickname(target.value);
      if (checkNickname) {
        falseText.textContent = "이미 사용중인 별명입니다.";
        return;
      }
      if (!checkNickname) {
        falseText.textContent = "";
        return;
      }
    }
    falseText.textContent = "";
  }
  onHandlePwdBlur(target) {
    const MIN_PWD = 8;
    const engNum = /^[a-zA-Z0-9]*$/;
    if (target.value.length < MIN_PWD || !engNum.test(target.value)) {
      target.nextSibling.textContent =
        "비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.";
      return;
    }
    if (target.id === "비밀번호 확인") {
      const pwd = document.getElementById("비밀번호").value;
      if (pwd !== target.value) {
        target.nextSibling.textContent = "비밀번호가 일치하지 않습니다.";
        return;
      }
      if (pwd === target.value) {
        target.nextSibling.textContent = pwd.value;
        return;
      }
    }
    target.nextSibling.textContent = "";
  }
  async onHandleCheckId(btn) {
    const target = document.getElementById("아이디");
    const falseText = target.nextSibling;
    if (falseText.textContent.length <= 2) {
      const checkId = await this.signupFetch.checkId(target.value);
      if (checkId) {
        falseText.textContent = "이미 사용중인 아이디입니다.";
        btn.textContent = "아이디 중복확인";
      }
      if (!checkId) {
        target.style = "background:rgb(206 206 206);";
        btn.textContent = "아이디 중복 확인 완료";
      }
    }
  }

  onHandleNoticeInput(update, id) {
    update((prevState) => {
      prevState.map((item) => {
        if (id === 1) {
          return { ...item, state: !item.state };
        }
        if (item.id === id) {
          return { ...item, state: !item.state };
        }
        if (item.id !== id) {
          return item;
        }
      });
    });
  }
}
