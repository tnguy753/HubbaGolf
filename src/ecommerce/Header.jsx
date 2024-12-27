import React from "react";
import styled from "styled-components";
import images from "../assets/images";
import { header } from "../assets/header";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.6rem;
    font-size: 0.5rem; /* Mobile */
  }
`;
const Logo = styled.a`
  img {
    height: 100px;

    @media (max-width: 1024px) {
      height: 70px;
    }
    @media (max-width: 768px) {
      height: 70px;
    }

    // @media (max-width: 1059px) {
    //   height: 60px;
    // }
  }
`;
const Header = () => {
  return <div>Header</div>;
};

export default Header;
