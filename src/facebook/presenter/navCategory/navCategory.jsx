import React from "react";
import styled from "styled-components";
import { RiUser3Line } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOndemandVideo } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

const NavCategoryWrapper = styled.div`
  flex: 0 1 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
    color: #787878;
    cursor: pointer;
  }
`;

const NavCategoryIconWrapper = styled.div`
  padding: 10px;
  border-radius: 3px;
  position: relative;
  &:hover {
    background: #e6e6e6;
  }
  ${(props) =>
    props.state
      ? `svg{color:#1877F2};::after{
    content:" ";
    width:100%;
    position: absolute;
    bottom:-3px;
    border-bottom:3.5px solid #1877F2;
    left:0;
  }`
      : ""}
`;

const NavCategory = (props) => {
  return (
    <NavCategoryWrapper>
      <NavCategoryIconWrapper state={true}>
        <AiOutlineHome />
      </NavCategoryIconWrapper>
      <NavCategoryIconWrapper>
        <RiUser3Line />
      </NavCategoryIconWrapper>
      <NavCategoryIconWrapper>
        <MdOndemandVideo />
      </NavCategoryIconWrapper>
      <NavCategoryIconWrapper>
        <HiOutlineUserGroup />
      </NavCategoryIconWrapper>
    </NavCategoryWrapper>
  );
};

export default NavCategory;
