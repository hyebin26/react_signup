1. Test코드
2. context API
3. react Children
4. story book
5. gitflow

## Commit Convention

### 메시지구조

먼저 커밋 메시지는 크게 **제목, 본문, 꼬리말** 세 가지 파트로 나누고, 각 파트는 빈줄을 두어서 구분한다.

- type: 어떤 의도로 커밋했는지 type에 명시한다.
- subject: 최대 50글자를 넘지 않도록 하고 마침표는 찍지 않는다.
- body: 긴 설명이 필요한 경우 작성. 어떻게 작성했는지가 아니라 무엇을 왜 했는지를 작성
- footer: issue tracker ID를 명시하고 싶은 경우에 작성

### 작성방법

1. type: 타입은 태그와 제목으로 구성되고, 태그는 영어로 쓰되 첫 문자는 대문자로 한다.

"태그: 제목"의 형태이며, : 뒤에만 space가 있음에 유의한다.
<a href="https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-git-%EC%BB%A4%EB%B0%8B%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0">Plus Ultra 참고</a>

- Feat: 새로운 기능을 추가
- Fix: 버그를 고친 경우
- Design: CSS등 사용자 UI디자인 변경
- Style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
- Refactor: 프로덕션 코드 리팩토링
- Comment: 필요한 주석 추가 및 변경
- Docs: 문서 수정
- Test: 테스트 추가, 테스트 리팩토링
- Rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업을 한 경우
- Remove: 파일을 삭제하는 작업만 수행한 경우

2. 제목적는방법

- 한글로 작성하는 경우 "고침", "추가", "변경"의 명령어로 시작한다.
- ex) Feat: "추가 get data api 함수"

3. 본문작성방법

- 본문은 한 줄당 72자 내로 작성
- 본문 내용은 양에 구애받지 않고 최대한 상세히 작성
- 어떻게 변경했는지보다 무엇을 변경했는지 또는 왜 변경했는지를 설명

4. 꼬리말작성방법

- 꼬리말은 옵션이고 이슈 트래커 ID를 작성
- 꼬리말은 "유형: #이슈 번호"형식으로 사용
- 예제

Feat: "추가 로그인 함수" => 타입, 제목

로그인 API 개발 => 본문

Related to: #9

5. git Emoji 참고

