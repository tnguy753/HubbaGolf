import React from "react";
import {
  SubTitle,
  Heading,
  OutlinedButton,
  ContainedButton,
} from "../components/index";
import styled, { keyframes } from "styled-components";
import { shop } from "../assets/shop";
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
const ShopWrapper = styled.section`
  padding: 4rem;
  padding-bottom: 5rem;
  @media (max-width: 1200px) {
    padding: 2rem;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-bottom: 3rem;
`;

const CourseCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  width: 250px;

  animation: ${slideInFromLeft} 0.8s ease-out;

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
  @media (max-width: 700px) {
    width: 350px;
  }
  // Apply delay based on the card index
  animation-delay: ${({ delay }) => delay}s;
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 20px;

  img {
    width: 100%;
    height: 250px;
    object-fit: contain;
    border-radius: 12px 12px 20px 20px;
  }
`;

const ContentWrapper = styled.div`
  padding: 1rem;
  text-align: left;
  h4 {
    font-size: 1.3rem;
  }

  p {
    font-size: 0.9rem;
    color: #6b6b6b;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
  }
`;
const HeadingWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    .btn {
      display: none;
    }
  }
`;
const Shop = () => {
  return (
    <ShopWrapper id="shop">
      <HeadingWrapper>
        <div>
          <SubTitle>Golf Equipments</SubTitle>
          <Heading>Featured products</Heading>
        </div>
        <div className="btn">
          <ContainedButton>View more</ContainedButton>
        </div>
      </HeadingWrapper>

      <CardsWrapper>
        {shop.map((item, index) => (
          <CourseCard key={index} delay={index * 0.3}>
            <ImageWrapper>
              <img src={item.img} />
            </ImageWrapper>
            <ContentWrapper>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              {/* <OutlinedButton>Read More</OutlinedButton> */}
            </ContentWrapper>
          </CourseCard>
        ))}
      </CardsWrapper>
    </ShopWrapper>
  );
};

export default Shop;
