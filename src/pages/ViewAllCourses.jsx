import React, { useMemo } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useCourseData } from "../hook/use-hook";
import {
  capitalizeFirstLetter,
  removeHash,
  formatUrlPath,
  getTypeName,
} from "../helpers.js";
import { config } from "../assets/config.js";

import Header from "../components/Header";
import Info from "../sections/Info.jsx";
import LoadingPage from "./LoadingPage.jsx";
import Footer from "../components/Footer.jsx";
import GolfCard from "../components/GolfCard.jsx";
import { CardList } from "../components/index.jsx";

// Styled Components
const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TitleBar = styled.div`
  padding: 1rem 4rem;
  background-color: var(--blue);
  color: white;
  font-size: 1.2rem;
  font-weight: 600;

  @media (max-width: 1024px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1em; /* Mobile */
  }
`;

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  border-bottom: 1px #d5d5d5 solid;

  h2 {
    color: var(--blue);
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 1024px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1em; /* Mobile */
  }
`;

const ProvinceHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    gap: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ActionButton = styled.a`
  background-color: #008080; /* Button color */
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #006666;
  }
`;

const ViewAllCourses = () => {
  const navigate = useNavigate();
  const { country, type } = useParams();
  const { courses, isLoading } = useCourseData();
  const typeName = useMemo(() => getTypeName(type), [type]);

  if (isLoading || !courses) {
    return <LoadingPage />;
  }

  return (
    <>
      <Info />
      <Header />
      <TitleBar>{capitalizeFirstLetter(removeHash(type))}</TitleBar>

      <CoursesContainer>
        <Heading>
          {typeName} in {capitalizeFirstLetter(country)}
        </Heading>

        {courses.map((course, index) => (
          <Container key={index}>
            <ProvinceHeading>
              <h2>
                {course.name.toUpperCase()} {typeName}
              </h2>
              <ActionButton
                // href={formatUrlPath(course.name) + "/" + course.id}
                onClick={() =>
                  navigate(`${formatUrlPath(course.name)}/${course.id}`)
                }
              >
                View All {course.name} {typeName}
              </ActionButton>
            </ProvinceHeading>

            <CardList>
              {course.courses.slice(0, 3).map((item, subIndex) => (
                <GolfCard
                  key={subIndex}
                  img={`${config.baseNoSlash}${item.urlImage}`} // Build image URL
                  name={item.title}
                  price={"152"}
                  province={country}
                  id={item.id}
                />
              ))}
            </CardList>
          </Container>
        ))}
      </CoursesContainer>
      <Footer />
    </>
  );
};

export default ViewAllCourses;
