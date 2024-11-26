import React from "react";
import {
  SubTitle,
  Heading,
  OutlinedButton,
  ContainedButton,
} from "../components/index";
import styled, { keyframes } from "styled-components";

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
const CoursesWrapper = styled.section`
  padding: 4rem;
  padding-bottom: 6rem;
  text-align: center;
  background-color: #eef7ff;
  @media (max-width: 375px) {
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
  max-width: 350px;

  animation: ${slideInFromLeft} 0.8s ease-out;

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
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
    object-fit: cover;
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

const Courses = () => {
  const courses = [
    {
      title: "Pebble Beach Golf Links",
      description: "Lorem ipsum dolor sit amet consectetur elit.",
      img: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "St. Andrews Links",
      description: "Lorem ipsum dolor sit amet consectetur elit.",
      img: "https://images.unsplash.com/photo-1677137998653-67f47edf2135?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Augusta National Golf Club",
      description: "Lorem ipsum dolor sit amet consectetur elit.",
      img: "https://images.unsplash.com/photo-1700575782339-330d5d5f1cf7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <CoursesWrapper id="courses">
      <SubTitle>Our Courses</SubTitle>
      <Heading>Let Us Make Your Golf Trip Fantasies Come True</Heading>
      <CardsWrapper>
        {courses.map((item, index) => (
          <CourseCard key={index} delay={index * 0.3}>
            <ImageWrapper>
              <img src={item.img} />
            </ImageWrapper>
            <ContentWrapper>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <OutlinedButton>Read More</OutlinedButton>
            </ContentWrapper>
          </CourseCard>
        ))}
      </CardsWrapper>

      <ContainedButton>View more Courses</ContainedButton>
    </CoursesWrapper>
  );
};

export default Courses;
