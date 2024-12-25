import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { config } from "../assets/config";
// Styled component for the slider container
const SliderContainer = styled.div`
  margin: 0 auto;
  width: 100%; /* Fallback */

  @media (min-width: 768px) {
    width: 400px;
  }
  @media (min-width: 1024px) {
    width: 800px;
  }
`;

const ArticleSlider = ({ articleContent }) => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll per action
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // Auto-slide interval in milliseconds
  };

  return (
    <SliderContainer>
      {articleContent?.lstUrlImage?.length ? (
        <Slider {...settings}>
          {articleContent.lstUrlImage.map((url, index) => (
            <div key={index}>
              <img
                src={`${config.baseNoSlash}${url}`}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p>No images available</p>
      )}
    </SliderContainer>
  );
};

export default ArticleSlider;
