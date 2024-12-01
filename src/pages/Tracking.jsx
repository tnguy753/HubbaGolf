import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Breadcrumbs, Container, ColumnForm, InputGroup } from "../components";
import { Modal } from "../components/Modal";
import { config } from "../assets/config.js";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TrackingCard = styled.div`
  position: relative;
  z-index: 2;
  background: white;
  padding: 40px;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #2d3748;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  padding: 12px;
  font-size: 1rem;
  color: white;
  background-color: var(--blue);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--darkblue);
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: #a0aec0;
  margin-top: 20px;
`;
const Tracking = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("error");
  const [modalMessage, setModalMessage] = useState("");
  const [formFields, setFormFields] = useState({
    orderNumber: "",
    email: "",
  });
  const showError = () => {
    setModalMessage(
      "Cannot find order number in our system. Please try again."
    );
    setModalType("error");
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formatOrderID = formFields.orderNumber.replace("#", "");
    fetch(
      `${config.get_event}?orderNumber=${formatOrderID}&email=${formFields.email}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("order", JSON.stringify(json.data));
        navigate(`/manage-my-booking/${formatOrderID}`);
      })
      .catch((err) => (showError(), setLoading(false)));
  };

  return (
    <div>
      <Header />
      <Container>
        <Breadcrumbs>
          <a href="/">Home</a>
          <span>&gt;</span>
          <span>Manage My Booking</span>
        </Breadcrumbs>
        <Wrapper>
          <TrackingCard>
            <Heading>Manage My Booking</Heading>
            <ColumnForm onSubmit={handleSubmit}>
              <InputGroup>
                <label htmlFor="orderNumber">Order Number</label>
                <input
                  type="text"
                  id="orderNumber"
                  name="orderNumber"
                  placeholder="ORD1000"
                  required
                  value={formFields.orderNumber}
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  value={formFields.email}
                  onChange={handleChange}
                />
              </InputGroup>
              <SubmitButton>Submit</SubmitButton>
              <FooterText>
                If you have forgotten your Order Number, please contact us on:{" "}
                <b>support@hubbagolf.com</b> and we will email you your order
                details.
              </FooterText>
            </ColumnForm>
          </TrackingCard>
        </Wrapper>
      </Container>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        message={modalMessage}
        type={modalType}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Tracking;
