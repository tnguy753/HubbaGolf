import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { newsData } from "../assets/news";
import Header from "../components/Header";
import ShareSection from "../sections/ShareSection";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  p {
    text-align: justify;
    line-height: 2rem;
  }
`;

const NewsDetail = () => {
  const { id } = useParams();
  const news = newsData.find((news) => news.id === parseInt(id));

  if (!news) {
    return <h2>News Not Found</h2>;
  }

  return (
    <>
      <Header />
      <DetailContainer>
        <h1>{news.title}</h1>
        <span>{news.date}</span>
        <img
          src={news.image}
          alt={news.title}
          style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        />
        <p>{news.content}</p>
        <ShareSection />
      </DetailContainer>
    </>
  );
};

export default NewsDetail;
