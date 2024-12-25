import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import { capitalizeFirstLetter, getCurrency } from "../helpers.js";
import { Modal } from "../components/RepsonseModal";

const CoursesCard = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "shop",
})`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: left;

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

  .content {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  h3 {
    font-size: 1.2rem;
    height: 55px;
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
    align-items: center;
    gap: 0.2rem;
    font-size: 0.9rem;
    color: var(--secondary);

    p {
      color: var(--secondary);
    }
  }

  .call-to-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

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

const ImageWrapper = styled.img`
  width: 100%;
  height: 180px;
  object-fit: ${({ shop }) => (shop ? "contain" : "cover")};
`;

const GolfCard = ({
  img,
  name,
  price,
  province,
  id,
  recommended,
  reload,
  isShop,
}) => {
  const { type } = useParams();
  const [openModal, setOpenModal] = useState();
  const navigate = useNavigate();
  const currency = getCurrency();

  const handleNavigate = () => {
    const defaultProvince = "singapore";
    const resolvedProvince = province || defaultProvince; // Fallback to "singapore" if province is not defined
    const path = `/${resolvedProvince.toLowerCase()}/${type}/${id}`;

    if (reload) {
      location.reload();
    }

    navigate(path);
  };
  const handleAddToCart = () => {
    setOpenModal(true);
  };
  const packages = type.includes("packages");
  const shopping = type.includes("shopping");
  const simulator = type.includes("simulator");

  return (
    <CoursesCard>
      <ImageWrapper src={img} alt={name} shop={isShop} />
      {recommended && <span className="recommended">RECOMMENDED</span>}

      <div className="content">
        <h3>{name}</h3>
        <h4>{currency + price}</h4>

        <div className="location">
          <FaLocationDot />
          <p>{capitalizeFirstLetter(province)}</p>
        </div>

        <p>
          {packages
            ? "2 Nights / 3 Rounds"
            : shopping || simulator
            ? ""
            : "7194 yards | Parkland"}
        </p>

        <div className="call-to-action">
          {shopping ? (
            <button onClick={handleAddToCart}>Add to Cart</button>
          ) : (
            <button onClick={handleNavigate}>Book</button>
          )}
        </div>
      </div>
      <Modal
        isOpen={openModal}
        message={"WORK IN PROGRESS"}
        type={"success"}
        onClose={() => setOpenModal(false)}
      />
    </CoursesCard>
  );
};

export default GolfCard;
