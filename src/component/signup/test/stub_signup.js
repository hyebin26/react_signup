class StubSignup {
  async checkId(id) {
    if (id === "test123") {
      return true;
    }
    return false;
  }
  async checkNickname(nickname) {
    if (nickname === "test123") {
      return true;
    }
    return false;
  }
}

export default StubSignup;
