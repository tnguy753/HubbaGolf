import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { ColumnForm, InputGroup } from "../components";

const ContactPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("https://images.unsplash.com/photo-1544914379-806667cd9489?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    no-repeat center/cover;
  height: 100vh;
`;

const ContactCard = styled.div`
  position: relative;
  z-index: 2;
  background: white;
  padding: 40px;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

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

const ContactPage = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, e.g., API call.
    alert("Thank you for reaching out!");
  };

  return (
    <>
      <Header />
      <ContactPageWrapper>
        <ContactCard>
          <Heading>Contact Us</Heading>
          <ColumnForm onSubmit={handleSubmit}>
            <InputGroup>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                value={formFields.name}
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
            <InputGroup>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                required
                value={formFields.message}
                onChange={handleChange}
              ></textarea>
            </InputGroup>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ColumnForm>
          <FooterText>We’ll get back to you within 24 hours.</FooterText>
        </ContactCard>
      </ContactPageWrapper>
    </>
  );
};

export default ContactPage;
