import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SelectedOption = styled.div`
  padding: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: #fff;

  span {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 20px;
      height: 15px;
      border-radius: 3px;
    }
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  li {
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f0f0f0;
    }

    img {
      width: 20px;
      height: 15px;
      border-radius: 3px;
    }
  }
`;
//  const golfCountries = countryList.filter((country) =>
//    ["indonesia", "singapore", "malaysia"].includes(
//      country.name.common.toLowerCase()
//    )
//  );
const DropdownWithFlags = ({ options, selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <SelectedOption onClick={toggleDropdown}>
        <span>
          {selectedOption?.flags?.png && (
            <img
              src={selectedOption.flags.png}
              alt={`${selectedOption.name} flag`}
            />
          )}
          {selectedOption?.name || "Select an option"}
        </span>
        <span>&#9662;</span> {/* Down arrow */}
      </SelectedOption>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              <img src={option.flags.png} alt={`${option.name} flag`} />
              {option.name}
            </li>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default DropdownWithFlags;
