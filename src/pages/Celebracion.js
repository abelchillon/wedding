import React from 'react';
import '../css/pages.css';
import urbisolImg from '../images/urbisol.jpg';

const Celebracion = () => {
  return (
    <div
      className="page-container celebration-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(248,241,234,0.55), rgba(248,241,234,0.65)), url(${urbisolImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <div className="page-content">
        <section
          className="celebration-section"
          style={{
            background: 'rgba(255,255,255,0.9)',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(139, 107, 93, 0.1)',
            marginBottom: '30px',
          }}
        >
          <h2 style={{ textAlign: 'center', color: '#8B6B5D' }}>
            El Banquete 🍽️
          </h2>
          <div className="ceremony-date-time">
            <div
              className="ceremony-date-box"
              style={{
                fontSize: '18px',
                lineHeight: '1.6',
                textAlign: 'center',
                padding: '20px',
                background: 'rgba(139, 107, 93, 0.1)',
                borderRadius: '8px',
              }}
            >
              🏨 Hotel Urbisol
              <br />
              📍 N-141c, 290, 08275 Calders, Barcelona
              <br />
              <span
                className="ceremony-date-hour"
                style={{
                  display: 'block',
                  marginTop: '10px',
                  color: '#8B6B5D',
                }}
              >
                🕢 Comienza a las <b>19:30h</b>
                <br />
                📅 Sábado, 2 de Agosto de 2025
              </span>
            </div>
          </div>
        </section>

        <section
          className="celebration-section"
          style={{
            background: 'rgba(255,255,255,0.9)',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(139, 107, 93, 0.1)',
            marginBottom: '30px',
          }}
        >
          <h2 style={{ textAlign: 'center', color: '#8B6B5D' }}>
            Sobre la celebración ✨
          </h2>
          <p
            style={{
              fontSize: '17px',
              lineHeight: '1.6',
              textAlign: 'center',
            }}
          >
            La celebración tendrá lugar en el Hotel Urbisol, ubicado en Calders
            cerca de Moià, un enclave con un espectacular entorno y vistas a la
            montaña. Disfrutaremos de un banquete especial y una fiesta
            inolvidable rodeados de naturaleza. 🌿🎉
          </p>
        </section>

        <section
          className="celebration-section"
          style={{
            background: 'rgba(255,255,255,0.9)',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(139, 107, 93, 0.1)',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              color: '#8B6B5D',
              marginBottom: '20px',
            }}
          >
            Cómo llegar 🗺️
          </h2>
          <iframe
            title="urbisol-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d190649.89685249038!2d1.6957202!3d41.7009943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4e4cfd927b31f%3A0x5fa9f67d204a41dd!2sHotel%20Urbisol!5e0!3m2!1ses!2ses!4v1747396161450!5m2!1ses!2ses"
            width="100%"
            height="450"
            style={{
              border: '0',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(139, 107, 93, 0.1)',
            }}
            allowFullScreen=""
            loading="lazy"
          />
          <div
            style={{
              marginTop: '20px',
              textAlign: 'center',
            }}
          >
            <a
              href="https://maps.google.com/?q=Hotel+Urbisol+Calders"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                background: 'rgba(139, 107, 93, 0.1)',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#8B6B5D',
                fontWeight: '500',
                transition: 'all 0.3s ease',
              }}
            >
              Abrir en Google Maps 🗺️
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Celebracion;
