import React, { useEffect, useState } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { Data } from "../api/api";
import { button } from "../../styles/styles";
// scroll을 맨 위로 보내기 => skeleton 보여주기
// theme적용할 수 있나 체크

const data = new Data();

const SkeletonProduct = (props) => {
  return (
    <SkeletonWrapper>
      <ThemeProvider theme={button}>
        <SkeletonImage></SkeletonImage>
        <SkeletonTextWrapper>
          <SkeletonTextName></SkeletonTextName>
          <SkeletonTextInfo></SkeletonTextInfo>
          <SkeletonTextCategory></SkeletonTextCategory>
          <SkeletonTextLocation></SkeletonTextLocation>
        </SkeletonTextWrapper>
      </ThemeProvider>
    </SkeletonWrapper>
  );
};

const skeletonKeyframes = keyframes`
0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const SkeletonBackground = styled.div`
  animation: ${skeletonKeyframes} 3000ms ease-in-out infinite;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
`;

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  padding-right: 2rem;
  width: 230px;
  height: 240px;
  margin: 1rem 0;
`;
const SkeletonImage = styled(SkeletonBackground)`
  width: 200px;
  height: 120px;
  margin-bottom: 0.4rem;
`;
const SkeletonTextWrapper = styled.div``;
const SkeletonTextName = styled(SkeletonBackground)`
  width: 50%;
  margin-bottom: 0.3rem;
  height: 16px;
`;
const SkeletonTextInfo = styled(SkeletonBackground)`
  width: 80%;

  height: 20px;
  margin-bottom: 0.3rem;
`;
const SkeletonTextCategory = styled(SkeletonBackground)`
  width: 50%;
  height: 16px;
  margin-bottom: 0.3rem;
`;
const SkeletonTextLocation = styled(SkeletonBackground)`
  width: 30%;
  height: 16px;
`;

export default SkeletonProduct;
