import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home.css";

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const Productmap = [
    {
      id: 1,
      name: "Quality Curio Palm (100%) Leather",
      picture: "mainyeffso1.jpeg",
      discount: "20% Off",
      price: "15,760",
    },

    {
      id: 2,
      name: "Yeffso Crocodile Skin Black Palm",
      picture: "mainyeffso2.jpeg",
      discount: "40% Off",
      price: "17,500",
    },
    {
      id: 3,
      name: "Unisex Brown Soul Palm",
      picture: "mainyeffso3.jpeg",
      discount: "15% Off",
      price: "20,000",
    },
    {
      id: 4,
      name: "Men Classic Half Shoe Slippers",
      picture: "style4.png",
      discount: "5% Off",
      price: "16,999",
    },
   
  ];

  return (
    <div className="style-crool">
      <Slider {...settings}>
        {Productmap.map((item, index) => (
          <Slide
            key={item.id}
            img={item.picture}
            title={item.name}
            price={item.price}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Hero;
