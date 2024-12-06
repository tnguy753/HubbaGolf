import React from "react";
import styled from "styled-components";
import data from "../assets/itinerary.json";
import { getCurrency } from "../helpers.js";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  background: #f5f5f5;
  border-radius: 0.5rem;
  border: 1px #d5d5d5 solid;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky;

  h4 {
    font-size: 1rem;
    color: var(--blue);
  }

  p {
    font-size: 1rem;
    color: #4a5568;
  }
  button {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    color: white;
    background-color: var(--blue); /* Green background */
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: #2f855a;
    }
  }
`;
const Title = styled.div`
  background-color: var(--blue);
  font-size: 1.2rem;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem 0.5rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1rem 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
const ItinerarySection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Wrapper>
        <Title>Itinerary</Title>
        <Content>
          {data.itinerary.map((i) => (
            <>
              <h4>{i.title}</h4>
              <p>{i.subtitle}</p>
            </>
          ))}
          <button onClick={() => navigate(`/payment`)}>Book Now</button>
        </Content>
      </Wrapper>
    </div>
  );
};

export default ItinerarySection;
