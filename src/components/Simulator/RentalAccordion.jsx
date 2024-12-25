import React, { useState } from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
  width: 100%;
  margin: 10px 0;
  //   border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

const AccordionHeader = styled.div`
  //   background-color: #f4f4f4;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  color: var(--blue);
`;

const AccordionContent = styled.div`
  padding: 10px;
  //   border-top: 1px solid #ccc;
`;

const RentalItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px 0;
  border: 1px #d5d5d5 solid;
  padding: 1rem;
  border-radius: 1rem;
`;

const DetailsToggle = styled.button`
  background: none;
  border: none;
  color: var(--blue);
  cursor: pointer;
  text-decoration: underline;
  text-align: left;
`;

const SelectButton = styled.button`
  padding: 5px 10px;
  background-color: var(--blue);
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Accordion = ({ title, rentals, value }) => {
  const [isOpen, setIsOpen] = useState(value);
  const [showDetails, setShowDetails] = useState(
    Array(rentals.length).fill(false)
  );
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const toggleDetails = (index) => {
    setShowDetails((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails[index] = !newDetails[index];
      return newDetails;
    });
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </AccordionHeader>
      {isOpen && (
        <AccordionContent>
          {rentals.map((rental, index) => (
            <RentalItem key={index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <strong>{rental.title}</strong>

                <DetailsToggle onClick={() => toggleDetails(index)}>
                  {showDetails[index] ? "Hide Details" : "Show Details"}
                </DetailsToggle>
                {showDetails[index] && (
                  <div
                    style={{
                      textAlign: "left",
                      marginTop: "0.5rem",
                      fontSize: "0.8rem",
                    }}
                  >
                    <p style={{ fontWeight: 600 }}>Peak Hours</p>
                    <p>M-F: 5pm - Close</p>
                    <p>Sa-Su: All Day</p>
                  </div>
                )}
              </div>
              <SelectButton>Select</SelectButton>
            </RentalItem>
          ))}
        </AccordionContent>
      )}
    </AccordionContainer>
  );
};

export default Accordion;
