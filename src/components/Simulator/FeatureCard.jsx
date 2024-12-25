import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  overflow: hidden;
  text-align: left;
  position: relative;
  cursor: pointer;
  height: 200px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  width: 100%;
  font-weight: 500;
  text-transform: uppercase;
  position: absolute;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  color: white;
  padding: 0.5rem;
  text-align: center;
`;

const CardDescription = styled.p`
  margin-top: 0.8rem;
  font-size: 0.8rem;
  color: #6b7280;
  text-align: justify;
`;

const FeatureCard = ({ title, description, img }) => (
  <div style={{ display: "block" }}>
    <Card>
      <CardImage src={img} alt={title} />
      <CardTitle>{title}</CardTitle>
    </Card>
    <CardDescription>{description}</CardDescription>
  </div>
);

export default FeatureCard;
