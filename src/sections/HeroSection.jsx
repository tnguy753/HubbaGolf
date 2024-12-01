import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import images from "../assets/images";
// Carousel Wrapper Styles
const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;

  .slick-dots {
    bottom: 20px;
    li button:before {
      color: white;
      font-size: 10px;
    }
    li.slick-active button:before {
      color: #1a4d2e;
    }
  }
`;

// Hero Banner Styles
const HeroSlide = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "image",
})`
  position: relative;
  height: 50vh;
  background: ${({ image }) => `url(${image}) no-repeat center center/cover`};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* This centers content vertically */
    position: relative;
    z-index: 2;
    height: 100%; /* Ensure the content container spans full height */

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: bold;
    }
    p {
      font-size: 1.2rem;
      max-width: 600px;
      margin: 0 auto 2rem;
    }
    button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
      background: transparent;
      color: white;
      border: 2px solid white;
      border-radius: 50px;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        background: white;
        color: #1a4d2e;
      }
    }
  }
`;

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image: images.banner1,
      title: "Premium Facilities",
      text: "Relax and unwind with premium facilities after your game.",
    },
    {
      id: 2,
      image: images.banner2,
      title: "Beautiful Scenery",
      text: "Enjoy stunning views while playing your favorite game.",
    },
    {
      id: 3,
      image: images.banner3,
      title: "World Class Golf",
      text: "Book your tee time with ease and get ready to experience the perfect round.",
    },
    {
      id: 4,
      image: images.banner4,
      title: "South East Asia",
      text: "Book your tee time with ease and get ready to experience the perfect round.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {slides.map((slide) => (
          <HeroSlide key={slide.id} image={slide.image}>
            <div>
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <a href="#form">
                {" "}
                <button>Book Now</button>
              </a>
            </div>
          </HeroSlide>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default HeroSection;
