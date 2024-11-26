import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { courses } from "../assets/courses.js";

const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 20px;
`;

const CoursesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const CoursesCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  div {
    padding: 15px;
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 1.2rem;
    color: #2d3748;
    margin: 10px 0;
    height: 60px;
  }

  p {
    font-size: 0.9rem;
    color: #718096;
  }

  span {
    margin-top: 10px;
    font-size: 0.8rem;
    color: #a0aec0;
    align-self: flex-end;
  }

  button {
    margin-top: 10px;
    padding: 10px;
    font-size: 0.9rem;
    color: white;
    background-color: var(--blue);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--darkblue);
    }
  }

  .recommended {
    background-color: orange;
    color: white;
    font-size: 0.8rem;
    padding: 5px;
    border-radius: 5px;
    align-self: flex-start;
  }

  .status-closed {
    color: red;
    font-weight: bold;
    margin-top: 10px;
  }
`;
const ViewAllCourses = () => {
  const navigate = useNavigate();
  const { city } = useParams();

  return (
    <>
      <Header />
      {/* <Heading /> */}
      <CoursesContainer>
        <Heading>Golf In {city}</Heading>
        <CoursesList>
          {courses.map((course, index) => (
            <CoursesCard key={index}>
              {/* Placeholder image for the golf course */}
              <img src={course.img} alt={course.name} />
              <div>
                {course.recommended && (
                  <span className="recommended">RECOMMENDED</span>
                )}
                <h3>{course.name}</h3>
                <p>{course.price}</p>
                {course.details && (
                  <p>
                    {course.details.yards} yards | {course.details.type}
                  </p>
                )}
                {course.status === "Permanently Closed" ? (
                  <span className="status-closed">Permanently Closed</span>
                ) : (
                  <button>Book</button>
                )}
                <button>View on Map</button>
              </div>
            </CoursesCard>
          ))}
        </CoursesList>
      </CoursesContainer>
    </>
  );
};

export default ViewAllCourses;
