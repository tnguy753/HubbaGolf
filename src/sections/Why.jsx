import React from "react";
import { SubTitle, Heading } from "../components/index";
import styled from "styled-components";
import images from "../assets/images";
import { PiCheckCircleFill } from "react-icons/pi";

// Wrapper for the entire section
const WhyWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  width: 50%;
  display: flex;
  padding: 4rem;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 375px) {
    padding: 2rem;
  }

  .subtitle {
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding-top: 1rem;
  color: var(--blue);
  font-weight: bold;
`;

const ImageWrapper = styled.div`
  border-radius: 0 16rem 16rem 0;
  width: 60%;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  background: url(${images.about2}) no-repeat center center/cover;
`;

const Why = () => {
  return (
    <WhyWrapper>
      <ImageWrapper />
      <ContentWrapper>
        <SubTitle>Why HubbaGolf</SubTitle>
        {/* <Heading>We Are The Best Golf Club In Your Local Area</Heading> */}
        <p>
          Hubbagolf simplifies the golfing experience by integrating multiple
          services into one convenient platform. Whether you’re planning a local
          game, a global adventure, or looking for the latest equipment,
          Hubbagolf makes it easy and efficient, enhancing the enjoyment of
          every golfer.
        </p>
      </ContentWrapper>
    </WhyWrapper>
  );
};

export default Why;
