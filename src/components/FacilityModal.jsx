import React from "react";
import styled from "styled-components";
import IconButton from "./IconButton";
import { MdClose } from "react-icons/md";
import { OutlinedButton } from ".";
import { useNavigate } from "react-router-dom";
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
  position: relative; /* Required for absolute positioning of close button */
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%; /* Adjusts to smaller screens */
  max-width: 750px; /* Limits the width on larger screens */
  text-align: center;

  @media (min-width: 768px) {
    width: 80%; /* Slightly larger width for medium screens */
  }

  @media (min-width: 1024px) {
    width: 60%; /* Larger width for desktops */
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  img {
    width: 320px;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    img {
      width: 100%;
    }
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Summary = styled.p`
  text-align: justify;
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

export const FacilityModal = ({ isOpen, title, img, summary, onClose, id }) => {
  if (!isOpen) return null;
  const navigate = useNavigate();
  return (
    <ModalOverlay>
      <ModalContent>
        {/* Close button positioned in the top-right */}
        <CloseIconButton icon={<MdClose />} onClick={onClose} />
        <Title>{title}</Title>
        <ContentWrapper>
          <img src={img} alt="Facility" />
          <Summary>{summary}</Summary>
        </ContentWrapper>

        <OutlinedButton onClick={() => navigate(`/news/${id}`)}>
          Find out more →
        </OutlinedButton>
      </ModalContent>
    </ModalOverlay>
  );
};
