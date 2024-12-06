import React from "react";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import ShareSection from "../sections/ShareSection";
import { fetchArticle, fetchFacilities } from "../hook/use-hook";
import { config } from "../assets/config";
import { Breadcrumbs, Container } from "../components";
import { getCategoryName } from "../helpers.js";
import Footer from "../components/Footer.jsx";

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
  const { catId, id } = useParams();
  const { facilitiesData } = fetchFacilities();
  const { articleContent } = fetchArticle(id);

  if (!articleContent) {
    return <h2>News Not Found</h2>;
  }

  const name = getCategoryName(facilitiesData, catId);
  return (
    <>
      <Header />
      <Container>
        <Breadcrumbs>
          <a href="/">Home</a>
          <span>&gt;</span>
          <a href={"/news/" + catId}>{name}</a>
          <span>&gt;</span>
          <span>{articleContent.title}</span>
        </Breadcrumbs>
        <DetailContainer>
          <h1>{articleContent.title}</h1>
          <span>{articleContent.date}</span>
          <img
            src={config.base + articleContent.urlImage}
            alt={articleContent.title}
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          />
          {parse(articleContent.content || "")}

          <ShareSection />
        </DetailContainer>
      </Container>
      <Footer />
    </>
  );
};

export default NewsDetail;
