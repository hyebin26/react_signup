import React from "react";
import styled from "styled-components";

const Product = ({ name, image, info, category, location }) => {
  return (
    <ProductWrapper>
      <ImageWrapper className="image">
        <img src={image} alt="이미지" />
      </ImageWrapper>
      <div className="text">
        <ProductName>{name}</ProductName>
        <ProductInfo>{info}</ProductInfo>
        <ProductCategory>{category}</ProductCategory>
        <ProductLocation>{location}</ProductLocation>
      </div>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  padding-right: 2rem;
  width: 230px;
  height: 240px;
`;

const ImageWrapper = styled.div`
  width: 200px;
  img {
    width: 100%;
    height: 120px;
  }
`;

const ProductInfo = styled.p`
  font-size: 0.8rem;
`;

const ProductName = styled.p`
  font-size: 0.7rem;
`;
const ProductCategory = styled.p`
  font-size: 0.7rem;
  color: grey;
`;
const ProductLocation = styled.p`
  font-size: 0.7rem;
  color: grey;
`;

export default Product;
