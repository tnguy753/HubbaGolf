import React from "react";
import { SubTitle, Heading } from "../components/index";
import styled, { keyframes } from "styled-components";
import { facilities } from "../assets/facilities";

// Animation keyframes
const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Wrapper for the entire section
const FacilitiesWrapper = styled.section`
  padding: 4rem;
  padding-bottom: 6rem;
  text-align: center;
  @media (max-width: 375px) {
    padding: 2rem;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Card = styled.div`
  margin-bottom: 2rem;
  background: white;
  border-radius: 150px 150px 50px 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  max-width: 300px;
  padding: 0rem 1rem;
  padding-bottom: 1rem;
  text-align: center;
  position: relative;
  animation: ${slideInFromLeft} 0.8s ease-out;

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }

  // Apply delay based on the card index
  animation-delay: ${({ delay }) => delay}s;
`;

const ImageWrapper = styled.div`
  width: 260px;
  height: 260px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 50%;
  filter: drop-shadow(5px 5px var(--blue));

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--blue);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  font-size: 0.9rem;
  color: #6b6b6b;
  margin-bottom: 1.5rem;
`;

const ArrowButton = styled.button`
  position: absolute;
  border: none;
  left: 50%;
  transform: translateX(-50%);
  background: white;

  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  &:hover {
    background: var(--blue);
    color: white;
  }
`;

const Facilities = () => {
  return (
    <FacilitiesWrapper>
      <SubTitle>Our Facilities</SubTitle>
      <Heading>Enjoy Top-Tier Golfing at the Best Club Around</Heading>
      <CardsWrapper>
        {facilities.map((facility, index) => (
          <Card key={index} delay={index * 0.3}>
            <ImageWrapper>
              <img src={facility.img} alt={facility.title} />
            </ImageWrapper>
            <CardTitle>{facility.title}</CardTitle>
            <CardText>{facility.description}</CardText>
            <ArrowButton>→</ArrowButton>
          </Card>
        ))}
      </CardsWrapper>
    </FacilitiesWrapper>
  );
};

export default Facilities;
