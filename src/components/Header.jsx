import styled from "styled-components";
import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

import Dropdown from "./Dropdown";
import images from "../assets/images";
import { header } from "../assets/header";
import { fetchLocation } from "../hook/use-hook";

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;
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

const HamburgerMenu = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 1059px) {
    display: flex;
    justify-content: flex-end;
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

const CartInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;

  span {
    font-size: 1rem;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 0.6rem; /* Mobile */
    }
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 0.2rem;
  }
`;

const InfoItem = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--dark);
  gap: 0.3rem;
  font-size: 1.3rem;

  .whatsapp {
    font-size: 1rem;
  }
  p {
    font-size: 0.8rem;
  }

  @media (max-width: 900px) {
    font-size: 1rem;

    p {
      font-size: 0.7rem;
    }
    .whatsapp {
      font-size: 0.8rem;
      dislay: none;
    }
    .img-whatsapp {
      width: 25px;
    }
  }
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: flex-end;
  .mobile-view {
    display: none;
  }
  @media (max-width: 1059px) {
    .mobile-view {
      display: flex;
    }
  }
`;

const Header = ({ isShop }) => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState();
  const { type, province, provinceID, courseID } = useParams();

  const handleSelect = (option) => {
    setSelectedCountry(option);
    sessionStorage.setItem("location", option.countryName);

    // Build the path dynamically
    let path = `/${option.countryName.toLowerCase()}`;
    if (type) path += `/${type}`;
    if (province) path += `/${province}`;
    if (provinceID) path += `/${provinceID}`;
    if (courseID)
      path = `/${option.countryName.toLowerCase()}/global-golf-game-booking`;

    // Navigate once with the constructed path
    navigate(path);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { locationData } = fetchLocation();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <HeaderWrapper>
      <Logo href="/">
        <img src={images.logo} alt="Logo" />
      </Logo>

      <Wrapper>
        <Box style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <InfoItem
            href="https://api.whatsapp.com/send?phone=6590232142"
            target="_blank"
            className="mobile-view"
          >
            <img src={images.whatsapp} width={45} className="img-whatsapp" />
            <p className="whatsapp">
              <strong> WhatsApp Us!</strong>
            </p>
          </InfoItem>
          <HamburgerMenu onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </HamburgerMenu>
        </Box>

        <NavBar isOpen={isMenuOpen}>
          <NavMenu>
            {header.map((menuItem, index) => (
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

          <Button href={"/manage-my-booking"}>MANAGE MY BOOKING</Button>
        </NavBar>

        <BottomRow style={{ display: isShop ? "none" : "" }}>
          <CartInfo>
            <span>0 Items in cart</span>

            <FaCartShopping size="1.1rem" />
          </CartInfo>
          <Dropdown
            options={locationData}
            selectedOption={selectedCountry}
            onSelect={handleSelect}
          />
        </BottomRow>
      </Wrapper>
    </HeaderWrapper>
  );
};

export default Header;
