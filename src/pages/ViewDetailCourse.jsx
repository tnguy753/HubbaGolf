import parse from "html-react-parser";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import React, { useState, useMemo, useEffect } from "react";
import ArticleSlider from "../components/ArticleSlider.jsx";
import {
  removeHash,
  getCurrency,
  getTypeName,
  capitalizeFirstLetter,
} from "../helpers.js";
import { config } from "../assets/config.js";
import { fetchArticle, useArticlesList } from "../hook/use-hook";

import Info from "../sections/Info";
import Header from "../components/Header";
import LoadingPage from "./LoadingPage.jsx";
import Footer from "../components/Footer.jsx";
import GolfCard from "../components/GolfCard.jsx";
import { ActionButton } from "./ViewAllCourses.jsx";
import CourseReview from "../components/Review.jsx";
import BookingSection from "../components/BookingSection";
import { Breadcrumbs, CardList } from "../components/index.jsx";
import ItinerarySection from "../components/Packages/ItinerarySection.jsx";
import DetailedSimulator from "../components/Simulator/DetailedSimulator.jsx";

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

const ImageWrapper = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: ${({ shop }) => (shop ? "contain" : "cover")};
  height: 250px;

  @media (min-width: 768px) {
    height: 350px;
  }
`;

const LeftColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .course-review-title {
    color: var(--blue);

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .description-wrapper {
    position: relative;
    width: 100%;
    text-align: justify;
    padding-bottom: 1rem;
    border-bottom: 1px #dfdfdf solid;
  }

  .description {
    display: -webkit-box;
    -webkit-line-clamp: 8; /* Limit to 10 rows */
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
  const { country, type, courseID } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { articleContent, isLoading } = fetchArticle(courseID);
  const typeName = useMemo(() => getTypeName(type), [type]);
  const packages = type.includes("packages");
  const simulator = type.includes("simulator");
  const [typeID, setTypeID] = useState(null);
  const { articles } = useArticlesList(typeID);
  const relatedArticles = articles?.filter(
    (i) => i.type == articleContent.type && i.id != courseID
  );

  useEffect(() => {
    if (articleContent?.categoryId) {
      setTypeID(articleContent.categoryId);
    }
  }, [articleContent]);
  const currency = getCurrency();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!articleContent) {
    return <p>Course not found</p>; // Handle cases where the courseDetail doesn't exist
  }
  // console.log(articleContent);
  const toggleDescription = () => setShowFullDescription((prev) => !prev);

  return (
    <>
      <Info />
      <Header />
      <PageWrapper>
        {/* Breadcrumbs */}
        <Breadcrumbs>
          <a href="/">Home</a>
          <span>&gt;</span>
          <a href={`/${country}`}>{capitalizeFirstLetter(country)}</a>
          <span>&gt;</span>
          <a href={`/${country}/${type}`}>
            {capitalizeFirstLetter(removeHash(type))}
          </a>
          <span>&gt;</span>
          <span>{articleContent.title}</span>
        </Breadcrumbs>
        {simulator ? (
          <DetailedSimulator />
        ) : (
          <Layout>
            <LeftColumn>
              {articleContent?.lstUrlImage?.length > 1 ? (
                <ArticleSlider
                  articleContent={{
                    lstUrlImage: articleContent.lstUrlImage,
                  }}
                />
              ) : (
                <ImageWrapper
                  shop={articleContent.type == 28 ? "shop" : undefined}
                  src={config.base + articleContent.urlImage}
                  alt={articleContent.title}
                />
              )}

              <div className="description-wrapper">
                <div
                  className={`description ${
                    showFullDescription ? "expanded" : ""
                  }`}
                >
                  {parse(articleContent.content || "")}
                </div>
                <br />
                <ActionButton
                  onClick={toggleDescription}
                  style={{
                    background: "white",
                    border: "2px #008080 solid",
                    color: "#008080",
                  }}
                >
                  {showFullDescription ? "Read Less " : "Read More +"}
                </ActionButton>
              </div>
              <h2 className="course-review-title">
                {articleContent.title} - Course Reviews
              </h2>
              <CourseReview
                name={`${articleContent.title}- "Course Reviews"`}
              />
            </LeftColumn>

            {/* Right Column */}
            <RightColumn>
              {packages ? (
                <ItinerarySection />
              ) : (
                <BookingSection
                  price={currency + "120"}
                  // price={articleContent.price}
                  city={country}
                  id={articleContent.id}
                  name={articleContent.title}
                />
              )}
            </RightColumn>
          </Layout>
        )}

        {relatedArticles?.length > 0 && (
          <div className="related-courses">
            <h2>Related {typeName}</h2>
            <CardList>
              {relatedArticles?.slice(0, 3).map((item, index) => (
                <GolfCard
                  reload
                  key={index}
                  img={`${config.base}${item.urlImage}`} // Build image URL
                  name={item.title}
                  price={currency + "120"}
                  province={country}
                  id={item.id}
                />
              ))}
            </CardList>
          </div>
        )}
      </PageWrapper>
      <Footer />
    </>
  );
};

export default GolfCoursePage;
