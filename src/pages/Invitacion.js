import React from 'react';
import { Link } from 'react-router-dom';
import '../css/pages.css';
import invitacionImg from '../images/invitacion.jpg';

const Invitacion = () => {
  return (
    <div
      className="page-container invitacion-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(248,241,234,0.55), rgba(248,241,234,0.65)), url(${invitacionImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <div className="page-content">
        {' '}
        <section className="rsvp-section">
          {' '}
          <h2>Confirmación de Asistencia</h2>
          <p>
            Con gran ilusión esperamos poder compartir este día tan especial con
            vosotros. Para ayudarnos con los preparativos, ¿podríais
            confirmarnos vuestra asistencia?
          </p>
          <div className="form-container">
            <iframe
              src="https://forms.gle/KXF1QoPyUZMG38s49"
              width="100%"
              height="800px"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              style={{
                backgroundColor: 'transparent',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(139, 107, 93, 0.1)',
              }}
              title="Formulario de confirmación de asistencia"
            >
              Cargando formulario...
            </iframe>
          </div>
        </section>
        {/* <section className="invitation-section">
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
        </section> */}
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
            alojamiento:
          </p>
          <p className="link-container">
            <Link to="/celebracion" className="page-link">
              Detalles de la Celebración
            </Link>
          </p>
        </section>{' '}
      </div>
    </div>
  );
};

export default Invitacion;
