import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { newsData } from "../assets/news";

const ArticlesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  background-color: #f2ffe9;
  gap: 1rem;
  .nav-link {
    text-decoration: none;
    color: black;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: var(--blue);
    }
  }
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ArticleCardWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const ArticleCard = styled.div`
  position: relative;
  background: url(${(props) => props.background}) no-repeat center center/cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: white;
  padding: 2rem;
  border-radius: 20px;
  height: 300px;
  overflow: hidden;
  transition: transform 0.3s ease, background-size 0.3s ease;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3); /* Black overlay with 50% opacity */
    z-index: 1;
  }

  h3,
  p {
    position: relative;
    z-index: 2;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

const Articles = () => {
  const navigate = useNavigate();
  const handleReadMore = (id) => {
    navigate(`/news/${id}`); // Navigates to a detailed page for the news item
  };
  return (
    <ArticlesWrapper>
      <HeadingWrapper>
        <Heading>Featured Articles</Heading>
        <Link to="/news" className="nav-link">
          View All
        </Link>
      </HeadingWrapper>

      <ArticleCardWrapper>
        {newsData.slice(0, 3).map((article) => (
          <ArticleCard
            key={article.id}
            background={article.image}
            onClick={() => handleReadMore(article.id)}
          >
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </ArticleCard>
        ))}
      </ArticleCardWrapper>
    </ArticlesWrapper>
  );
};

export default Articles;
