import React from "react";
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

const MainSection = styled.section`
  background: #f2f2f2;
  padding-top: 20px;
  height: calc(100vh - 60px);
`;

const MainContent = styled.div`
  margin: 0 auto;
  margin-bottom: 1.3rem;
  padding: 0.8rem;
  background: white;
  max-width: 35rem;
  border-radius: 9px;
  box-shadow: -4px 3px 21px -3px rgba(0, 0, 0, 0.1);
`;

const MainStoryWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MainStoryTextWrapper = styled.div`
  padding-left: 0.7rem;
`;

const MainStoryIconWrapper = styled.div`
  background: #2196f324;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 41px;
  height: 41px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    color: #007eb6;
  }
`;

const MainUserInput = styled.input`
  border-radius: 15px;
  width: 91%;
  padding: 0.5rem;
  font-size: 1.1rem;
  border: none;
  background: #f2f2f2;
  &:hover {
    background: #c8c8c8;
  }
`;

const MainUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainUserIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: 0.8rem;
  align-items: center;
  svg {
    width: 35px;
    height: 35px;
    color: grey;
  }
`;
const MainUserCategoryWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 0.8rem;
`;

const MainPostWrapper = styled.div`
  text-align: center;
  h2 {
    padding-bottom: 0.2rem;
  }
  p {
    padding-bottom: 1rem;
  }
  button {
    padding: 0.6rem;
    border: none;
    background: #2196f3;
    border-radius: 5px;
  }
  margin-bottom: 2rem;
`;
const Main = (props) => {
  return (
    <MainSection>
      <MainContent>
        <MainStoryWrapper>
          <MainStoryIconWrapper>
            <AiOutlinePlus />
          </MainStoryIconWrapper>
          <MainStoryTextWrapper>
            <h3>스토리 만들기</h3>
            <p>사진을 공유하거나 글을 남겨보세요.</p>
          </MainStoryTextWrapper>
        </MainStoryWrapper>
      </MainContent>
      <MainContent>
        <MainUserWrapper>
          <MainUserIconWrapper>
            <FaRegUserCircle />
            <MainUserInput
              type="text"
              placeholder="황혜빈님, 무슨 생각을 하고 계신가요?"
            />
          </MainUserIconWrapper>
          <MainUserCategoryWrapper>
            <p>라이브 방송</p>
            <p>사진/동영상</p>
            <p>기분/활동</p>
          </MainUserCategoryWrapper>
        </MainUserWrapper>
      </MainContent>
      <MainContent>
        <MainPostWrapper>
          <h2>게시물 없음</h2>
          <p>친구를 추가하여 뉴스피드에서 더 많은 게시물을 확인해보세요.</p>
          <button>친구 찾기</button>
        </MainPostWrapper>
      </MainContent>
    </MainSection>
  );
};

export default Main;
