import React, { useState } from "react";
import styled from "styled-components";

const DropdownWrapper = styled.div`
  position: relative;
  width: 210px;

  @media (max-width: 768px) {
    width: 85px;
  }
`;

const SelectedOption = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  font-size: 0.8rem;
  overflow: hidden;

  /* Ensure proper truncation on mobile */
  @media (max-width: 768px) {
    font-size: 0.7rem; /* Mobile font size */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex-shrink: 1;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  background-color: #fff;
  z-index: 10;
  font-size: 0.8rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    font-size: 0.6rem; /* Mobile */
  }

  li {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f0f0f0;
    }

    &.non-clickable {
      cursor: default;
      color: var(--blue); /* Gray text */
      font-weight: bold;
      // font-size: 10px;
      background-color: #f9f9f9;
      &:hover {
        background-color: #f9f9f9; /* No hover effect */
      }
    }
  }
`;

const Dropdown = ({ options, selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (option) => {
    if (option.nonClickable) return; // Prevent selection of non-clickable items
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <SelectedOption onClick={toggleDropdown}>
        <span>
          {sessionStorage.getItem("location") ||
            "Singapore" ||
            "Choose Your Destination"}
        </span>
        <span>&#9662;</span> {/* Down arrow */}
      </SelectedOption>
      {isOpen && (
        <DropdownList>
          {/* <li className="non-clickable">Choose Your Destination</li> */}
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {option.countryName}
            </li>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
