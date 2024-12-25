import React from "react";
import styled from "styled-components";
import { ActionButton } from "../pages/ViewAllCourses.jsx";

// Styled Components
const Container = styled.div``;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px #dfdfdf solid;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const EachReviewSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  flex-direction: row;
  padding: 0.5rem 0 0.5rem 0;
  border-bottom: 1px solid #e2e8f0;
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;
const Card = styled.div`
  flex: 1 1 45%;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`;

const RatingRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.3rem 0;
  font-size: 0.8rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const FacilitiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const FacilityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  padding: 0.5rem;
`;

const ReviewSection = styled.div`
  margin-top: 1rem;
  color: var(--blue);
  overflow: hidden;
`;

const ReviewerInfo = styled.p`
  font-size: 0.8rem;
  color: #555;
  margin: 0.5rem 0;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const ReviewText = styled.p`
  font-size: 0.8rem;
  margin: 0.5rem 0;
  color: var(--dark);
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Limit to 10 rows */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  color: #4a5568;
  white-space: pre-wrap;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const ScoreColumn = styled.div`
  flex: 0 0 25%;

  text-align: right;
  font-size: 0.8rem;
  .score {
    color: var(--blue);
    font-weight: 600;
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    text-align: left;
    flex: 0 0 36%;
  }
`;

// Data (Replace with API data or props)
const reviews = [
  {
    title: "Great day on a great course",
    reviewer: "Silvia Lunzer",
    date: "25 Nov 2024",
    text: "Wonderful conditions and challenging even for Women. I want to notice that I had a very good Caddy Nr 062 Kul, which made it even more enjoyable.",
    scores: {
      condition: 5,
      facilities: 5,
      pace: 5,
      service: 5,
      overall: 5,
      reviewScore: 5,
    },
  },
  {
    title: "Great Course! Worth to go!",
    reviewer: "Derek Lam",
    date: "17 Nov 2024",
    text: "Great condition and very challenging. Everything was so good except my caddy. My buddies' caddies were great. I was unlucky :",
    scores: {
      condition: 5,
      facilities: 5,
      pace: 5,
      service: 3,
      overall: 4,
      reviewScore: 4.4,
    },
  },
];

const firstReview = reviews[0];
const CourseReview = ({ name }) => {
  return (
    <Container>
      {/* Course Rating and Facilities */}
      <Section>
        <Card>
          <Title>Course Rating</Title>
          <ScoreColumn>
            {Object.entries(firstReview.scores).map(([key, value], idx) => (
              <RatingRow key={idx}>
                <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                <span className="score">{value}</span>
              </RatingRow>
            ))}
          </ScoreColumn>
          <br />
          <ActionButton>Review Course</ActionButton>
        </Card>

        <Card>
          <Title>Course Facilities</Title>
          <FacilitiesList>
            {/* <FacilityItem>
              <span>⛳</span> Caddies
            </FacilityItem> */}
            <FacilityItem>
              <span>🚗</span> Golf Carts
            </FacilityItem>
            <FacilityItem>
              <span>🏌️</span> Practice Facilities
            </FacilityItem>
            <FacilityItem>
              <span>🎓</span> Golf Lessons
            </FacilityItem>
            <FacilityItem>
              <span>👞</span> Club & Shoe Rental
            </FacilityItem>
            <FacilityItem>
              <span>🌙</span> Night Golf
            </FacilityItem>
          </FacilitiesList>
        </Card>
      </Section>

      {/* Reviews */}
      <ReviewSection>
        {/* <SubTitle>{name} - Course Reviews</SubTitle> */}
        {reviews.map((review, index) => (
          <EachReviewSection key={index}>
            <div
              style={{
                flex: "1 1 60%",
              }}
            >
              <h4>{review.title}</h4>
              <ReviewerInfo>
                Reviewed by {review.reviewer} on {review.date}
              </ReviewerInfo>
              <ReviewText>{review.text}</ReviewText>
            </div>
            <ScoreColumn>
              {Object.entries(review.scores).map(([key, value], idx) => (
                <RatingRow key={idx}>
                  <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  <span className="score">{value}</span>
                </RatingRow>
              ))}
            </ScoreColumn>
          </EachReviewSection>
        ))}
      </ReviewSection>
    </Container>
  );
};

export default CourseReview;
