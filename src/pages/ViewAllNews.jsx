import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { newsData } from "../assets/news";
import Header from "../components/Header";

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 20px;
`;

const NewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const NewsCard = styled.div`
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
`;
const ViewAllNews = () => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/news/${id}`); // Navigates to a detailed page for the news item
  };
  return (
    <>
      <Header />
      {/* <Heading /> */}
      <NewsContainer>
        <Heading>All News</Heading>
        <NewsList>
          {newsData.map((news) => (
            <NewsCard key={news.id}>
              <img src={news.image} alt={news.title} />
              <div>
                <h3>{news.title}</h3>
                <p>{news.description}</p>
                <span>{news.date}</span>
                <button onClick={() => handleReadMore(news.id)}>
                  Read More
                </button>
              </div>
            </NewsCard>
          ))}
        </NewsList>
      </NewsContainer>
    </>
  );
};

export default ViewAllNews;
