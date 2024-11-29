import React from "react";
import {
  SubTitle,
  Heading,
  ContainedButton,
  OutlinedButton,
} from "../components/index";
import styled, { keyframes } from "styled-components";
import { courses } from "../assets/courses";
import { CoursesCard } from "../pages/ViewAllCourses";
import { useNavigate } from "react-router-dom";
import { FaLocationArrow, FaLocationDot } from "react-icons/fa6";

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
  @media (max-width: 1200px) {
    padding: 2rem;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding-bottom: 1rem;
`;

const Courses = () => {
  const navigate = useNavigate();

  return (
    <CoursesWrapper id="courses">
      <SubTitle>Our Courses</SubTitle>
      <Heading>Let Us Make Your Golf Trip Fantasies Come True</Heading>

      <ListWrapper>
        {courses.slice(0, 3).map((course, index) => (
          <CoursesCard key={index}>
            <img src={course.img} alt={course.name} />
            {course.recommended && (
              <span className="recommended">RECOMMENDED</span>
            )}

            <div>
              <h3>{course.name}</h3>
              <h4>{course.price}</h4>

              <div className="location">
                <FaLocationDot />
                <p>{course.province}</p>
              </div>

              {course.details && (
                <p>
                  {course.details.yards} yards | {course.details.type}
                </p>
              )}

              <div className="call-to-action">
                {course.status === "Permanently Closed" ? (
                  <span className="status-closed">Permanently Closed</span>
                ) : (
                  <button
                    onClick={() =>
                      navigate(`/courses/${course.province}/${course.id}`)
                    }
                  >
                    Book
                  </button>
                )}
                <div className="view-map">
                  <FaLocationArrow />
                  <a>View on Map</a>
                </div>
              </div>
            </div>
          </CoursesCard>
        ))}
      </ListWrapper>

      <OutlinedButton onClick={() => navigate(`/courses/Singapore`)}>
        View more Courses
      </OutlinedButton>
    </CoursesWrapper>
  );
};

export default Courses;
