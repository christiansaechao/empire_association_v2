import React from "react";
import "./styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div className="hero-container">
      <Slider className="slider" {...settings}>
        <div className="img-container">
          <div className="drop-shadow"></div>
          <div className="tag">
            <div className="title">Dining</div>
            <div>
              Feeling hungry? Check out our in house restaurant or get table
              side service!
            </div>
          </div>
          <img src="https://i.imgur.com/scX7gat.jpg" alt="Dining Image" />
        </div>
        <div className="img-container">
          <div className="drop-shadow"></div>
          <div className="tag">
            <div className="title">Bar</div>
            <div>
              Ready for a night out? Enjoy our signature cocktails and vibrant
              atmosphere!
            </div>
          </div>
          <img
            src="https://i.imgur.com/iWHdEp4.jpg"
            alt="Bar Image"
            className="blur"
          />
        </div>
        <div className="img-container">
          <div className="drop-shadow"></div>
          <div className="tag">
            <div className="title">Gaming</div>
            <div>
              Feeling lucky? Try your hand at a variety of tables and let the
              good times roll!
            </div>
          </div>
          <img
            src="https://i.imgur.com/7772zAG.jpg"
            alt="Playing Cards Image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
