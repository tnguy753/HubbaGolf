import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "../components";
import images from "../assets/images/index";

const PaymentResponse = () => {
  const { orderId } = useParams();

  const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    text-align: justify;
    height: 60vh;

    h1 {
      color: #5cb85c;
    }
  `;
  return (
    <div>
      <Header />
      <Container>
        <Card>
          <img src={images.checked} width={150} />
          <h1>Thank you for your booking!</h1>
          <p>
            Thank you for booking your tee time! Your reservation
            <strong> #OD32323</strong> was successful. We look forward to seeing
            you on the course.
            {/* <strong> #{orderId}</strong> was successful. We look forward to
            seeing you on the course. */}
          </p>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default PaymentResponse;
