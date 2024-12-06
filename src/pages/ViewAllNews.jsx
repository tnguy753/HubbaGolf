import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Breadcrumbs, Container } from "../components/index.jsx";
import { fetchArticlesList, fetchFacilities } from "../hook/use-hook.jsx";
import { config } from "../assets/config.js";
import { getCategoryName, formatDate } from "../helpers.js";

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
  const { catId } = useParams();
  const { facilitiesData } = fetchFacilities();
  const { articles } = fetchArticlesList(catId);

  const handleReadMore = (id) => {
    navigate(`/blogs/${catId}/${id}`); // Navigates to a detailed page for the news item
  };

  const name = getCategoryName(facilitiesData, catId);

  return (
    <>
      <Header />
      <Container>
        {" "}
        <Breadcrumbs>
          <a href="/">Home</a>
          <span>&gt;</span>

          <span>Blogs</span>
        </Breadcrumbs>
      </Container>

      {/* <Heading /> */}
      {/* <NewsContainer>
        <Heading>{name}</Heading>
        <NewsList>
          {articles?.map((news) => (
            <NewsCard key={news.id}>
              <img src={config.base + news.urlImage} alt={news.title} />
              <div>
                <h3>{news.title}</h3>
                <p>{news.summary}</p>
                <span>{formatDate(news.createdOn)}</span>
                <button onClick={() => handleReadMore(news.id)}>
                  Read More
                </button>
              </div>
            </NewsCard>
          ))}
        </NewsList>
      </NewsContainer> */}
    </>
  );
};

export default ViewAllNews;
