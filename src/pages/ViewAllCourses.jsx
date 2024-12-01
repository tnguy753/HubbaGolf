import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { ListWrapper } from "../components/index.jsx";
import { config } from "../assets/config.js";
import { fetchLocation } from "../hook/use-hook";
import { getProvinceID, capitalizeFirstLetter } from "../helpers.js";
import GolfCard from "../components/GolfCard.jsx";

const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
  height: 100vh;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 20px;
`;

const ViewAllCourses = () => {
  const { province } = useParams();
  const [courseList, setCourseList] = useState([]);
  const { locationData } = fetchLocation();

  const provinceID = getProvinceID(locationData, province);

  useEffect(() => {
    const fetchCourses = () => {
      fetch(`${config.get_list_article_by_cat_id}?id=${provinceID}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setCourseList(data))
        .catch((err) => console.log(err));
    };

    fetchCourses();
  }, [provinceID]);

  return (
    <>
      <Header />

      <CoursesContainer>
        <Heading>Golf In {capitalizeFirstLetter(province)}</Heading>

        <ListWrapper>
          {courseList.map((course, index) => (
            <GolfCard
              key={index}
              img={config.base + course.urlImage}
              name={course.title}
              price={"SGD152 (THB4,025)"}
              province={province}
              id={course.id}
            />
          ))}
        </ListWrapper>
      </CoursesContainer>
    </>
  );
};

export default ViewAllCourses;
