import React from 'react';

import '../css/pages.css';

const Ceremonia = () => {
  return (
    <div className="page-container">
      <h1>La Ceremonia</h1>

      <div className="page-content">
        <section className="ceremony-section">
          <h2>Fecha y Hora</h2>

          <p>02 de Agosto, 2025 - 17:00h</p>
        </section>

        <section className="ceremony-section">
          <h2>Ubicación</h2>

          <p>Detalles sobre el lugar de la ceremonia...</p>
        </section>

        <section className="ceremony-section">
          <h2>Cómo llegar</h2>

          <p>Instrucciones y mapa para llegar al lugar...</p>
        </section>
      </div>
    </div>
  );
};

export default Ceremonia;
