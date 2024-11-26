import React from "react";
import { SubTitle, Heading } from "../components/index";
import styled from "styled-components";

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
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding-top: 1rem;
`;

const ImageWrapper = styled.div`
  border-radius: 16rem 0 0 16rem;
  width: 60%;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  background: url("https://images.unsplash.com/photo-1526166997988-ce48e2f004af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    no-repeat center center/cover;
`;

const About = () => {
  return (
    <AboutWrapper>
      <ContentWrapper>
        <SubTitle>About HubbaGolf</SubTitle>
        <Heading>We Are The Best Golf Club In Your Local Area</Heading>
        <p>
          We offer a lot of courses of varying difficulty and beautiful scenery
          that golfers of all skill levels can enjoy. You will learn golf from
          professionals with our competent and experienced staff. You will have
          a great fun with our magnificent illuminated field.
        </p>
        <CheckBoxWrapper>
          <PiCheckCircleFill color="var(--blue)" size={"24px"} />
          <p>Free Guide Book</p>
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          <PiCheckCircleFill color="var(--blue)" size={"24px"} />
          <p>Group Membership Level</p>
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          <PiCheckCircleFill color="var(--blue)" size={"24px"} />
          <p>24/7 Full Support</p>
        </CheckBoxWrapper>
      </ContentWrapper>
      <ImageWrapper />
    </AboutWrapper>
  );
};

export default About;
