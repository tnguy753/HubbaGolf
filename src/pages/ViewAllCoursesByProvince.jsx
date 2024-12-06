import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import {
  removeHash,
  getCategoryID,
  capitalizeFirstLetter,
  getCurrency,
} from "../helpers.js";
import {
  fetchLocation,
  fetchFacilities,
  fetchArticlesList,
} from "../hook/use-hook";
import { config } from "../assets/config.js";

import Info from "../components/Info.jsx";
import Header from "../components/Header";
import LoadingPage from "./LoadingPage.jsx";
import Footer from "../components/Footer.jsx";
import { Container, CardList } from "../components/index.jsx";
import GolfCard from "../components/GolfCard.jsx";

import { Breadcrumbs } from "../components/index.jsx";

// Styled Components
const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
  // background-color: #f8f9fa;
  height: 100vh;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CardWrapper = styled.div`
  padding-bottom: 1.5rem;
  max-width: 1024px;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1em; /* Mobile */
  }
`;

const ViewAllCoursesByProvince = () => {
  const { country, type, province, provinceID } = useParams();
  // Extract province and id from route params
  const { locationData } = fetchLocation(); // Fetch location data
  const { facilitiesData } = fetchFacilities(); // Fetch facilities data
  const { articles, isLoading } = fetchArticlesList(provinceID);
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
  if (isLoading) {
    return <LoadingPage />;
  }
  // Conditional rendering in case data is missing or loading
  if (!locationData || !facilitiesData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Info />
      <Header />
      <Container>
        {" "}
        <Breadcrumbs>
          <a href="/">Home</a>
          <span>&gt;</span>
          <a href={`/${country}`}>
            {capitalizeFirstLetter(removeHash(country))}
          </a>
          <span>&gt;</span>
          <a href={`/${country}/${type}`}>
            {capitalizeFirstLetter(removeHash(type))}
          </a>
          <span>&gt;</span>
          <span>{capitalizeFirstLetter(removeHash(province))}</span>
        </Breadcrumbs>
      </Container>
      <CoursesContainer>
        <Heading>
          {" "}
          {typeName} in {capitalizeFirstLetter(province)}
        </Heading>
        <CardWrapper>
          <CardList>
            {articles
              ?.filter((i) => i.type == typeID)
              .map((item, index) => (
                <GolfCard
                  key={index}
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
              ))}{" "}
          </CardList>
        </CardWrapper>
      </CoursesContainer>{" "}
      <Footer />
    </>
  );
};

export default ViewAllCoursesByProvince;
