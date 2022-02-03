import React from "react";
import styled from "styled-components";
import { AiFillBell, AiOutlinePlus } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";

const NavOptionWrapper = styled.div`
  flex: 0 1 35%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavOptionIconWrapper = styled.div`
  background: #e6e6e6;
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
  }
`;

const NavOption = (props) => {
  return (
    <NavOptionWrapper>
      <NavOptionIconWrapper>
        <AiOutlinePlus />
      </NavOptionIconWrapper>
      <NavOptionIconWrapper>
        <BsMessenger />
      </NavOptionIconWrapper>
      <NavOptionIconWrapper>
        <AiFillBell />
      </NavOptionIconWrapper>
      <NavOptionIconWrapper>
        <RiArrowDownSFill />
      </NavOptionIconWrapper>
    </NavOptionWrapper>
  );
};

export default NavOption;
