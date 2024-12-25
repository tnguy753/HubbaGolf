import React from "react";
import styled from "styled-components";
import Accordion from "./RentalAccordion";

const Section = styled.div`
  // background-color: #f9fafb;
  // padding: 40px 16px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 32px;
`;

const OverviewPrice = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem;
  background-color: #2f4f5a;
  color: #95e6ff;
  font-size: 1.5rem;
  text-transform: uppercase;
  p {
    font-weight: lighter;
    font-size: 1rem;
  }
`;
const PricingSection = () => {
  const offPeakRentals = [
    { title: "0.5 Hour Rental" },
    { title: "1 Hour Rental" },
    { title: "1.5 Hour Rental" },
    { title: "2 Hour Rental" },
    { title: "2.5 Hour Rental" },
    { title: "3 Hour Rental" },
    { title: "3.5 Hour Rental" },
    { title: "4 Hour Rental" },
  ];

  const peakSimRentals = [
    { title: "0.5 Hour Rental" },
    { title: "1 Hour Rental" },
    { title: "1.5 Hour Rental" },
    { title: "2 Hour Rental" },
    { title: "2.5 Hour Rental" },
    { title: "3 Hour Rental" },
    { title: "3.5 Hour Rental" },
    { title: "4 Hour Rental" },
  ];
  return (
    <Section>
      <Grid>
        <div>
          <SectionTitle>5i Singapore Simulator Rentals</SectionTitle>
          <Accordion
            title="Off-Peak Rentals"
            rentals={offPeakRentals}
            value={true}
          />
          <Accordion title="Peak Sim Rentals" rentals={peakSimRentals} />
        </div>
        <OverviewPrice>
          <h5>+ OFF-PEAK RENTALS</h5>
          <p>OPEN-5PM WEEKDAYS</p>
          <p>
            <strong>$45</strong> per half hour
          </p>
          <p>
            <strong>$90</strong> per hour
          </p>
          <h5>+ PEAK RENTALS</h5>
          <p>AFTER 5PM WEEKDAYS AND ALL DAY ON WEEKENDS</p>
          <p>
            <strong>$55</strong> per half hour
          </p>
          <p>
            <strong>$110</strong> per hour
          </p>
        </OverviewPrice>
      </Grid>
    </Section>
  );
};

export default PricingSection;
