import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  gap: 1rem;
  @media (max-width: 768px) {
    margin-top: 0rem;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--blue);
  text-align: left;
  width: 100%;
  margin-top: 1rem;
`;

const FooterText = styled.p`
  font-size: 0.875rem;
`;

const Banner = styled.div`
  background: var(--blue);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  width: 55%;
  h5 {
    font-size: 1rem;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
  }
  p {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 1rem;
  }
`;

const Footer = () => (
  <FooterContainer>
    <Banner>
      <h5>
        Save money when you purchase a package of sim rental sessions or
        lessons!
      </h5>
      <p>
        If you’d like to apply your session to a package, please let the front
        desk know at the time of your session.
      </p>
    </Banner>
    <FooterTitle>Cancellation Policies and Fees</FooterTitle>
    <FooterText>
      Five Iron Golf Singapore can be popular at times. We value your business
      and humbly request that you adhere to our scheduling policies to avoid any
      disappointments.
      <ul>
        {" "}
        <li>
          Should you need to cancel or reschedule, please notify us via phone or
          email at least 12 hours in advance. Any cancellations with less than
          12 hours of notice are subject to a cancellation fee amounting to 50%
          of the cost of the scheduled service.
        </li>
        <li>
          Clients who miss their appointments or are more than 10 minutes late
          without giving any prior notice will be charged in full for the
          scheduled service.
        </li>
        <li>
          Clients with 5i Membership who miss their appointments or are more
          than 10 minutes late without giving any prior notice will be charged a
          flat cancellation fee of $35.
        </li>
        <li>
          Five Iron Golf Singapore reserves the right to give away your
          simulator after 10 minutes and charge the no-show fee.
        </li>
        <li>
          All services longer than two hours require a credit card to guarantee
          a reservation.
        </li>
      </ul>
    </FooterText>
  </FooterContainer>
);

export default Footer;
