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
        <section className="ceremony-section">
          <h2 style={{ textAlign: 'center' }}>Fecha y Hora</h2>
          <div className="ceremony-date-time">
            <div className="ceremony-date-box">
              Sábado, 2 de Agosto de 2025
              <br />
              <span className="ceremony-date-hour">
                Comienza a las <b>17:00h</b>
              </span>
            </div>
          </div>
        </section>

        <section className="ceremony-section">
          <h2>Ubicación</h2>
          <p style={{ textAlign: 'center', fontWeight: '500' }}>
            Sala de actos del Ayuntamiento de Palau-Solità i Plegamans
            <br />
            Plaça de la Vila, 1, 08184 Palau-solità i Plegamans, Barcelona
          </p>
        </section>

        <section className="ceremony-section">
          <h2>Descripción</h2>
          <p>
            La ceremonia se celebrará en la sala de actos del ayuntamiento de
            Palau-Solità i Plegamans, un espacio emblemático y acogedor donde
            compartiremos este momento tan especial junto a nuestros seres
            queridos.
          </p>
        </section>

        <section className="ceremony-section">
          <h2>Cómo llegar</h2>
          <iframe
            title="ajuntament-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11936.404860768971!2d2.16601767310146!3d41.588693053951296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4c0793318b5fb%3A0x27396529788c4a4!2sAjuntament%20de%20Palau-solita%20i%20Plegamans!5e0!3m2!1ses!2ses!4v1747397015674!5m2!1ses!2ses"
            width="100%"
            height="450"
            style={{ borde: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="ceremony-map">
            {/* <iframe
              title="Mapa Ceremonia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.964964073839!2d2.177135315422839!3d41.6022229792437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a495e2e2e2e2e2%3A0x123456789abcdef!2sPla%C3%A7a%20de%20la%20Vila%2C%201%2C%2008184%20Palau-solit%C3%A0%20i%20Plegamans%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1685555555555!5m2!1ses!2ses"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
            <p className="ceremony-map-link">
              <a
                href="https://maps.app.goo.gl/r5S9KESC6WDggqfD8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver en Google Maps
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ceremonia;
