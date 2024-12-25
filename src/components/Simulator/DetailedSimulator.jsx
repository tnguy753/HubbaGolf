import React from "react";
import styled from "styled-components";
import FeatureCard from "./FeatureCard";
import images from "../../assets/images";
import PricingSection from "./PricingSection";
import { CardContainer, Heading } from "../../components/index";
import Footer from "./SimulatorPolicy";

const HeroContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HeroDescription = styled.p`
  margin-top: 16px;
  color: #6b7280;
  font-size: 1rem;
  text-align: left;
`;

const HeroButton = styled.button`
  margin-top: 0.8rem;
  background-color: var(--blue);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    background-color: var(--dark);
  }
`;

const BookingCard = styled.div`
  display: block;
  border-radius: 0.5rem;
  border: 1px #d5d5d5 solid;
  padding: 1.2rem;

  h4 {
    text-transform: uppercase;
    color: var(--blue);
  }
  p {
    margin-top: 0.8rem;
    font-size: 0.8rem;
  }
`;

const DetailedSimulator = () => {
  const features = [
    {
      title: "Driving Range",
      description:
        "Experience unsurpassed accuracy and actionable golf swing data. Figure out your distances and learn exactly where you need to improve. Listen to music and have a chill practice session or dive deep into your data.",
      img: images.sim1,
    },
    {
      title: "Course Play",
      description:
        "You can choose from over 250 championship courses, like Pebble Beach, The Old Course at St. Andrews, and Wentworth, all in extraordinary high-definition graphics. Be brave and try to carry the water, you can’t lose your ball!",
      img: images.sim2,
    },
    {
      title: "Games & Competitions",
      description:
        "Play fun, interactive games like mini golf and bullseye – makes for a fantastic social game night with family and friends! It doesn’t matter whether you’re a complete beginner or a seasoned pro – this is golf entertainment for everyone.",
      img: images.sim3,
    },
  ];

  return (
    <HeroContainer>
      <Heading>Golf Simulator Booking</Heading>
      <HeroDescription>
        Five Iron Golf Singapore is home to Singapore’s best indoor golf
        simulators. Our top-rated golf simulator bays can comfortably host up to
        six people and are available to rent, with prices ranging from $90-110
        per hour depending on the time of day. Each simulator features
        Tour-level TrackMan technology, recommended by top professionals. Come
        in and practice on the dynamic range with full precision analysis or
        bring friends and play on the world’s best courses with high-definition
        graphics or choose to play fun, interactive games like virtual mini golf
        – it’s all in the same hourly rate. Want to rent more than one simulator
        at a time or have a group larger than eight? Give us a call or check out
        our events page.
      </HeroDescription>
      <CardContainer>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
        <BookingCard>
          <h4>Book a simulator now</h4>
          <p>
            The sim number below only reflects general availability and does not
            correlate to the sim number at Five Iron. If you would like a
            specific sim, please email us and we’ll try to accommodate your
            request. Thank you.
          </p>
          <HeroButton>
            Please complete waiver form ere before attending your session
          </HeroButton>
        </BookingCard>
      </CardContainer>
      <PricingSection />
      <Footer />
    </HeroContainer>
  );
};

export default DetailedSimulator;
