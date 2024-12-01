import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import BookingSection from "../components/BookingSection";
import { ListWrapper } from "../components/index.jsx";
import { Breadcrumbs } from "../components/index.jsx";
import { config } from "../assets/config.js";
import { capitalizeFirstLetter, getProvinceID } from "../helpers.js";
import { fetchLocation } from "../hook/use-hook";
import GolfCard from "../components/GolfCard.jsx";

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
  const { province, courseID } = useParams();
  const [courseData, setCourseData] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [courseList, setCourseList] = useState([]);
  const { locationData } = fetchLocation();

  const provinceID = getProvinceID(locationData, province);

  useEffect(() => {
    const fetchCourses = () => {
      fetch(`${config.get_list_article_by_cat_id}?id=${provinceID}`, {
        method: "GET",
      })
        .then((res) => res.json()) // Parse the response to JSON
        .then((data) => setCourseList(data)) // Log the data
        .catch((err) => console.log(err));
    };

    fetchCourses();
  }, [courseID, provinceID]);

  useEffect(() => {
    const fetchCourses = () => {
      fetch(`${config.get_article}${courseID}`, {
        method: "GET",
      })
        .then((res) => res.json()) // Parse the response to JSON
        .then((data) => setCourseData(data)) // Log the data
        .catch((err) => console.log(err));
    };

    fetchCourses();
  }, [courseID]);

  if (!courseData) {
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
          <a href={`/courses/${province}`}>{capitalizeFirstLetter(province)}</a>
          <span>&gt;</span>
          <span>{courseData.title}</span>
        </Breadcrumbs>

        {/* Main Content */}
        <Layout>
          {/* Left Column */}
          <LeftColumn>
            <img
              src={config.base + courseData.urlImage}
              alt={courseData.title}
            />

            {/* {courseData && parse(courseData?.content)} */}
            <div className="description-wrapper">
              <div
                className={`description ${
                  showFullDescription ? "expanded" : ""
                }`}
              >
                {courseData.summary}
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
              price={courseData.price}
              city={province}
              id={courseData.id}
            />
          </RightColumn>
        </Layout>
        {/* Related Courses */}
        <div className="related-courses">
          <h2>Related Golf Courses</h2>
          <ListWrapper>
            {courseList.map((course, index) => (
              <GolfCard
                key={index}
                img={config.base + course.urlImage}
                name={course.title}
                price={"SGD152 (THB4,025)"}
                province={province}
                id={course.id}
                reload
              />
            ))}
          </ListWrapper>
        </div>
      </PageWrapper>
    </>
  );
};

export default GolfCoursePage;
