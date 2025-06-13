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
        <section className="celebration-section">
          <h2 style={{ textAlign: 'center' }}>Ubicación y Hora</h2>
          <div className="ceremony-date-time">
            <div className="ceremony-date-box">
              Hotel Urbisol
              <br />
              N-141c, 290, 08275 Calders, Barcelona
              <br />
              <span className="ceremony-date-hour">
                Comienza a las <b>19:30h</b> - Sábado, 2 de Agosto de 2025
              </span>
            </div>
          </div>
        </section>

        <section className="celebration-section">
          <h2>Descripción</h2>
          <p>
            La celebración tendrá lugar en el Hotel Urbisol, ubicado en Calders
            cerca de Moià, un enclave con un espectacular entorno y vistas a la
            montaña. Disfrutaremos de un banquete especial y una fiesta
            inolvidable rodeados de naturaleza.
          </p>
        </section>

        <h2>Cómo llegar</h2>
        <iframe
          title="urbisol-map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d190649.89685249038!2d1.6957202!3d41.7009943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4e4cfd927b31f%3A0x5fa9f67d204a41dd!2sHotel%20Urbisol!5e0!3m2!1ses!2ses!4v1747396161450!5m2!1ses!2ses"
          width="100%"
          height="450"
          style={{ borde: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="ceremony-map-link" style={{ textAlign: 'center' }}>
          <a
            href="https://goo.gl/maps/6Qw8k8k8k8k8k8k8A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en Google Maps
          </a>
        </p>
        {/* <section className="celebration-section">
          <h2>Cómo llegar</h2>
          <div className="ceremony-map">
            <iframe
              title="Mapa Celebración"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d190649.89685249038!2d1.6957202!3d41.7009943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4e4cfd927b31f%3A0x5fa9f67d204a41dd!2sHotel%20Urbisol!5e0!3m2!1ses!2ses!4v1747396161450!5m2!1ses!2ses"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="ceremony-map-link" style={{ textAlign: 'center' }}>
              <a
                href="https://goo.gl/maps/6Qw8k8k8k8k8k8k8A"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver en Google Maps
              </a>
            </p>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Celebracion;
