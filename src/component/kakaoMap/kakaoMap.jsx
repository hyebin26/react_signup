import React, { useEffect } from "react";
import styled from "styled-components";

const KakaoWrapper = styled.div`
  width: 300px;
  height: 300px;
`;

const KakaoMap = (props) => {
  const { kakao } = window;
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
  }, []);
  return (
    <KakaoWrapper id="map">
      <h1>Kakao Map</h1>
    </KakaoWrapper>
  );
};

export default KakaoMap;
