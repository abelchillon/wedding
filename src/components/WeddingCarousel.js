import React, {useState, useEffect} from 'react';

import { Carousel } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import abero from '../images/abero.jpg';
import vero from '../images/vero.jpg';
import abel from '../images/abel.jpg';

import {
  faChevronLeft,
  faChevronRight,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

import '../css/Carousel.css';

const images = [abero, vero, abel];

const WeddingCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Precargar imágenes
  useEffect(() => {
    images.forEach(imageUrl => {
      const img = new Image();
      img.src = imageUrl;
    });
  }, []);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    // Update background image when carousel slides
    document.documentElement.style.setProperty(
      '--background-image',
      `url(${images[selectedIndex]})`
    );
  };

  return (
    <div className="carousel-container">
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        interval={null}
        fade={true}
        prevIcon={
          <FontAwesomeIcon icon={faChevronLeft} className="carousel-arrow" />
        }
        nextIcon={
          <FontAwesomeIcon icon={faChevronRight} className="carousel-arrow" />
        }
      >
        <Carousel.Item>
          <div className="carousel-image">
            <div className="carousel-content">
              <h2>Verónica & Abel</h2>
              <p>02 Agosto, 2025</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image">
            <div className="carousel-content">
              <h2>Ceremonia</h2>
              <h2>17:00h</h2>
              <p>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="location-icon"
                />
                <a
                  href="https://maps.app.goo.gl/nCqEpmzXGAegYRrg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-link"
                >
                  Ajuntament de Palau-Solità i Plegamans
                </a>
              </p>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11936.404860768971!2d2.16601767310146!3d41.588693053951296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4c0793318b5fb%3A0x27396529788c4a4!2sAjuntament%20de%20Palau-solita%20i%20Plegamans!5e0!3m2!1ses!2ses!4v1747397015674!5m2!1ses!2ses"
                  width="100%"
                  height="450"
                  style={{ borde: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image">
            <div className="carousel-content">
              <h2>Celebración</h2>
              <h2>19:00h</h2>
              <p>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="location-icon"
                />
                <a
                  href="https://maps.app.goo.gl/GyV5rEP13P6LXZUF8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-link"
                >
                  Hotel Urbisol - Calders
                </a>
              </p>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d190649.89685249038!2d1.6957202!3d41.7009943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4e4cfd927b31f%3A0x5fa9f67d204a41dd!2sHotel%20Urbisol!5e0!3m2!1ses!2ses!4v1747396161450!5m2!1ses!2ses"
                  width="100%"
                  height="450"
                  style={{ borde: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default WeddingCarousel;
