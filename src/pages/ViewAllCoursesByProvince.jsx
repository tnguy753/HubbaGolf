import styled from "styled-components";
import { useParams } from "react-router-dom";
import React, { useEffect, useState, useMemo } from "react";

import {
  removeHash,
  getCategoryID,
  capitalizeFirstLetter,
  getTypeName,
} from "../helpers";
import { config } from "../assets/config";
import { useFacilities, useArticlesList } from "../hook/use-hook";

import Info from "../sections/Info";
import LoadingPage from "./LoadingPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GolfCard from "../components/GolfCard";
import { Container, CardList, Breadcrumbs } from "../components/index";

// Styled Components
const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
  min-height: 100vh;
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
`;

const ViewAllCoursesByProvince = () => {
  const { country, type, province, provinceID } = useParams();
  const { facilitiesData, isLoading: facilitiesLoading } = useFacilities();
  const { articles, isLoading: articlesLoading } = useArticlesList(provinceID);
  const typeName = useMemo(() => getTypeName(type), [type]);
  const [typeID, setTypeID] = useState(null);

  useEffect(() => {
    if (facilitiesData) {
      const catID = getCategoryID(
        facilitiesData,
        capitalizeFirstLetter(removeHash(type))
      );
      setTypeID(catID);
    }
  }, [facilitiesData, type]);

  if (facilitiesLoading || articlesLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <Info />
      <Header />
      <Container>
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
          {typeName} in {capitalizeFirstLetter(province)}
        </Heading>
        <CardWrapper>
          <CardList>
            {articles
              ?.filter((i) => i.type === typeID)
              .map((item, index) => (
                <GolfCard
                  key={index}
                  img={`${config.baseNoSlash}${item?.urlImage}`} // Build image URL
                  name={item.title}
                  price={"152"}
                  province={country}
                  id={item.id}
                />
              ))}
          </CardList>
        </CardWrapper>
      </CoursesContainer>
      <Footer />
    </>
  );
};

export default ViewAllCoursesByProvince;
