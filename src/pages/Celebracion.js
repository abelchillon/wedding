import React from 'react';

import '../css/pages.css';

const Celebracion = () => {
  return (
    <div className="page-container">
      <h1>La Celebración</h1>

      <div className="page-content">
        <section className="celebration-section">
          <h2>El Banquete</h2>

          <p>Detalles sobre el menú y la celebración...</p>
        </section>

        <section className="celebration-section">
          <h2>La Fiesta</h2>

          <p>Información sobre la música y el baile...</p>
        </section>

        <section className="celebration-section">
          <h2>Alojamiento</h2>

          <p>Opciones de hoteles cercanos...</p>
        </section>
      </div>
    </div>
  );
};

export default Celebracion;
