import React, { useState, useEffect } from "react";
import { SubTitle, Heading } from "../components/index";
import LoadingPage from "../pages/LoadingPage";
import styled from "styled-components";
import { InputGroup, FormWrapper } from "../components/index";
import { Modal } from "../components/Modal";
import { config } from "../assets/config";
import images from "../assets/images";
import { fetchCourseByCountry, fetchLocation } from "../hook/use-hook";

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
  background: url(${images.formImg}) no-repeat center/cover;

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

const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
  font-family: Arial, sans-serif;
`;

const SelectedOption = styled.div`
  padding: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: #fff;

  span {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 20px;
      height: 15px;
      border-radius: 3px;
    }
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
  background-color: #fff;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  li {
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f0f0f0;
    }

    img {
      width: 20px;
      height: 15px;
      border-radius: 3px;
    }
  }
`;
const FormBooking = () => {
  const [inputFields, setInputFields] = useState({ PlayerNumber: 1 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("success");
  const [modalMessage, setModalMessage] = useState("");
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { courseData } = fetchCourseByCountry();
  const { locationData } = fetchLocation();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (country) => {
    setSelected(country);
    setInputFields({
      ...inputFields,
      Country: country.countryName,
      Course: "",
    });
    setIsOpen(false);
  };

  const [selected, setSelected] = useState(
    courseData[0] || {
      countryName: "Select country",
      // flags: { png: "" },
    }
  );

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.id]: e.target.value });
  };

  const showSuccess = (orderID) => {
    setModalMessage(
      `You have successfully booked!. Your order number is #${orderID}`
    );
    setModalType("success");
    setIsModalOpen(true);
  };

  const showError = () => {
    setModalMessage("Something went wrong. Please try again.");
    setModalType("error");
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchCourses = (id) => {
      fetch(`${config.get_course_by_country}?id=${id}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setCourseList(data);
          if (data.length > 0) {
            setInputFields((prev) => ({
              ...prev,
              Course: data[0].title,
            }));
          }
        })
        .catch((err) => console.log(err));
    };

    fetchCourses(selected.countryId);
  }, [selected.countryId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(config.post_add_event, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputFields),
    })
      .then((res) => res.json())
      .then((json) => (showSuccess(json.data.orderNumber), setLoading(false)))
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
          <form onSubmit={handleSubmit}>
            <FormWrapper>
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

              <InputGroup>
                <label htmlFor="Country">Country</label>
                <DropdownWrapper>
                  <SelectedOption onClick={toggleDropdown}>
                    <span>
                      {!selected?.flags?.png ? undefined : (
                        <img
                          src={
                            selected?.countryName == golfCountries.name.common
                              ? golfCountries.flags?.png
                              : ""
                          }
                          alt={`${selected?.countryName} flag`}
                        />
                      )}

                      {selected?.countryName}
                    </span>
                    <span>&#9662;</span> {/* Down arrow */}
                  </SelectedOption>
                  {isOpen && (
                    <DropdownList>
                      {locationData.map((country, index) => (
                        <li key={index} onClick={() => selectOption(country)}>
                          {country.countryName}
                        </li>
                      ))}
                    </DropdownList>
                  )}
                </DropdownWrapper>
              </InputGroup>

              <InputGroup>
                <label htmlFor="Course">Golf Courses </label>
                <select id="Course" onChange={handleChange} defaultValue={"1"}>
                  {courseList.map((course, index) => (
                    <option key={index}>{course.title}</option>
                  ))}
                </select>
              </InputGroup>

              <InputGroup>
                <label htmlFor="StartDate">Start Date</label>
                <input
                  required
                  type="date"
                  id="StartDate"
                  onChange={handleChange}
                />
              </InputGroup>

              <InputGroup>
                <label htmlFor="EndDate">End Date</label>
                <input
                  required
                  type="date"
                  id="EndDate"
                  onChange={handleChange}
                />
              </InputGroup>

              <SubmitButton type="submit">Book Now!</SubmitButton>
            </FormWrapper>
          </form>
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
