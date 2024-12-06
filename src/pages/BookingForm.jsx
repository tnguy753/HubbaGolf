import moment from "moment";
import styled from "styled-components";
import { FaInfoCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  Breadcrumbs,
  Container,
  InputGroup,
  FormWrapper,
} from "../components/index";
import Header from "../components/Header";
import LoadingPage from "./LoadingPage.jsx";

import { config } from "../assets/config.js";
import { capitalizeFirstLetter } from "../helpers.js";
import { fetchArticle } from "../hook/use-hook";

const BookingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  gap: 2rem;
  margin-top: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr; /* Stack columns on smaller screens */
  }
`;

const LeftColumn = styled.div`
  button {
    background-color: var(--blue);
    color: white;
    border: none;
    padding: 1rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #28a745;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0.8rem;
    }
  }

  .form-group {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;

    input,
    select {
      flex: 1;
      padding: 0.8rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    @media (max-width: 768px) {
      flex-direction: column; /* Stack inputs on smaller screens */
      gap: 0.5rem;
    }

    .phone-group {
      display: flex;

      select {
        max-width: 60px;

        @media (max-width: 768px) {
          max-width: 100%;
        }
      }

      input {
        flex: 1;

        @media (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const ReservationInfo = styled.div`
  margin-top: 2rem;
  font-size: 0.9rem;

  p {
    margin: 0.5rem 0;
  }

  a {
    color: #007bff;
    text-decoration: underline;
    cursor: pointer;
  }

  small {
    display: block;
    margin-top: 1rem;
    color: #6c757d;
    font-size: 0.85rem;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .icon-info {
      color: var(--blue);
      font-size: 1rem;
    }
  }
`;

const RightColumn = styled.div`
  position: sticky;
  top: 2rem;

  @media (max-width: 1024px) {
    position: static;
  }
`;

const Summary = styled.div`
  background-color: #f9f9f9;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;

  img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.4rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  p {
    color: #6c757d;
    font-size: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const BookingDetails = styled.div`
  margin: 1rem 0;

  div {
    margin-bottom: 0.5rem;

    span {
      font-weight: bold;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const RateIncludes = styled.div`
  h4 {
    font-size: 1.2rem;
    margin: 1rem 0;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 0.5rem 0;
      color: #6c757d;

      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }
`;

const BookingForm = () => {
  const { province, courseID } = useParams();
  const [loading, setLoading] = useState(false);
  const { articleContent } = fetchArticle(courseID);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.id]: e.target.value });
  };
  const [inputFields, setInputFields] = useState({
    Country: capitalizeFirstLetter(province),
    Course: "",
    PlayerNumber: 1,
  });

  useEffect(() => {
    if (articleContent) {
      setInputFields((prev) => ({
        ...prev,
        Course: articleContent.title,
      }));
    }
  }, [courseID]);

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
      .then(
        (json) => (
          navigate(`/payment/${json.data.orderNumber}`), setLoading(false)
        )
      )
      .catch((err) => (alert(err), setLoading(false)));
  };

  return (
    <>
      {loading && <LoadingPage />}
      <Header />
      <Container>
        <Breadcrumbs>
          {" "}
          <a href="/">Home</a>
          <span>&gt;</span>
          <a href={`/courses/${province}`}>{capitalizeFirstLetter(province)}</a>
          <span>&gt;</span>
          <a href={`/courses/${province}/${courseID}`}>
            {articleContent.title}
          </a>
          <span>&gt;</span>
          <span>Booking</span>
        </Breadcrumbs>

        <BookingGrid>
          <form onSubmit={handleSubmit}>
            {/* Left Column - Personal Details & Payment */}
            <LeftColumn>
              <Section>
                <h2>Booking Details</h2>
                <FormWrapper>
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
                    <label htmlFor="PlayerNumber">Number of Players</label>
                    <select
                      id="PlayerNumber"
                      onChange={handleChange}
                      defaultValue={"1"}
                    >
                      {Array.from({ length: 8 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </InputGroup>

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
                    <label htmlFor="Email">Email</label>
                    <input
                      required
                      type="text"
                      id="Email"
                      placeholder="Enter your email"
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
                    <label htmlFor="Note">Special Request</label>
                    <input
                      type="text"
                      id="Note"
                      placeholder="Airport Transfers, etc"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </FormWrapper>
              </Section>

              <ReservationInfo>
                <div className="info">
                  <div className="icon-info">
                    <FaInfoCircle />
                  </div>
                  <p>This course can only be booked 7 days in advance</p>
                </div>
                <div className="info">
                  <div className="icon-info">
                    <FaInfoCircle />
                  </div>

                  <p>
                    Offered tee times are provisional pending full payment. Your
                    tee time may be changed if payment is delayed.
                  </p>
                </div>

                <p>
                  You agree with the golfscape <a href="#">Terms of Use</a> by
                  completing this booking.
                </p>
                <button>Book Now for SGD152 (THB4,025)</button>
                <small>You will receive an instant confirmation</small>
              </ReservationInfo>
            </LeftColumn>
          </form>

          {/* Right Column - Booking Summary */}
          <RightColumn>
            <Summary>
              <img
                src={config.base + articleContent.urlImage} // Replace with actual image
                alt="Golf Course"
              />
              <h3>{articleContent.title}</h3>
              <p>{articleContent.province}</p>
              <BookingDetails>
                <div>
                  <span>Date:</span>{" "}
                  {moment(inputFields.StartDate).format("MMMM Do YYYY")}
                </div>
                {/* <div>
                  <span>Time:</span>{" "}
                  {moment(inputFields.StartDate).format("h:mm:ss a")} (18 Holes)
                </div> */}
                <div>
                  <span>Player:</span> {inputFields.PlayerNumber}
                </div>
                <div>
                  <span>Total:</span> SGD152 (THB4,025)
                </div>
                <div>
                  <small>Includes VAT (5%): SGD9 (THB13,21)</small>
                </div>
              </BookingDetails>
              {/* <PromoCode>
                <select>
                  <option>Discount</option>
                </select>
                <input type="text" placeholder="Promo Code" />
              </PromoCode> */}
              <RateIncludes>
                <h4>Rate Includes / Notes</h4>
                <ul>
                  <li>18 Holes</li>
                  <li>Shared Golf Cart</li>
                  <li>GPS</li>
                  <li>Unlimited Driving Range Balls</li>
                  <li>Inclusive of EGF golf development fee</li>
                  <li>Please adhere to safety guidelines</li>
                  <li>Free Cancellation</li>
                </ul>
              </RateIncludes>
            </Summary>
          </RightColumn>
        </BookingGrid>
      </Container>
    </>
  );
};

export default BookingForm;
