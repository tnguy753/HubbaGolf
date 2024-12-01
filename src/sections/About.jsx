import React from "react";
import { SubTitle, Heading } from "../components/index";
import styled from "styled-components";
import images from "../assets/images";
import { PiCheckCircleFill } from "react-icons/pi";

// Wrapper for the entire section
const AboutWrapper = styled.section`
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
  border-radius: 16rem 0 0 16rem;
  width: 60%;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  background: url(${images.about1}) no-repeat center center/cover;
`;

const About = () => {
  return (
    <AboutWrapper>
      <ContentWrapper>
        <SubTitle>About HubbaGolf</SubTitle>
        {/* <Heading>We Are The Best Golf Club In Your Local Area</Heading> */}
        <p>
          Hubbagolf is a comprehensive one-stop platform designed to meet the
          diverse needs of golf enthusiasts worldwide. It offers a seamless
          experience for booking golf games and simulators, planning golf
          vacations, and purchasing top-quality golf equipment—all from a
          single, user-friendly interface.
        </p>
        <CheckBoxWrapper>
          <PiCheckCircleFill color="var(--blue)" size={"24px"} />
          <p>Global Golf Game Booking</p>
        </CheckBoxWrapper>
        <p className="subtitle">
          Effortlessly book tee times at premier golf courses around the world.
          Hubbagolf provides real-time availability and competitive rates,
          ensuring a smooth and reliable reservation process.
        </p>

        <CheckBoxWrapper>
          <PiCheckCircleFill color="var(--blue)" size={"24px"} />
          <p>Golf Simulator Booking</p>
        </CheckBoxWrapper>
        <p className="subtitle">
          Reserve high-tech golf simulators for practice or fun. Hubbagolf
          connects users with state-of-the-art facilities, perfect for honing
          skills or enjoying virtual rounds with friends.
        </p>
        <CheckBoxWrapper>
          <PiCheckCircleFill color="var(--blue)" size={"24px"} />
          <p>Golf Travel Packages</p>
        </CheckBoxWrapper>
        <p className="subtitle">
          Discover and book customized golf travel experiences. From luxurious
          golf resorts to exclusive international tours, Hubbagolf curates
          packages that cater to various preferences and budgets.
        </p>
        <CheckBoxWrapper>
          <PiCheckCircleFill color="var(--blue)" size={"24px"} />
          <p>Golf Equipment Shopping</p>
        </CheckBoxWrapper>
        <p className="subtitle">
          Access a wide range of premium golf gear, including clubs, apparel,
          and accessories. Hubbagolf partners with leading brands to offer
          high-quality products, ensuring golfers have everything they need for
          an exceptional game.
        </p>
      </ContentWrapper>
      <ImageWrapper />
    </AboutWrapper>
  );
};

export default About;
