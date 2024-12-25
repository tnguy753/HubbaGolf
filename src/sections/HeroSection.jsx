import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { LocationModal } from "../components/LocationModal";
import { fetchBanner } from "../hook/use-hook";
import { config } from "../assets/config";
import { Container } from "../components";

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 200px;
  background: ${({ image }) =>
    image ? `url(${image}) no-repeat center center/cover` : "none"};
  color: white;

  @media (max-width: 1024px) {
    height: 35vh;
  }

  @media (max-width: 768px) {
    height: 18vh;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
      font-weight: bold;

      @media (max-width: 768px) {
        font-size: 1.5rem;
        margin-bottom: 0.2rem;
      }
    }

    p {
      font-size: 1.2rem;
      max-width: 600px;
      margin: 0 auto;
      margin-bottom: 2rem;

      @media (max-width: 768px) {
        font-size: 0.8rem;
        max-width: 60%;
        margin-bottom: 1rem;
      }
    }
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  color: white;
  font-size: 2rem;

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
  }

  &:hover {
    color: #ccc;
  }
`;

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { bannerImg } = fetchBanner();

  const CustomPrevArrow = ({ onClick }) => (
    <Arrow className="prev" onClick={onClick}>
      &#10094; {/* Left arrow */}
    </Arrow>
  );

  const CustomNextArrow = ({ onClick }) => (
    <Arrow className="next" onClick={onClick}>
      &#10095; {/* Right arrow */}
    </Arrow>
  );

  const BannerContainer = styled(Container)`
    padding-top: 0;
    padding-bottom: 0;

    gap: 0rem;
    @media (max-width: 1024px) {
      padding: 0rem;
    }
  `;

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <BannerContainer>
      <LocationModal
        isOpen={isModalOpen}
        message="22"
        type="success"
        onClose={() => setIsModalOpen(false)}
      />
      <CarouselWrapper>
        <Slider {...sliderSettings}>
          {bannerImg.map((slide) => (
            <HeroSlide key={slide.id} image={`${config.base}${slide.urlImage}`}>
              <div className="content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </div>
            </HeroSlide>
          ))}
        </Slider>
      </CarouselWrapper>
    </BannerContainer>
  );
};

export default HeroSection;
