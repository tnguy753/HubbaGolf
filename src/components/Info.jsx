import React from "react";
import styled from "styled-components";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const InfoWrapper = styled.section`
  background: var(--blue);
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const InfoItem = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  gap: 0.3rem;
  font-size: 1.3rem;

  p {
    font-size: 0.8rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;

    p {
      font-size: 0.7rem;
    }
  }
`;
const Info = () => {
  return (
    <InfoWrapper>
      <InfoItem>
        <IoMail />
        <p> info@example.com</p>
      </InfoItem>
      <InfoItem>
        <FaPhone />
        <p> 02309230233</p>
      </InfoItem>
      <InfoItem
        href="https://api.whatsapp.com/send?phone=6590232142"
        target="_blank"
      >
        <IoLogoWhatsapp />
        <p> Whatsapp</p>
      </InfoItem>
    </InfoWrapper>
  );
};

export default Info;
