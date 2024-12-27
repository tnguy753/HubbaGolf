import React, { useState } from "react";
import Header from "../components/Header";
import { TitleBar, RoundedButton } from "../components/index";
import images from "../assets/images/index";
import styled from "styled-components";
import Footer from "./Footer";

const NavigationBar = styled(TitleBar)`
  display: flex;
  justify-content: space-between;
`;
const ShopBanner = styled.div`
  text-align: center;

  img {
    width: 1260px;
    height: 380px;
    object-fit: cover;
  }

  @media (max-width: 1400px) {
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`;

const GolfCategoryWrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  gap: 3rem;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    width: 120px;
  }
  h4 {
    font-size: 1.3rem;
    font-weight: 400;
  }

  @media (max-width: 1024px) {
    padding: 1.5rem;
    flex-wrap: wrap;
    gap: 1rem;
    h4 {
      font-size: 1rem;
    }
  }

  @media (max-width: 765px) {
    padding: 1.5rem;
    flex-wrap: wrap;
    gap: 1rem;
    h4 {
      font-size: 1rem;
    }
    div {
      width: 90px;
    }
  }
`;

const ProductSection = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 4rem;
  background-color: #e7f8f5;
  justify-content: space-evenly;

  div {
    width: 100%;
    text-align: center;
  }

  h2 {
    font-size: 2rem;

    padding-bottom: 0.5rem;
  }

  img {
    height: 240px;
    object-fit: contain;
  }

  @media (max-width: 996px) {
    padding: 1rem;
    h2 {
      font-size: 1.2rem;
    }
    img {
      height: 170px;
    }
  }

  @media (max-width: 538px) {
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
    div {
      width: 100%;
    }
    img {
      width: 250px;
      height: auto;
    }
    h2 {
      font-size: 1.2rem;
      padding-bottom: 0.5rem;
    }
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Product = styled.div`
  padding: 1rem;
  text-align: center;
  background: #fff;
  border-radius: 1rem;
  background: #f5f5f5;

  img {
    max-width: 50%;
    height: auto;
  }

  .price {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--blue);
    padding-bottom: 0.5rem;
    span {
      font-size: 1rem;
      font-weight: 200;
    }
  }
`;
const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 120px;
  font-size: 14px;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 1000;
  width: 100%;

  li {
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    color: #333;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const Shop = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Singapore");

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };
  const categories = [
    { icon: images.golfBall, title: "Golf Ball" },
    { icon: images.golfSet, title: "Golf Set" },
    { icon: images.golfGlove, title: "Glove" },
    { icon: images.golfHat, title: "Apparel" },
    { icon: images.golfAccessories, title: "Accessories" },
  ];

  const products = [
    {
      name: "Pro V1",
      price: "$545.00",
      originalPrice: "$600.00",
      image: images.shop1,
    },
    {
      name: "Pro V1x",
      price: "$545.00",
      originalPrice: "$600.00",
      image: images.shop2,
    },
    {
      name: "Titleist AVX",
      price: "$545.00",
      originalPrice: "$600.00",
      image: images.shop3,
    },
    {
      name: "Pro V1",
      price: "$545.00",
      originalPrice: "$600.00",
      image: images.shop4,
    },
    {
      name: "Pro V1x",
      price: "$545.00",
      originalPrice: "$600.00",
      image: images.golf,
    },
    {
      name: "Pro V1",
      price: "$545.00",
      originalPrice: "$600.00",
      image: images.golf,
    },
    {
      name: "Pro V1x",
      price: "$545.00",
      originalPrice: "$600.00",
      image: images.golf,
    },
    {
      name: "Titleist AVX",
      price: "$545.00",
      originalPrice: "$600.00",
      image: images.golf,
    },
  ];

  return (
    <div>
      <Header isShop={true} />{" "}
      <NavigationBar>
        Home / Golf Equipment / Apparel{" "}
        <DropdownWrapper>
          <DropdownButton onClick={toggleDropdown}>
            {selectedOption} <span style={{ marginLeft: "5px" }}>▼</span>
          </DropdownButton>
          {isDropdownOpen && (
            <DropdownMenu>
              {["Singapore", "Indonesia", "Malaysia"].map((option, index) => (
                <li key={index} onClick={() => selectOption(option)}>
                  {option}
                </li>
              ))}
            </DropdownMenu>
          )}
        </DropdownWrapper>
      </NavigationBar>
      <ShopBanner>
        <img src={images.shopBanner} />
      </ShopBanner>
      <GolfCategoryWrapper>
        {categories.map((item, index) => (
          <div key={index}>
            <img src={item.icon} width={50} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </GolfCategoryWrapper>
      <ProductSection>
        <div>
          <h2>Elevate your game </h2>
          <h2>With the perfect ball</h2>
          <RoundedButton>View more</RoundedButton>
        </div>
        <div className="image-wrapper">
          <img src={images.products} />
        </div>
      </ProductSection>
      <ProductGrid>
        {products.splice(0, 4).map((product, index) => (
          <Product key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">
              {product.price}
              <span style={{ textDecoration: "line-through", color: "#000" }}>
                {product.originalPrice}
              </span>
            </p>
            <RoundedButton>Buy now</RoundedButton>
          </Product>
        ))}
      </ProductGrid>
      <ProductSection>
        <div>
          <h2>Unlock your full </h2>
          <h2>Potential with the right set</h2>
          <RoundedButton>View more</RoundedButton>
        </div>
        <div className="image-wrapper">
          {" "}
          <img src={images.golfStick} />
        </div>
      </ProductSection>
      <ProductGrid>
        {products.map((product, index) => (
          <Product key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">
              {product.price}
              <span style={{ textDecoration: "line-through", color: "#000" }}>
                {product.originalPrice}
              </span>
            </p>
            <RoundedButton>Buy now</RoundedButton>
          </Product>
        ))}
      </ProductGrid>
      <br />
      <Footer />
    </div>
  );
};

export default Shop;
