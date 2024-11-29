import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBolt, FaHeart, FaUndoAlt } from "react-icons/fa";

const BookingWrapper = styled.div`
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px #d5d5d5 solid;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky;

  h2 {
    font-size: 1.5rem;
    color: #2d3748;
    margin-bottom: 1rem;
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
    margin: 1rem 0;

    span {
      color: var(--blue); /* Green for the price */
    }
  }

  .notes {
    font-size: 0.9rem;
    color: #4a5568;

    margin-bottom: 1rem;

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

const BookingSection = ({ price, city, id }) => {
  const navigate = useNavigate();
  return (
    <BookingWrapper>
      <h2>Book a Tee Time</h2>

      <div className="date-time">
        <div>
          <span>Select Date of Play</span>
          <p>
            Wednesday
            <br />4 December 2024
          </p>
        </div>
        <div>
          <span>Tee Times & Players</span>
          <p>
            8:40am
            <br />1 Player (18 Holes)
          </p>
        </div>
      </div>

      <div className="notes">
        <ul>
          <li>18 Holes</li>
          <li>Shared Golf Cart</li>
          <li>GPS</li>
          <li>Unlimited Driving Range Balls</li>
          <li>Inclusive of EGF golf development fee</li>
          <li>Please adhere to safety guidelines</li>
          <li>Free Cancellation</li>
        </ul>
        {/* <div className="rentals">RENTALS & ADD-ONS</div> */}
      </div>

      <div className="price">
        <span> {price}</span>
      </div>

      <button onClick={() => navigate(`/courses/${city}/${id}/booking`)}>
        Book Now
      </button>

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
    </BookingWrapper>
  );
};

export default BookingSection;
