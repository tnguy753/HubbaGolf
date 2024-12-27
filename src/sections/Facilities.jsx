import React from "react";
import { Heading } from "../components/index";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import { getCountryID, formatUrlPath } from "../helpers.js";

import { fetchLocation, fetchCourseByCountryID } from "../hook/use-hook";
import { config } from "../assets/config.js";
// import { FacilityModal } from "../components/FacilityModal.jsx";
import { CardContainer, FacilityCard } from "../components/index";

// Wrapper for the entire section
export const FacilitiesWrapper = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 1rem 10rem;
  align-items: center;
  gap: 1rem;

  /* Adjust padding for tablets */
  @media (max-width: 1200px) {
    padding: 1rem 2rem;
  }

  /* Adjust padding for tablets */
  @media (max-width: 1024px) {
    padding: 1rem 5rem;
  }

  /* Adjust padding for mobile */
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const Facilities = () => {
  const navigate = useNavigate();
  const { country } = useParams();
  const { locationData } = fetchLocation();
  const location = sessionStorage.getItem("location");
  const countryId = getCountryID(locationData, country);
  const { courseData } = fetchCourseByCountryID(countryId ?? 8);

  return (
    <FacilitiesWrapper>
      <Heading>Our Top Service and Packages</Heading>
      <CardContainer>
        {courseData
          .sort((a, b) => a.rank - b.rank)
          .map((facility, index) => (
            <FacilityCard
              key={index}
              onClick={() =>
                facility.facilityName.includes("Shopping")
                  ? navigate("/shop")
                  : navigate(
                      `/${(location || "singapore")
                        .toLowerCase()
                        .replace(/ /g, "-")}/${formatUrlPath(
                        facility.facilityName
                      )}`
                    )
              }
            >
              <img
                src={config.base + facility.urlImage}
                alt={facility.facilityName}
              />
              <div className="overlay">{facility.facilityName}</div>
            </FacilityCard>
          ))}
      </CardContainer>
    </FacilitiesWrapper>
  );
};

export default Facilities;
