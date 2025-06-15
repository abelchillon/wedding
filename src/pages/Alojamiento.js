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

  { src: piscina, alt: 'Piscina' },
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
            src={habitaciones[modalImgIdx].src}
            alt={habitaciones[modalImgIdx].alt}
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
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '15px',
              marginBottom: '20px',
              padding: '10px',
            }}
          >
            {[...habitaciones].map((img, idx) => (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                style={{
                  width: '100%',

                  aspectRatio: '3/2',

                  objectFit: 'cover',

                  borderRadius: '12px',

                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',

                  cursor: 'pointer',

                  transition: 'all 0.3s ease',

                  transform: 'scale(1)',

                  '&:hover': {
                    transform: 'scale(1.02)',

                    boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                  },
                }}
                onClick={() =>
                  setModalImgIdx(idx < habitaciones.length ? idx : 'piscina')
                }
              />
            ))}
          </div>
          <p
            style={{
              fontSize: '15px',

              textAlign: 'center',

              marginBottom: '20px',

              color: '#666',

              fontStyle: 'italic',
            }}
          >
            ¡No te olvides el bañador para disfrutar de la piscina! 🏊‍♂️
          </p>
        </section>
        <section className="rsvp-section">
          <h2>¡Tu habitación te espera! 🏨</h2>
          <p>
            Hemos preparado todo para que disfrutes de una estancia maravillosa
            en el Hotel Urbisol. Aquí podrás relajarte y disfrutar al máximo de
            nuestra celebración, ¡incluyendo un chapuzón en la piscina! 🏊‍♂️
          </p>
          <h1 style={{ marginTop: '30px' }}>Reserva tu habitación 🛏️</h1>
          <p style={{ marginBottom: '20px' }}>
            Para que podamos organizarlo todo perfectamente, por favor, confirma
            tu hospedaje en el formulario. ¡Gracias! 💝
          </p>
          <div className="form-container">
            <iframe
              src="https://forms.gle/ZMEdNHbatyZtnxVXA"
              // frameBorder="0"
              // marginHeight="0"
              // marginWidth="0"
              style={{
                width: '100%',
                minHeight: '922px',
                // border: '1px solid #ccc',
                display: 'block',
                overflow: 'hidden',
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
