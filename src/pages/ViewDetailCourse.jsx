import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import BookingSection from "../components/BookingSection";
import { courses } from "../assets/courses.js";
import { CoursesCard, CoursesList } from "./ViewAllCourses.jsx";
import { FaLocationArrow, FaLocationDot } from "react-icons/fa6";
import { getDetailCourse } from "../helpers.js";
import { Breadcrumbs } from "../components/index.jsx";

const PageWrapper = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1200px) {
    padding: 2rem 10rem;
  }

  .related-courses {
    h2 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
    h3 {
      font-size: 1.3rem;
      color: #2d3748;
      margin-bottom: 1rem;
    }

    .course-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      padding: 1rem;
      margin-bottom: 1rem;

      img {
        width: 80px;
        height: 80px;
        border-radius: 8px;
        object-fit: cover;
      }

      .details {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        h4 {
          font-size: 1rem;
          color: #2d3748;
        }

        span {
          font-size: 0.9rem;
          color: #718096;
        }
      }
    }
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    height: 300px;

    @media (min-width: 768px) {
      height: 400px;
    }
  }

  .description-wrapper {
    position: relative;
    width: 100%;

    text-align: justify;
  }

  .description {
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Limit to 3 rows */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    font-size: 1rem;
    color: #4a5568;
    line-height: 1.6;
    white-space: pre-wrap;
  }

  .description.expanded {
    -webkit-line-clamp: unset; /* Remove clamping */
    overflow: visible;
  }

  .read-more {
    color: var(--blue); /* Customize the color */
    cursor: pointer;
    font-weight: bold;
    margin-top: 5px;
    display: inline-block;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .booking-section {
    background: #f9f9f9;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    h2 {
      font-size: 1.5rem;
      color: #2d3748;
    }

    .price {
      font-size: 1.3rem;
      color: var(--blue);
      margin: 1rem 0;
    }

    button {
      width: 100%;
      padding: 1rem;
      font-size: 1rem;
      color: white;
      background-color: var(--blue);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: var(--darkblue);
      }
    }
  }
`;

const GolfCoursePage = () => {
  const { city, id } = useParams();
  const navigate = useNavigate();
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Get the courseDetail detail based on the `id`
  const courseDetail = getDetailCourse(courses, id);

  if (!courseDetail) {
    return <p>Course not found</p>; // Handle cases where the courseDetail doesn't exist
  }

  const toggleDescription = () => setShowFullDescription((prev) => !prev);

  return (
    <>
      <Header />
      <PageWrapper>
        {/* Breadcrumbs */}
        <Breadcrumbs>
          <a href="/">Home</a>
          <span>&gt;</span>
          <a href={`/courses/${city}`}>{city}</a>
          <span>&gt;</span>
          <span>{courseDetail.name}</span>
        </Breadcrumbs>

        {/* Main Content */}
        <Layout>
          {/* Left Column */}
          <LeftColumn>
            <img src={courseDetail.img} alt={courseDetail.name} />

            <div className="description-wrapper">
              <div
                className={`description ${
                  showFullDescription ? "expanded" : ""
                }`}
              >
                {courseDetail.description}
              </div>
              <span className="read-more" onClick={toggleDescription}>
                {showFullDescription ? "Read Less" : "Read More"}
              </span>
            </div>
          </LeftColumn>

          {/* Right Column */}
          <RightColumn>
            {/* Booking Section */}
            <BookingSection
              price={courseDetail.price}
              city={courseDetail.province}
              id={courseDetail.id}
            />
          </RightColumn>
        </Layout>
        {/* Related Courses */}
        <div className="related-courses">
          <h2>Related Golf Courses</h2>
          <CoursesList>
            {courses.map((course, index) => (
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
                        onClick={() => {
                          navigate(`/courses/${course.province}/${course.id}`);
                          window.scrollTo({ top: 0 });
                        }}
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
          </CoursesList>
        </div>
      </PageWrapper>
    </>
  );
};

export default GolfCoursePage;
