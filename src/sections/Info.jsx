import React from "react";
import styled from "styled-components";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import images from "../assets/images";

const InfoWrapper = styled.section`
  background: var(--blue);
  padding: 0.7rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 1059px) {
    .mobile-view {
      display: none;
    }
  }
`;

const InfoItem = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
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
      font-size: 0.6rem;
      dislay: none;
    }
    .img-whatsapp {
      width: 25px;
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
        className="mobile-view"
      >
        <img src={images.whatsapp} width={45} className="img-whatsapp" />
        <p className="whatsapp">
          <strong> WhatsApp Us!</strong>
        </p>
      </InfoItem>
    </InfoWrapper>
  );
};

export default Info;
