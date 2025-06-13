import React, { useState, useEffect } from 'react';

import hab1 from '../images/hab1.jpg';

import hab2 from '../images/hab2.jpg';

import hab3 from '../images/hab3.jpg';

import piscina from '../images/piscina.jpg';

import '../css/pages.css';

const habitaciones = [
  { src: hab1, alt: 'Habitación 1' },

  { src: hab2, alt: 'Habitación 2' },

  { src: hab3, alt: 'Habitación 3' },
];

const Alojamiento = () => {
  const [modalImgIdx, setModalImgIdx] = useState(null);

  useEffect(() => {
    if (modalImgIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [modalImgIdx]);

  useEffect(() => {
    if (typeof modalImgIdx !== 'number') return;

    const handleKey = (e) => {
      if (e.key === 'Escape') setModalImgIdx(null);

      if (e.key === 'ArrowLeft')
        setModalImgIdx(
          (idx) => (idx - 1 + habitaciones.length) % habitaciones.length
        );

      if (e.key === 'ArrowRight')
        setModalImgIdx((idx) => (idx + 1) % habitaciones.length);
    };

    window.addEventListener('keydown', handleKey);

    return () => window.removeEventListener('keydown', handleKey);
  }, [modalImgIdx]);

  const handleImageClick = (idx) => setModalImgIdx(idx);

  const handleCloseModal = () => setModalImgIdx(null);

  return (
    <div className="page-container">
      {modalImgIdx !== null && (
        <div
          style={{
            position: 'fixed',

            top: 0,

            left: 0,

            width: '100vw',

            height: '100vh',

            background: 'rgba(0,0,0,0.85)',

            display: 'flex',

            alignItems: 'center',

            justifyContent: 'center',

            zIndex: 2000,
          }}
          onClick={handleCloseModal}
        >
          {typeof modalImgIdx === 'number' && habitaciones.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();

                setModalImgIdx(
                  (modalImgIdx - 1 + habitaciones.length) % habitaciones.length
                );
              }}
              style={{
                position: 'absolute',

                left: 24,

                top: '50%',

                transform: 'translateY(-50%)',

                fontSize: 48,

                color: '#fff',

                background: 'none',

                border: 'none',

                cursor: 'pointer',

                zIndex: 2001,

                padding: 0,

                lineHeight: 1,

                userSelect: 'none',
              }}
              aria-label="Anterior"
            >
              ‹
            </button>
          )}

          <img
            src={
              modalImgIdx === 'piscina'
                ? piscina
                : habitaciones[modalImgIdx].src
            }
            alt={
              modalImgIdx === 'piscina'
                ? 'Piscina ampliada'
                : habitaciones[modalImgIdx].alt
            }
            style={{
              maxWidth: '90vw',

              maxHeight: '90vh',

              borderRadius: 16,

              boxShadow: '0 4px 32px #0008',

              background: '#fff',

              objectFit: 'contain',
            }}
            onClick={(e) => e.stopPropagation()}
          />

          {typeof modalImgIdx === 'number' && habitaciones.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();

                setModalImgIdx((modalImgIdx + 1) % habitaciones.length);
              }}
              style={{
                position: 'absolute',

                right: 24,

                top: '50%',

                transform: 'translateY(-50%)',

                fontSize: 48,

                color: '#fff',

                background: 'none',

                border: 'none',

                cursor: 'pointer',

                zIndex: 2001,

                padding: 0,

                lineHeight: 1,

                userSelect: 'none',
              }}
              aria-label="Siguiente"
            >
              ›
            </button>
          )}

          <button
            onClick={handleCloseModal}
            style={{
              position: 'fixed',

              top: 24,

              right: 32,

              fontSize: 32,

              color: '#fff',

              background: 'none',

              border: 'none',

              cursor: 'pointer',

              zIndex: 2001,
            }}
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
      )}
      <div className="page-content">
        <section className="accommodation-info">
          <h2 style={{ marginBottom: 8 }}>Hotel Urbisol</h2>
          <p style={{ fontSize: 17, textAlign: 'center', marginBottom: 18 }}>
            ¡El alojamiento está incluido! Disfruta de tu estancia en el Hotel
            Urbisol y de sus instalaciones.
          </p>
          <div
            style={{
              display: 'flex',

              flexWrap: 'wrap',

              gap: 12,

              justifyContent: 'center',

              alignItems: 'center',

              marginBottom: 24,
            }}
          >
            {[...habitaciones, { src: piscina, alt: 'Piscina' }].map(
              (img, idx) => (
                <img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: 140,

                    height: 95,

                    objectFit: 'cover',

                    borderRadius: 10,

                    boxShadow: '0 2px 8px #0001',

                    cursor: 'pointer',

                    transition: 'box-shadow 0.2s',
                  }}
                  onClick={() =>
                    setModalImgIdx(idx < habitaciones.length ? idx : 'piscina')
                  }
                />
              )
            )}
          </div>
          <p style={{ fontSize: 15, textAlign: 'center', marginBottom: 0 }}>
            Recuerda traer bañador para la piscina.
          </p>
        </section>
        <section className="rsvp-section">
          <h2>Confirmación de Alojamiento</h2>
          <p style={{ marginBottom: 12 }}>
            ¿Vas a necesitar habitación? Por favor, confírmalo aquí:
          </p>
          <div className="form-container">
            <iframe
              src="https://forms.gle/ZMEdNHbatyZtnxVXA"
              width="100%"
              height="600px"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              style={{
                backgroundColor: 'transparent',

                borderRadius: '12px',

                boxShadow: '0 4px 12px rgba(139, 107, 93, 0.1)',
              }}
              title="Formulario de confirmación de alojamiento"
            >
              Cargando formulario...
            </iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Alojamiento;
