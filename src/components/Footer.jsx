import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaSkype, FaWhatsapp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
// Styled Components
const FooterContainer = styled.footer`
  background-color: var(--blue);
  color: #ffffff;
  padding: 40px 20px;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Section = styled.div`
  flex: 1;
  min-width: 250px;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 15px;
  }
`;

const Links = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;
    text-transform: capitalize;

    a {
      text-decoration: none;
      color: #ffffff;
      font-size: 14px;

      &:hover {
        color: #cccccc;
      }
    }
  }
`;

const ContactInfo = styled.div`
  font-size: 14px;
  line-height: 1.6;

  a {
    text-decoration: none;
    color: #ffffff;
    &:hover {
      color: #cccccc;
    }
  }
`;

const Newsletter = styled.div`
  form {
    display: flex;
    ::placeholder {
      color: white;
      opacity: 1; /* Firefox */
    }
  }
  input {
    padding: 10px;
    width: 100%;
    max-width: 300px;
    border: 1px white solid;
    border-radius: 4px 0px 0 4px;
    background: transparent;
    color: white;
  }

  button {
    background-color: var(--white);
    color: var(--blue);
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    padding: 0.4rem;
    border: 0.5px #cccccc solid;
    color: #ffffff;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    transition: color 0.3s;
    width: 30px;
    height: 30px;
    border-radius: 6px;

    &:hover {
      background: #f5f5f5;
      color: var(--blue);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
  color: #cccccc;

  a {
    margin: 0 10px;
    color: #ffffff;

    &:hover {
      color: #cccccc;
    }
  }
`;

// Footer Component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Section>
          <h3>HubbaGolf</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry...
          </p>
          <SocialLinks>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Skype">
              <FaSkype />
            </a>
            <a href="#" aria-label="Whatsapp">
              <FaWhatsapp />
            </a>
          </SocialLinks>
        </Section>

        <Section>
          <h3>Quick Links</h3>
          <Links>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#form">Track your Booking</a>
            </li>
          </Links>
        </Section>

        <Section>
          <h3>Address</h3>
          <ContactInfo>
            <p>(480) 555-0103</p>

            <p>
              <a href="mailto:debra.holt@example.com">debra.holt@example.com</a>
            </p>
            <p>285 Great North Road, Grey Lynn, Auckland 1021</p>
          </ContactInfo>
        </Section>

        <Section>
          <h3>Newsletter</h3>
          <Newsletter>
            <p>Subscribe to get the latest updates & news.</p>
            <form>
              <input type="email" placeholder="Your email address" />
              <button type="submit">
                <IoIosSend />
              </button>
            </form>
          </Newsletter>
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
