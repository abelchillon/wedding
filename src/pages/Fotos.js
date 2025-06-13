import React, { useEffect, useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { getFotosCloudinary } from '../services/api';
import PhotoUploader from '../components/PhotoUploader';

import '../css/pages.css';

const Fotos = () => {
  const photoUploaderRef = useRef();
  const [fotos, setFotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalImgIdx, setModalImgIdx] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Detectar parámetro en la URL para abrir la cámara
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('camera') === '1') {
      // Pequeño delay para asegurar que el componente está montado
      setTimeout(() => {
        photoUploaderRef.current?.openCamera();
      }, 500);
    }
  }, []);

  // Guardar posición del scroll cuando se abre el modal
  const handleImageClick = (idx) => {
    setScrollPosition(window.pageYOffset);
    setModalImgIdx(idx);
  };

  // Restaurar posición del scroll cuando se cierra el modal
  const handleCloseModal = () => {
    setModalImgIdx(null);
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 100);
  };

  useEffect(() => {
    setLoading(true);
    getFotosCloudinary()
      .then(setFotos)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Recarga periódica de fotos cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      getFotosCloudinary()
        .then(setFotos)
        .catch((err) => setError(err.message));
    }, 10000); // 10 segundos
    return () => clearInterval(interval);
  }, []);

  const handlePhotoSelected = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'fotos_boda');
      formData.append('folder', 'fotos'); // folder

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dyjw9xpgi/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Error al subir la imagen');
      }

      const data = await response.json();

      // Recargar fotos después de subir
      setLoading(true);
      const newFotos = await getFotosCloudinary();
      setFotos(newFotos);
      setLoading(false);

      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

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
            zIndex: 1000,
          }}
          onClick={handleCloseModal}
        >
          {/* Botón anterior */}
          {fotos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalImgIdx((modalImgIdx - 1 + fotos.length) % fotos.length);
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
                zIndex: 1001,
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
            src={fotos[modalImgIdx]?.url}
            alt="Foto ampliada"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: 16,
              boxShadow: '0 4px 32px #0008',
              background: '#fff',
            }}
            onClick={(e) => e.stopPropagation()}
          />
          {/* Botón siguiente */}
          {fotos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalImgIdx((modalImgIdx + 1) % fotos.length);
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
                zIndex: 1001,
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
              zIndex: 1001,
            }}
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
      )}
      <div className="page-content">
        <h1 style={{ textAlign: 'center' }}>¡Házte una foto!</h1>
        <section
          className="gifts-section"
          style={{ textAlign: 'center', marginBottom: 32 }}
        >
          <h2 style={{ marginTop: '20px' }}>
            Escanea el QR o usa los botones para subir una foto
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <QRCodeCanvas
              value={
                window.location.origin + window.location.pathname + '?camera=1'
              }
              size={180}
            />
            <PhotoUploader
              ref={photoUploaderRef}
              onPhotoSelected={handlePhotoSelected}
              onUploadStart={() => setLoading(true)}
              onUploadComplete={() => setLoading(false)}
              onError={(error) => setError(error.message)}
            />
          </div>
          <p
            style={{
              marginTop: 32,
              color: '#666',
              fontSize: 15,
              textAlign: 'center',
            }}
          >
            ¡Tu foto aparecerá en la galería después de subirla!
          </p>
        </section>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center',
            padding: '0 8px',
          }}
        >
          {loading ? (
            <p style={{ width: '100%', textAlign: 'center' }}>
              Cargando fotos...
            </p>
          ) : error ? (
            <p style={{ width: '100%', textAlign: 'center', color: 'red' }}>
              {error}
            </p>
          ) : fotos.length > 0 ? (
            fotos.map((img, idx) => (
              <span key={img.public_id} style={{ display: 'inline-block' }}>
                <img
                  src={img.thumb}
                  alt={img.public_id}
                  style={{
                    width: 'calc(20vw - 10px)',
                    height: 'calc(20vw - 10px)',
                    maxWidth: 150,
                    maxHeight: 150,
                    minWidth: 100,
                    minHeight: 100,
                    objectFit: 'cover',
                    borderRadius: 8,
                    cursor: 'pointer',
                    transition: 'box-shadow 0.2s',
                    boxShadow: '0 2px 8px #0001',
                  }}
                  onClick={() => handleImageClick(idx)}
                />
              </span>
            ))
          ) : (
            <p style={{ width: '100%', textAlign: 'center' }}>
              No hay fotos aún. ¡Sé el primero en subir una!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fotos;
