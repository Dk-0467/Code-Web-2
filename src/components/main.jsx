import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "./assets/images/1.jpg",
  "./assets/images/2.jpg",
  "./assets/images/3.jpg",
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="hero bg-white border-1 pb-3"> 
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="bg-white"> 
            <div className="card bg-white text-dark border-0 mx-3"> 
              <img
                className="card-img img-fluid"
                src={img}
                alt={`Slide ${index + 1}`}
                height={500}
              />
              <div className="card-img-overlay d-flex align-items-center">
                <div className="container">
                  {/* Nội dung ở đây */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
