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
        <section className="rsvp-section">
          <h2>¡Nos casamos! 💑✨</h2>
          <p style={{ fontSize: '17px', lineHeight: '1.6' }}>
            Con inmensa alegría e ilusión os invitamos a compartir con nosotros
            uno de los días más especiales de nuestra vida. 💝
          </p>
          <p
            style={{
              fontSize: '17px',
              lineHeight: '1.6',
              background: 'rgba(255,255,255,0.8)',
              padding: '15px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(139, 107, 93, 0.1)',
            }}
          >
            Vuestra presencia hará que este momento sea aún más mágico. ¡Nos
            hace muchísima ilusión contar con vosotros en nuestra boda! 🎉
          </p>

          <h1
            style={{
              marginTop: '30px',
              fontSize: '24px',
              color: '#8B6B5D',
            }}
          >
            Detalles importantes 📝
          </h1>

          <div className="form-container">
            <iframe
              src="https://forms.gle/KXF1QoPyUZMG38s49"
              // frameBorder="0"
              // marginHeight="0"
              // marginWidth="0"
              title="Formulario de confirmación de asistencia"
              style={{
                width: '100%',
                minHeight: '958px',
                // border: '1px solid #ccc',
                display: 'block',
                overflow: 'hidden',
              }}
            >
              Cargando formulario...
            </iframe>
          </div>
        </section>

        <section
          className="invitation-links"
          style={{
            marginTop: '30px',
            background: 'rgba(255,255,255,0.9)',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(139, 107, 93, 0.1)',
          }}
        >
          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            Para conocer todos los detalles sobre la ceremonia y cómo llegar: 🏰
          </p>
          <p className="link-container">
            <Link
              to="/ceremonia"
              className="page-link"
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
              Detalles de la Ceremonia
            </Link>
          </p>

          <p
            style={{
              fontSize: '17px',
              marginTop: '25px',
              marginBottom: '20px',
            }}
          >
            Para información sobre el banquete y la fiesta: 🎊
          </p>
          <p className="link-container">
            <Link
              to="/celebracion"
              className="page-link"
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
              Detalles de la Celebración
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Invitacion;
