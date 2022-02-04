import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const KakaoWrapper = styled.div`
  width: 500px;
  height: 500px; ;
`;

const KakaoSearchInput = styled.input``;

const KakaoSearchForm = styled.form``;
const KakaoSearchBtn = styled.button``;

const KakaoMap = (props) => {
  const { kakao } = window;
  const [searchValue, setSearchValue] = useState(null);
  const searchRef = useRef(null);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchValue(searchRef.current.value);
    searchRef.current.value = "";
  };
  useEffect(() => {
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 장소 검색 객체를 생성합니다
    const ps = new kakao.maps.services.Places();

    // 키워드로 장소를 검색합니다
    ps.keywordSearch(
      searchValue === null ? "강남 스타벅스" : searchValue,
      placesSearchCB
    );

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    }
  }, [searchValue]);
  return (
    <>
      <KakaoSearchForm onSubmit={handleSearchSubmit}>
        <KakaoSearchInput type="text" ref={searchRef} />
        <KakaoSearchBtn>검색</KakaoSearchBtn>
      </KakaoSearchForm>
      <KakaoWrapper id="map">
        <h1>Kakao Map</h1>
      </KakaoWrapper>
    </>
  );
};

export default KakaoMap;
