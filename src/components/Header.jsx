import React, { useState } from "react";
import images from "../assets/images";
import styled from "styled-components";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import headerData from "../assets/header.json";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 4rem;

  @media (max-width: 930px) {
    padding: 1rem 2rem 1rem 1rem;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 930px) {
    display: block;
  }
`;

const NavBar = styled.nav`
  display: flex;
  gap: 1.5rem;
  z-index: 1000;
  padding: 1.5rem;
  @media (max-width: 930px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background: white;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 0;
    color: #000;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--blue);
    }
  }
`;

const Button = styled.a`
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: var(--blue);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--darkblue);
  }

  @media (max-width: 930px) {
    margin-top: 1rem;
    display: none;
  }
`;

const MobileButton = styled.a`
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: var(--blue);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: none;
  &:hover {
    background-color: var(--darkblue);
  }

  @media (max-width: 930px) {
    margin-top: 1rem;
    display: flex;
  }
`;
const MegaMenu = styled.div`
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  position: absolute;
  display: flex;
  gap: 1rem;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 1rem;
  width: 600px;

  justify-content: flex-start;
  z-index: 100;
  margin-top: 1rem;
  border-bottom: 3px var(--blue) solid;
  border-radius: 8px;
  transition: visibility 0.2s ease, opacity 0.2s ease;
`;

const NavItemWrapper = styled.div`
  position: relative;
`;

const MenuColumn = styled.div`
  width: 30%;

  h4 {
    font-size: 0.9rem;
    color: var(--darkblue);
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: #000;
        font-size: 0.9rem;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: var(--blue);
        }
      }
    }
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderWrapper>
      <a href="/">
        <img src={images.logo} height={headerData.logo.height} alt="Logo" />
      </a>

      <HamburgerMenu onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </HamburgerMenu>

      <NavBar isOpen={isMenuOpen}>
        <NavMenu>
          {headerData.menu.map((menuItem, index) => (
            <NavItemWrapper
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <NavItem>
                <a href={menuItem.link}>{menuItem.title}</a>
                {menuItem.subMenu && (
                  <>
                    <FaChevronDown size={"12px"} />
                    <MegaMenu isVisible={hoveredIndex === index}>
                      {menuItem.subMenu.map((subMenuItem, subIndex) => (
                        <MenuColumn key={subIndex}>
                          <h4>{subMenuItem.title}</h4>
                          <ul>
                            {subMenuItem.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <a href={`${item.link}/${item.name}`}>
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </MenuColumn>
                      ))}
                    </MegaMenu>
                  </>
                )}
              </NavItem>
            </NavItemWrapper>
          ))}
        </NavMenu>
      </NavBar>

      {headerData.buttons.map((button, index) => (
        <Button href={button.link}>{button.text}</Button>
      ))}
    </HeaderWrapper>
  );
};

export default Header;
