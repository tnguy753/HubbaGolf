import React, { useState, useEffect } from "react";
import { SubTitle, Heading, OutlinedButton } from "../components/index";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { ListWrapper } from "../components/index";
import GolfCard from "../components/GolfCard.jsx";
import { config } from "../assets/config.js";

// Wrapper for the entire section
const CoursesWrapper = styled.section`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6rem;
  text-align: center;
  background-color: #eef7ff;
  @media (max-width: 1200px) {
    padding: 2rem;
  }
`;

const Courses = () => {
  const navigate = useNavigate();
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    const fetchCourses = () => {
      fetch(`${config.get_list_article_by_cat_id}?id=9`, {
        method: "GET",
      })
        .then((res) => res.json()) // Parse the response to JSON
        .then((data) => setCourseList(data)) // Log the data
        .catch((err) => console.log(err));
    };

    fetchCourses();
  }, []);

  return (
    <CoursesWrapper id="courses">
      <SubTitle>Our Courses</SubTitle>
      <Heading>Let Us Make Your Golf Trip Fantasies Come True</Heading>

      <ListWrapper>
        {courseList.slice(0, 3).map((course, index) => (
          <GolfCard
            key={index}
            img={config.base + course.urlImage}
            name={course.title}
            price={"SGD152 (THB4,025)"}
            province={"Singapore"}
            id={course.id}
          />
        ))}
      </ListWrapper>

      <OutlinedButton onClick={() => navigate(`/courses/singapore`)}>
        View more Courses
      </OutlinedButton>
    </CoursesWrapper>
  );
};

export default Courses;
