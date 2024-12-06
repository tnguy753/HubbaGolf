import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBolt, FaHeart, FaUndoAlt } from "react-icons/fa";
import { getCurrency } from "../helpers.js";
const BookingWrapper = styled.div`
  background: #f5f5f5;
  border-radius: 0.5rem;
  border: 1px #d5d5d5 solid;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky;

  h2 {
    font-size: 1.5rem;
    color: #2d3748;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.7rem;
    color: #4a5568;
  }

  .date-time {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    div {
      display: flex;
      flex-direction: column;
      text-align: left;

      span {
        font-size: 0.8rem;
        color: var(--blue);
      }

      p {
        font-size: 1rem;
        color: var(--blue); /* Green color for the main text */
        font-weight: bold;
      }
    }
  }

  .price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    color: #2d3748;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
    span {
      color: var(--blue); /* Green for the price */
    }
  }
  .container {
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: #4a5568 1px solid;
  }

  .notes {
    font-size: 0.7rem;
    color: #4a5568;
    border-bottom: #4a5568 1px solid;

    ul {
      list-style-type: none;
      padding: 0;

      li {
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;

        &:before {
          content: "•";
          color: var(--blue); /* Green bullet points */
          margin-right: 0.5rem;
        }
      }
    }
  }

  .rentals {
    color: var(--blue);
    font-size: 0.9rem;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: #2d3748;
    }
  }

  button {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    color: white;
    background-color: var(--blue); /* Green background */
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: #2f855a;
    }
  }

  .info {
    display: flex;
    align-items: flex-start;
    text-align: center;
    justify-content: space-around;
    margin-top: 1.5rem;
    font-size: 0.6rem;
    color: var(--blue);

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      svg {
        font-size: 1.2rem;
        color: var(--blue);
      }
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.div`
  background-color: var(--blue);
  font-size: 1.2rem;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem 0.5rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

const Option = styled.div`
  background-color: #008080;

  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;

  label {
    color: white;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem; /* Increased gap for better spacing */
  font-size: 0.8rem;
  color: var(--dark);
  cursor: pointer;

  input {
    appearance: none;
    flex-shrink: 0; /* Prevent the radio button from shrinking */
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;

    &:checked::before {
      content: "";
      width: 0.6rem;
      height: 0.6rem;
      background-color: #65a765;
      border-radius: 50%;
      position: absolute;
    }
  }

  span {
    display: inline-block; /* Prevent content from breaking layout */
    line-height: 1.5; /* Adjust for consistent alignment */
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  .title-time {
    font-size: 0.8rem;
  }
  label {
    font-size: 1rem;
    margin-bottom: 5px;
    width: 60%;
    color: var(--blue);
    font-weight: 600;
  }

  input,
  select,
  textarea {
    padding: 10px;
    font-size: 0.9rem;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    outline: none;
    width: 40%;

    &:focus {
      border-color: #22c55e;
    }
  }

  textarea {
    resize: none;
    height: 100px;
  }
`;

const generateTimeOptions = () => {
  const times = [];
  for (let hour = 6; hour <= 9; hour++) {
    for (let minutes = 0; minutes < 60; minutes += 15) {
      const formattedTime = `${hour}:${minutes.toString().padStart(2, "0")}`;
      times.push(formattedTime);
    }
  }
  return times;
};

const timeOptions = generateTimeOptions();

const BookingSection = ({ price, city, id, name }) => {
  const navigate = useNavigate();
  const currency = getCurrency();
  return (
    <>
      <BookingWrapper>
        <Title>Book a Tee Time at {name}</Title>
        <Content>
          {" "}
          <InputGroup>
            <label htmlFor="StartDate">Date of play:</label>
            <input required type="date" id="StartDate" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="PlayerNumber">No. of players:</label>
            <select id="PlayerNumber" defaultValue={"1"}>
              {Array.from({ length: 8 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </InputGroup>
          <h4>Select Green Fees</h4>
          <Option>
            <RadioGroup>
              <RadioLabel>
                <input type="radio" name="options" value="option1" checked />
                <span>18 Holes + Caddie + Shared Cart (Early Start)</span>
              </RadioLabel>
            </RadioGroup>
          </Option>
          <Option>
            <RadioGroup>
              <RadioLabel>
                <input type="radio" name="options" value="option1" checked />
                <span>
                  18 Holes + Caddie + Cart + Meals {currency}4,700 6:30am -
                  14:30pm
                </span>
              </RadioLabel>
            </RadioGroup>
          </Option>
          <div className="notes">
            Notes:
            <ul>
              <li>Club Rental: {currency}1,500 (pay at course)</li>
              <li>Tee sheets at this course open 3 months in advance</li>
              <li>Non-Golfer/Follower: {currency}2,500 (pay at course)</li>
              <li>100% Cancellation fee applies within 7 days of play</li>
              <li>Included meal: choice of breakfast or lunch</li>
              <li>Single golfers will be joined up with other players</li>
            </ul>
            {/* <div className="rentals">RENTALS & ADD-ONS</div> */}
          </div>
          <div className="container">
            <h4>Select Tee Times</h4>
            <p>
              It's important you choose the time you wish to play as the golf
              course will book a tee time between the times you select.
            </p>
            <InputGroup>
              <label htmlFor="StartDate" className="title-time">
                Earliest acceptable time:
              </label>
              <select id="PlayerNumber" defaultValue={"1"}>
                {timeOptions.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </InputGroup>
            <InputGroup>
              <label htmlFor="PlayerNumber" className="title-time">
                Latest acceptable time:
              </label>
              <select id="PlayerNumber" defaultValue={"1"}>
                {timeOptions.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </InputGroup>
          </div>
          <div className="container">
            <h4>Add transfers to golf course</h4>
            <RadioGroup>
              <RadioLabel>
                <input
                  defaultChecked
                  type="radio"
                  name="transfer"
                  value="no_transfer"
                  // checked={selectedOption === "no_transfer"}
                  // onChange={handleChange}
                />
                No transfer required
              </RadioLabel>
              <RadioLabel>
                <input
                  type="radio"
                  name="transfer"
                  value="return_transfer"
                  // checked={selectedOption === "return_transfer"}
                  // onChange={handleChange}
                />
                Return transfer
              </RadioLabel>
            </RadioGroup>
          </div>
          <h4>Total per person</h4>
          <div className="price">
            <span> SGD 4,700 </span>
          </div>
          <h4>Booking Total</h4>{" "}
          <div className="price">
            <span> {currency} 9,400 </span>
          </div>
          {/* <button onClick={() => navigate(`/courses/${city}/${id}/booking`)}>
        Book Now
      </button> */}
          <button onClick={() => navigate(`/payment`)}>Book Now</button>
          <div className="info">
            <div>
              <FaBolt />
              <span>Instant Booking Confirmation</span>
            </div>
            <div>
              <FaHeart />
              <span>Trusted by 1M+ Golfers</span>
            </div>
            <div>
              <FaUndoAlt />
              <span>Free Changes & Cancellations</span>
            </div>
          </div>
        </Content>
      </BookingWrapper>
    </>
  );
};

export default BookingSection;
