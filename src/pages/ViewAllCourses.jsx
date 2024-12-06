import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  fetchLocation,
  fetchAllCourse,
  fetchFacilities,
} from "../hook/use-hook";
import {
  capitalizeFirstLetter,
  getCountryID,
  removeHash,
  getCategoryID,
  formatUrlPath,
  getCurrency,
} from "../helpers.js";
import { config } from "../assets/config.js";

import Header from "../components/Header";
import Info from "../components/Info.jsx";
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  border-bottom: 1px #d5d5d5 solid;
  margin-bottom: 1.5rem;
  max-width: 1024px;
  width: 100%;

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
  const { country, type } = useParams(); // Extract province and id from route params
  const { locationData } = fetchLocation(); // Fetch location data
  const countryId = getCountryID(locationData, country); // Get country ID based on province
  const { facilitiesData } = fetchFacilities(); // Fetch facilities data
  const [typeID, setTypeID] = useState(null);
  const currency = getCurrency();

  const packages = type.includes("packages");
  const shopping = type.includes("shopping");

  let typeName;

  if (packages) {
    typeName = "Travel Packages";
  } else if (shopping) {
    typeName = "Golf Equipment";
  } else {
    typeName = "Golf Courses"; // Add a default type if necessary
  }

  useEffect(() => {
    const catID = getCategoryID(
      facilitiesData,
      capitalizeFirstLetter(removeHash(type))
    );
    setTypeID(catID);
  }, [facilitiesData]);

  const { courses, isLoading } = fetchAllCourse(typeID, countryId); // Fetch courses

  if (isLoading) {
    return <LoadingPage />;
  }
  // Conditional rendering in case data is missing or loading
  if (!locationData || !courses) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Info />
      <Header />
      <TitleBar>{capitalizeFirstLetter(removeHash(type))}</TitleBar>

      <CoursesContainer>
        <Heading>
          {" "}
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
                  img={`${config.base}${item.urlImage}`} // Build image URL
                  name={item.title}
                  price={currency + "152"}
                  province={shopping || packages ? "" : country}
                  id={item.id}
                  isShop={shopping ? "true" : undefined}
                  details={
                    packages
                      ? "2 Nights / 3 Rounds"
                      : shopping
                      ? ""
                      : "7194 yards | Parkland"
                  }
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
