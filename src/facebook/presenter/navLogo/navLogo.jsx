import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const NavLogoWrapper = styled.div`
  flex: 0 1 30%;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const IconFacebook = styled.img`
  width: 60px;
`;
const SearchWrapper = styled.div`
  width: 41px;
  height: 41px;
  background: #eaeaea;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    width: 23px;
    color: #787878;
    height: 23px;
  }
`;

const NavLogo = (props) => {
  return (
    <NavLogoWrapper>
      <IconFacebook src="/icons/facebook-icon.png" alt="facebook icon" />
      <SearchWrapper>
        <AiOutlineSearch />
      </SearchWrapper>
    </NavLogoWrapper>
  );
};

export default NavLogo;
