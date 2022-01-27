class StubSignup {
  async checkId(id) {
    if (id === "test") {
      return await true;
    }
    return await false;
  }
  async checkNickname(id) {
    if (id === "test") {
      return true;
    }
    return false;
  }
}

export default StubSignup;
