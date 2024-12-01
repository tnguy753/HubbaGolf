import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaLocationArrow, FaLocationDot } from "react-icons/fa6";
import { capitalizeFirstLetter } from "../helpers.js";

const CoursesCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: left;
  width: 350px;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .recommended {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: orange;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }

  div {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  h3 {
    font-size: 1.2rem;
    // height: 55px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h4 {
    color: var(--blue);
    font-size: 1rem;
  }

  p {
    font-size: 0.9rem;
    color: #718096;
  }

  .location {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.2rem;
    padding: 0;
    font-size: 0.9rem;
    color: var(--secondary);

    p {
      color: var(--secondary);
    }
  }

  .call-to-action {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0;

    button {
      padding: 0.5rem 2rem;
      font-size: 1rem;
      color: white;
      background-color: var(--blue);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: var(--darkblue);
      }
    }

    .status-closed {
      color: red;
      font-weight: bold;
    }

    .view-map {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.2rem;
      color: var(--blue);
      cursor: pointer;

      a {
        text-decoration: none;
        font-size: 0.9rem;
      }

      &:hover {
        color: var(--darkblue);
      }
    }
  }
`;

const GolfCard = ({
  img,
  name,
  price,
  province,
  details,
  id,
  recommended,
  status,
  reload,
}) => {
  const navigate = useNavigate();
  return (
    <CoursesCard>
      <img src={img} alt={name} />
      {recommended && <span className="recommended">RECOMMENDED</span>}

      <div>
        <h3>{name}</h3>
        <h4>{price}</h4>

        <div className="location">
          <FaLocationDot />
          <p>{capitalizeFirstLetter(province)}</p>
        </div>

        {details && (
          <p>
            {details.yards} yards | {details.type}
          </p>
        )}

        <div className="call-to-action">
          {status === "Permanently Closed" ? (
            <span className="status-closed">Permanently Closed</span>
          ) : (
            <button
              onClick={() =>
                navigate(
                  `/courses/${province.toLowerCase()}/${id}`,
                  reload && location.reload()
                )
              }
            >
              Book
            </button>
          )}
          <div className="view-map">
            <FaLocationArrow />
            <a>View on Map</a>
          </div>
        </div>
      </div>
    </CoursesCard>
  );
};

export default GolfCard;
