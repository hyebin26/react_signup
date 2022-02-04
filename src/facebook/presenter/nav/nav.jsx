import React from "react";
import styled from "styled-components";
import NavLogo from "../navLogo/navLogo";
import NavCategory from "../navCategory/navCategory";
import NavOption from "../navOption/navOption";

const NavSection = styled.section`
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  height: 60px;
  position: relative;
`;
const NavWrapper = styled.div`
  display: flex;
`;

const Nav = (props) => {
  return (
    <NavSection>
      <NavWrapper>
        <NavLogo />
        <NavCategory />
        <NavOption />
      </NavWrapper>
    </NavSection>
  );
};

export default Nav;
