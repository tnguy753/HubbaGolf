import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from 'react-icons/fi';
import { InputGroup } from "../components";

const FooterContainer = styled.footer`
  background-color: #e7f6f1;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FooterWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin: 0 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.div`
  flex: 1;
  padding: 30px 30px 10px 30px;
  border-top: 1px solid #cbdad5;
  border-bottom: 1px solid #cbdad5;

  &:not(:last-child) {
    border-right: 1px solid #cbdad5;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    border: none;

    &:not(:last-child) {
        border-right: none;
      }
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  width: 170px;
  display: inline-block;
  padding: 5px 0px;
  font-size: 0.9rem;
  font-weight: normal;
  color: white;
  background-color: black;
  border: none;
  border-radius: 17px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 10px 0px;

  &:hover {
    background-color: black;
  }
`;

const ColumnForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const FooterText = styled.p`
  font-size: 0.8rem;
  color: black;
  margin-top: 20px;
`;

const Copyright = styled.div`
  padding: 10px 0px 20px 45px;
  font-size: 0.8rem;
  color: black;

  a {
    margin: 0 10px;
    color: black;

    &:hover {
      color: #cccccc;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Section>
          <Heading>Contact Us</Heading>
          <ColumnForm >
            <InputGroup>
              <p htmlFor="name">Your Name</p>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </InputGroup>
            <InputGroup>
              <p htmlFor="email">Your Email</p>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </InputGroup>
            <InputGroup>
              <p htmlFor="message">Your Message</p>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                required
              ></textarea>
            </InputGroup>
            <SubmitButton type="submit">Manage your booking</SubmitButton>
          </ColumnForm>
          <FooterText>We’ll get back to you within 24 hours.</FooterText>
        </Section>
        <Section>
          <Heading>Sale enquiries</Heading>
          <p>Get in touch with our sales team to discuss the best options for your business.</p>
          <SubmitButton type="submit">Get in touch with us</SubmitButton>
          <p>or send us an email</p>
          <p>info@example.com</p>
        </Section>
        <Section>
          <Heading>Find us at</Heading>
          <p>Call us for more information.</p>
          <p><FiPhone /> 02309230233</p>
          <p><FaWhatsapp /> 02309230233</p>
          <br></br>
          <p>
            Address<br />
            (480) 555-0103<br />
            285 Great North Road, Grey Lynn, Auckland 1021
          </p>
        </Section>
      </FooterWrapper>
      <Copyright>
        <p>
          Copyright © 2024 HubbaGolf. All Rights Reserved
          <a href="#">Support</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
