import React, { useState, useEffect } from "react";
import { SubTitle, Heading } from "../components/index";
import LoadingPage from "../pages/LoadingPage";
import styled from "styled-components";

import { Modal } from "../components/Modal";

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8fafc;
  padding: 4rem;
  padding-bottom: 6rem;
  flex-direction: column;
  text-align: center;

  @media (max-width: 375px) {
    padding: 1rem;
  }
`;

const BookingCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  max-width: 1200px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  background: url("https://images.unsplash.com/photo-1597369237991-5c95d1b6e0c8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    no-repeat center/cover;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const FormSection = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const Header = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2d3748;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.9rem;
    margin-bottom: 5px;
    color: #4a5568;
  }

  input,
  select {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    outline: none;

    &:focus {
      border-color: #22c55e;
    }
  }
`;
const ComboBoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.9rem;
    margin-bottom: 5px;
    color: #4a5568;
  }
`;

const TextInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  outline: none;
  width: 100%;

  &:focus {
    border-color: #22c55e;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  background-color: white;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }

  img {
    width: 20px;
    height: 15px;
    margin-right: 10px;
  }
`;
const SubmitButton = styled.button`
  grid-column: span 2;
  padding: 12px;
  background-color: var(--blue);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--darkblue);
  }

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const FormBooking = () => {
  const [inputFields, setInputFields] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("success");
  const [modalMessage, setModalMessage] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country.name.common);
    setSearchValue(country.name.common);
    setInputFields({ ...inputFields, Country: country.name.common });
    setIsDropdownOpen(false);
  };

  const filteredCountries = countryList.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );
  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.id]: e.target.value });
  };

  const showSuccess = () => {
    setModalMessage("You have successfully booked!");
    setModalType("success");
    setIsModalOpen(true);
  };

  const showError = () => {
    setModalMessage("Something went wrong. Please try again.");
    setModalType("error");
    setIsModalOpen(true);
  };

  const fetchCountry = () => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags", {
      method: "GET",
    })
      .then((res) => res.json()) // Parse the response to JSON
      .then((data) => setCountryList(data)) // Log the data
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://webgolfadmin.azurewebsites.net/Home/AddEvent", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputFields),
    })
      .then((res) => (showSuccess(), setLoading(false)))
      .catch((err) => (showError(), setLoading(false)));
  };

  return (
    <Container id="form">
      <SubTitle>Book Now</SubTitle>
      <Heading>Spaces fill fast, book early!</Heading>
      <BookingCard>
        {/* Left Image Section */}
        <ImageSection />

        {/* Right Form Section */}
        <FormSection>
          <Header>Book a Tee Time</Header>

          {loading && <LoadingPage />}
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <label htmlFor="Name">Your Name</label>
              <input
                required
                type="text"
                id="Name"
                placeholder="Enter your name"
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="Phone">Phone</label>
              <input
                required
                type="tel"
                id="Phone"
                placeholder="Enter your phone"
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="Email">Email</label>
              <input
                required
                type="email"
                id="Email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="PlayerNumber">Number of Players</label>
              <select
                id="PlayerNumber"
                onChange={handleChange}
                defaultValue={"1"}
              >
                {Array.from({ length: 8 }, (_, i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </InputGroup>

            <ComboBoxWrapper>
              <label htmlFor="Country">Country</label>
              <TextInput
                id="Country"
                placeholder="Search or select a country"
                value={searchValue}
                onChange={handleInputChange}
                onFocus={() => setIsDropdownOpen(true)}
              />
              {isDropdownOpen && filteredCountries.length > 0 && (
                <DropdownList>
                  {filteredCountries.map((country, index) => (
                    <DropdownItem
                      key={index}
                      onClick={() => handleSelectCountry(country)}
                    >
                      <img
                        src={country.flags.png}
                        alt={`${country.name.common} flag`}
                      />
                      {country.name.common}
                    </DropdownItem>
                  ))}
                </DropdownList>
              )}
            </ComboBoxWrapper>

            <InputGroup>
              <label htmlFor="Course">Golf Courses </label>
              <select id="Course" onChange={handleChange} defaultValue={"1"}>
                {Array.from({ length: 8 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    No. {i + 1}
                  </option>
                ))}
              </select>
            </InputGroup>

            <InputGroup>
              <label htmlFor="StartDate">Start Date</label>
              <input
                required
                type="datetime-local"
                id="StartDate"
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="EndDate">End Date</label>
              <input
                required
                type="datetime-local"
                id="EndDate"
                onChange={handleChange}
              />
            </InputGroup>

            <SubmitButton type="submit">Book Now!</SubmitButton>
          </Form>
        </FormSection>
      </BookingCard>

      <Modal
        isOpen={isModalOpen}
        message={modalMessage}
        type={modalType}
        onClose={() => setIsModalOpen(false)}
      />
    </Container>
  );
};

export default FormBooking;
