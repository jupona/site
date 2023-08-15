import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Assurez-vous d'ajuster le chemin vers votre fichier CSS

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/Photo-site/KOTD-site/KOTD_1.png",
    "/Photo-site/KOTD-site/KOTD_2.png",
    "/Photo-site/KOTD-site/KOTD_3.png",
    "/Photo-site/KOTD-site/KOTD_4.png",
    "/Photo-site/KOTD-site/KOTD_5.png",
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div>
      <span>
        <h1 id="titre">Quick preview</h1>
      </span>
      <div className="carousel-container">
        <div className="carousel-slide">
          <p className="Description">
            "Images were created with an Artificial Intelligence"
          </p>

          <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        </div>
        <a
          className="collection-link"
          href="https://opensea.io/collection/knightsofthedawn"
          target="_blank"
          rel="noopener noreferrer"
        >
          See on OpenSea
        </a>
      </div>
    </div>
  );
}

export default Carousel;
