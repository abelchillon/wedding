import React from 'react';
import '../css/pages.css';
import ajPalau from '../images/aj_palau.jpg';

const Ceremonia = () => {
  return (
    <div
      className="page-container ceremony-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(248,241,234,0.55), rgba(248,241,234,0.65)), url(${ajPalau})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <div className="page-content">
        <section
          className="ceremony-section"
          style={{
            background: 'rgba(255,255,255,0.9)',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(139, 107, 93, 0.1)',
            marginBottom: '30px',
          }}
        >
          <h2 style={{ textAlign: 'center', color: '#8B6B5D' }}>
            Fecha y Hora ⏰
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
              📅 Sábado, 2 de Agosto de 2025
              <br />
              <span
                className="ceremony-date-hour"
                style={{
                  display: 'block',
                  marginTop: '10px',
                  color: '#8B6B5D',
                }}
              >
                Comienza a las <b>17:00h</b> ⌚
              </span>
            </div>
          </div>
        </section>

        <section
          className="ceremony-section"
          style={{
            background: 'rgba(255,255,255,0.9)',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(139, 107, 93, 0.1)',
            marginBottom: '30px',
          }}
        >
          <h2 style={{ textAlign: 'center', color: '#8B6B5D' }}>
            Sobre la ceremonia ✨
          </h2>
          <p
            style={{
              fontSize: '17px',
              lineHeight: '1.6',
              textAlign: 'center',
            }}
          >
            La ceremonia se celebrará en la sala de actos del ayuntamiento de
            Palau-Solità i Plegamans, un espacio emblemático y acogedor donde
            compartiremos este momento tan especial junto a nuestros seres
            queridos. 💫
          </p>
        </section>

        <section
          className="ceremony-section"
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
            Ubicación 📍
          </h2>
          <p
            style={{
              textAlign: 'center',
              fontWeight: '500',
              fontSize: '17px',
              lineHeight: '1.6',
              marginBottom: '20px',
            }}
          >
            Sala de actos del Ayuntamiento de Palau-Solità i Plegamans
            <br />
            Plaça de la Vila, 1, 08184 Palau-solità i Plegamans, Barcelona
          </p>

          <iframe
            title="ayuntamiento-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.826551091424!2d2.1809116765164826!3d41.58774738689287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4c7c34f6d531b%3A0x50586c7057a043d4!2sAjuntament%20de%20Palau-solit%C3%A0%20i%20Plegamans!5e0!3m2!1ses!2ses!4v1687649271010!5m2!1ses!2ses"
            width="100%"
            height="450"
            style={{
              border: '0',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(139, 107, 93, 0.1)',
              marginBottom: '20px',
            }}
            allowFullScreen=""
            loading="lazy"
          />

          <div
            style={{
              textAlign: 'center',
            }}
          >
            <a
              href="https://maps.google.com/?q=Ayuntamiento+de+Palau-Solità+i+Plegamans"
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

export default Ceremonia;
