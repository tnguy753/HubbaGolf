import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchLocation } from "../hook/use-hook";
import IconButton from "./IconButton";
import { MdClose } from "react-icons/md";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 800px;
  text-align: center;
  position: relative;

  h2 {
    margin-bottom: 2rem;
  }
`;

const MegaMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;

  border-radius: 8px;
  overflow-y: auto;
  max-height: 70vh;
  width: 100%;

  @media (min-width: 930px) {
    flex-direction: row;
    width: 100%;
  }
`;

const MenuColumn = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "disabled",
})`
  flex: 1;
  position: relative;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  background: ${(props) =>
    props.disabled ? "rgba(255, 255, 255, 0.9)" : "transparent"};
  border-radius: 8px;

  h4 {
    font-size: 1rem;
    text-transform: uppercase;
    color: #047b6c;
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
        color: #333;
        transition: color 0.3s ease;

        &:hover {
          color: #047b6c;
        }
      }
    }
  }
`;
const CloseIconButton = styled(IconButton)`
  position: absolute;
  top: 10px; /* Adjust as needed */
  right: 10px; /* Adjust as needed */
  background: transparent;
  color: #333;
  font-size: 24px;
  &:hover {
    color: #007bff;
  }
`;
export const LocationModal = ({ isOpen, onClose }) => {
  const [currentHash, setCurrentHash] = useState("");
  const { locationData } = fetchLocation();

  // Update hash dynamically in real time
  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash.replace("#", ""));
    };

    // Initial hash set
    updateHash();

    // Add listener for hash changes
    window.addEventListener("hashchange", updateHash);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Select Your Location</h2>
        {/* Close button positioned in the top-right */}
        <CloseIconButton icon={<MdClose />} onClick={onClose} />
        <MegaMenu>
          {locationData.map((subMenu, subIndex) => (
            <MenuColumn
              key={subIndex}
              disabled={subMenu.countryName !== currentHash}
            >
              <h4>{subMenu.countryName}</h4>
              <ul>
                {subMenu.provinces.map((item, itemIndex) => (
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
      </ModalContent>
    </ModalOverlay>
  );
};
