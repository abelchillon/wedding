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
      <div className="page-content">
        <section
          style={{
            background: 'rgba(255,255,255,0.9)',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(139, 107, 93, 0.1)',
            marginBottom: '30px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ color: '#8B6B5D' }}>Galería de Fotos 📸</h2>
          <p
            style={{
              fontSize: '17px',
              lineHeight: '1.6',
              marginBottom: '20px',
            }}
          >
            ¡Ayúdanos a capturar todos los momentos especiales! Sube tus fotos y
            comparte la alegría con todos los invitados. 🎉
          </p>

          <div
            style={{
              background: 'rgba(139, 107, 93, 0.1)',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '20px',
            }}
          >
            <h3
              style={{
                color: '#8B6B5D',
                marginBottom: '15px',
              }}
            >
              Sube tus fotos aquí 📱
            </h3>
            <PhotoUploader
              ref={photoUploaderRef}
              onSuccess={() => {
                getFotosCloudinary()
                  .then(setFotos)
                  .catch((err) => setError(err.message));
              }}
            />
          </div>

          {/* <div
            style={{
              marginTop: '25px',
              textAlign: 'center',
            }}
          >
            <h3
              style={{
                color: '#8B6B5D',
                marginBottom: '15px',
              }}
            >
              ¿Prefieres usar tu móvil? 📱
            </h3>
            <p
              style={{
                fontSize: '16px',
                marginBottom: '15px',
                textAlign: 'center',
              }}
            >
              Escanea este código QR para abrir la cámara directamente:
            </p>
            <div
              style={{
                display: 'inline-block',
                background: 'white',
                padding: '15px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(139, 107, 93, 0.1)',
              }}
            >
              <QRCodeCanvas
                value={window.location.href + '?camera=1'}
                size={200}
                level="H"
                style={{ display: 'block' }}
              />
            </div>
          </div> */}
        </section>

        <section
          style={{
            background: 'rgba(255,255,255,0.9)',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(139, 107, 93, 0.1)',
          }}
        >
          <h2
            style={{
              color: '#8B6B5D',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            Galería compartida
          </h2>

          {loading && (
            <p style={{ textAlign: 'center', color: '#8B6B5D' }}>
              Cargando fotos... ⌛
            </p>
          )}

          {error && (
            <p
              style={{
                textAlign: 'center',
                color: '#e74c3c',
                background: 'rgba(231, 76, 60, 0.1)',
                padding: '10px',
                borderRadius: '8px',
              }}
            >
              Error al cargar las fotos: {error} 😢
            </p>
          )}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
              gap: '10px',
              padding: '10px',
            }}
          >
            {fotos.map((foto, idx) => (
              <img
                key={foto.public_id}
                src={foto.thumb}
                alt={`Foto ${idx + 1}`}
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
                onClick={() => handleImageClick(idx)}
              />
            ))}
          </div>

          {fotos.length === 0 && !loading && !error && (
            <p
              style={{
                textAlign: 'center',
                color: '#8B6B5D',
                fontSize: '16px',
              }}
            >
              ¡Sé el primero en subir una foto! 🎊
            </p>
          )}
        </section>
      </div>

      {modalImgIdx !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={handleCloseModal}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setModalImgIdx((modalImgIdx - 1 + fotos.length) % fotos.length);
            }}
            style={{
              position: 'absolute',
              left: '20px',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            ‹
          </button>

          <img
            src={fotos[modalImgIdx].url}
            alt={`Foto ${modalImgIdx + 1}`}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '8px',
            }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setModalImgIdx((modalImgIdx + 1) % fotos.length);
            }}
            style={{
              position: 'absolute',
              right: '20px',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            ›
          </button>

          <button
            onClick={handleCloseModal}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Fotos;
