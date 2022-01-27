export default class SignupFetch {
  checkId(id) {
    return "hello";
    // return await fetch(`http://example.com/id/${id}`).then((res) => res.json());
  }
  async checkNickname(nickname) {
    return await fetch(`http://example.com/nickname/${nickname}`).then((res) =>
      res.json()
    );
  }
}
