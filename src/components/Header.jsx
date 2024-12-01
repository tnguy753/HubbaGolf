import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import images from "../assets/images";
import headerData from "../assets/header.json";
import { fetchMenuData } from "../hook/use-hook";

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

  @media (max-width: 1059px) {
    padding: 0.5rem 2rem;
  }
`;

const Logo = styled.a`
  img {
    height: 65px;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 1059px) {
    display: block;
  }
`;

const NavBar = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1059px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: white;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-200%)"};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 1059px) {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    text-align: center;
  }
`;

const NavItemWrapper = styled.div`
  position: relative; /* Ensures the mega menu is positioned relative to this */
  z-index: 1000; /* Keeps it below the mega menu */
`;

const NavItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isHovered",
})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    color: #000;
    transition: color 0.3s;

    &:hover {
      color: var(--blue);
    }
  }

  svg {
    transition: transform 0.3s;
    ${({ isHovered }) => isHovered && "transform: rotate(180deg);"}
  }
`;

const MegaMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isVisible",
})`
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  position: absolute; /* Make it overlay other content */
  display: flex;
  flex-direction: column; /* Stack content for smaller screens */
  gap: 1rem;
  top: 100%; /* Position below the parent menu item */
  left: 0; /* Align with the left edge of the parent */
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 1rem;
  z-index: 200; /* Ensure it appears above other elements */
  border-radius: 8px;
  width: 100%; /* Make it responsive on smaller screens */
  max-height: 70vh; /* Prevent it from taking the full screen */
  overflow-y: auto; /* Add scroll for overflowing content */
  transition: visibility 0.2s ease, opacity 0.2s ease;

  @media (min-width: 930px) {
    flex-direction: row; /* Restore horizontal layout for desktop */
    top: 100%; /* Desktop alignment */
    left: 50%;
    transform: translateX(-50%);
    width: 600px; /* Specific width for larger screens */
    max-height: none; /* No restriction on height for desktop */
    overflow-y: visible;
  }
`;

const MenuColumn = styled.div`
  flex: 1;

  h4 {
    font-size: 0.9rem;
    text-transform: uppercase;
    color: var(--darkblue);
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        text-decoration: none;
        font-size: 0.9rem;
        color: #000;
        transition: color 0.3s;

        &:hover {
          color: var(--blue);
        }
      }
    }
  }
`;

const Button = styled.a`
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  font-size: 1rem;
  color: white;
  background: var(--blue);
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: var(--darkblue);
  }

  @media (max-width: 1059px) {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 1rem;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { menuData } = fetchMenuData();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <HeaderWrapper>
      <Logo href="/">
        <img src={images.logo} alt="Logo" />
      </Logo>
      <HamburgerMenu onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </HamburgerMenu>
      <NavBar isOpen={isMenuOpen}>
        <NavMenu>
          {menuData.map((menuItem, index) => (
            <NavItemWrapper
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <NavItem isHovered={hoveredIndex === index}>
                <a href={menuItem.link}>{menuItem.title}</a>
                {menuItem.subMenu && <FaChevronDown />}
              </NavItem>
              {menuItem.subMenu && (
                <MegaMenu isVisible={hoveredIndex === index}>
                  {menuItem.subMenu.map((subMenu, subIndex) => (
                    <MenuColumn key={subIndex}>
                      <h4>{subMenu.title}</h4>
                      <ul>
                        {subMenu.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <a href={`/courses/${item.name.toLowerCase()}`}>
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </MenuColumn>
                  ))}
                </MegaMenu>
              )}
            </NavItemWrapper>
          ))}
        </NavMenu>

        {headerData.buttons.map((button, index) => (
          <Button key={index} href={button.link}>
            {button.text}
          </Button>
        ))}
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;
