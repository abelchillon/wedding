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

  // Bloquea scroll de fondo cuando el modal está abierto
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

  // Navegación con teclado SOLO para habitaciones
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
      {/* Modal para imagen ampliada con navegación */}
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
          {/* Botón anterior/siguiente solo para habitaciones */}
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
        <h1 style={{ textAlign: 'center', marginBottom: 24 }}>
          ¡Tienes el alojamiento incluido en Hotel Urbisol!
        </h1>
        <p style={{ fontSize: 18, textAlign: 'center', marginBottom: 24 }}>
          Esperemos que te lo pases genial y disfrutes mucho de la estancia.
        </p>
        <p style={{ fontSize: 17, textAlign: 'center', marginBottom: 32 }}>
          Os dejamos unas cuantas fotos de las habitaciones:
        </p>
        <div
          style={{
            display: 'flex',
            gap: 8,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 32,
          }}
        >
          {habitaciones.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              style={{
                width: '100%',
                maxWidth: 150,
                height: 100,
                objectFit: 'cover',
                borderRadius: 8,
                boxShadow: '0 2px 8px #0001',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s',
              }}
              onClick={() => handleImageClick(idx)}
            />
          ))}
        </div>
        <p style={{ fontSize: 17, textAlign: 'center', marginBottom: 16 }}>
          Llevaros bañador porque al día siguiente, ¡Tenemos piscina!
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 32,
          }}
        >
          <img
            src={piscina}
            alt="Piscina"
            style={{
              width: '100%',
              maxWidth: 470,
              height: 180,
              objectFit: 'cover',
              borderRadius: 14,
              boxShadow: '0 2px 16px #0002',
              cursor: 'pointer',
              transition: 'box-shadow 0.2s',
            }}
            onClick={() => setModalImgIdx('piscina')}
          />
        </div>
      </div>
    </div>
  );
};

export default Alojamiento;
