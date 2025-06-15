import React, { useState, useEffect } from 'react';

import { Carousel } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import abero from '../images/background2.png';
import vero from '../images/vero.jpg';
import abel from '../images/abel.jpg';
import ajPalau from '../images/aj_palau.jpg';
import urbisolImg from '../images/urbisol.jpg';

import {
  faChevronLeft,
  faChevronRight,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

import '../css/Carousel.css';

const images = [abero, vero, abel];
const ceremonyBg = ajPalau;
const celebrationBg = urbisolImg;

const WeddingCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Precargar imágenes
  useEffect(() => {
    images.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
  }, []);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    let bgImage;
    if (selectedIndex === 1) {
      bgImage = ceremonyBg;
    } else if (selectedIndex === 2) {
      bgImage = celebrationBg;
    } else {
      bgImage = images[selectedIndex];
    }
    document.documentElement.style.setProperty(
      '--background-image',
      `url(${bgImage})`
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
              <h2 style={{ marginBottom: '0px' }}>Verónica & Abel 💑</h2>
              <h2 style={{ marginTop: '10px' }}>02 de Agosto, 25</h2>
              <Link to="/invitacion" className="carousel-link">
                Ver Invitación
              </Link>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image">
            <div className="carousel-content">
              <h2>Ceremonia ✨</h2>
              <h2>17:00h</h2>
              <div className="location-wrapper">
                <p>
                  <a
                    href="https://maps.app.goo.gl/nCqEpmzXGAegYRrg7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="location-link"
                  >
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="location-icon"
                    />
                    Ajuntament de Palau-Solità i Plegamans
                  </a>
                </p>
                <Link to="/ceremonia" className="carousel-link">
                  Más Información
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image">
            <div className="carousel-content">
              <h2>Celebración 🎉</h2>
              <h2>19:00h</h2>
              <div className="location-wrapper">
                <p>
                  <a
                    href="https://maps.app.goo.gl/PBF48XPsQEJM9YTc6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="location-link"
                  >
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="location-icon"
                    />{' '}
                    Hotel Urbisol
                  </a>
                </p>
                <Link to="/celebracion" className="carousel-link">
                  Más Información
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default WeddingCarousel;
