import React from 'react';
import { Link } from 'react-router-dom';
import '../css/pages.css';

const Invitacion = () => {
  return (
    <div className="page-container">
      <h1>Vuestra Invitación</h1>

      <div className="page-content">
        <section className="invitation-section">
          <h2>Queridos familiares y amigos</h2>
          <p>
            Con inmensa alegría y el corazón rebosante de ilusión, queremos
            compartir con vosotros uno de los días más especiales de nuestras
            vidas. Cada uno de vosotros habéis formado parte de nuestra historia
            de amor de una manera única, y no podríamos imaginar este día tan
            especial sin vuestra presencia.
          </p>
          <p>
            Vuestra compañía hará que este momento sea aún más mágico y
            memorable. Queremos crear recuerdos inolvidables rodeados de las
            personas que más queremos, compartiendo risas, bailes y la felicidad
            que caracteriza las grandes celebraciones.
          </p>
        </section>

        <section className="invitation-links">
          <h2>Información Importante</h2>
          <p>
            Para conocer todos los detalles sobre la ceremonia, cómo llegar y
            horarios, podéis visitar:
          </p>
          <p className="link-container">
            <Link to="/ceremonia" className="page-link">
              Detalles de la Ceremonia
            </Link>
          </p>

          <p>
            Para información sobre el banquete, la fiesta y opciones de
            alojamiento, os invitamos a consultar:
          </p>
          <p className="link-container">
            <Link to="/celebracion" className="page-link">
              Detalles de la Celebración
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Invitacion;
