import React, { useEffect, useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import {
  FileUploaderRegular,
  FileUploaderMinimal,
} from '@uploadcare/react-uploader';
import { getFotosCloudinary } from '../services/api';

import '../css/pages.css';
import '@uploadcare/react-uploader/core.css';

// const cloudName = 'dyjw9xpgi';
// const uploadPreset = 'fotos_boda'; // Puedes configurar uno personalizado en Cloudinary

const Regalos = () => {
  const uploadcareRef = useRef(null);
  const [fotos, setFotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalImgIdx, setModalImgIdx] = useState(null);

  // Detectar si la URL tiene ?auto=1 y si es móvil, abrir uploader automáticamente
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      );
    // Abrir automáticamente Uploadcare si ?auto=1
    if (params.get('auto') === '1' && isMobile && uploadcareRef.current) {
      if (typeof uploadcareRef.current.openDialog === 'function') {
        uploadcareRef.current.openDialog();
      }
    }
    // Abrir automáticamente Cloudinary si ?cloudinary=1 y es móvil
    if (params.get('cloudinary') === '1' && isMobile) {
      function launchWidget() {
        if (window.cloudinary && window.cloudinary.openUploadWidget) {
          window.cloudinary.openUploadWidget(
            {
              cloudName: 'dyjw9xpgi',
              uploadPreset: 'fotos_boda',
              folder: 'fotos',
              sources: ['local', 'camera'],
              cropping: false,
              multiple: true,
              defaultSource: 'camera',
              styles: {
                palette: {
                  window: '#fff',
                  sourceBg: '#f4f4f5',
                  windowBorder: '#90a0b3',
                  tabIcon: '#e05a47',
                  inactiveTabIcon: '#69778A',
                  menuIcons: '#e05a47',
                  link: '#e05a47',
                  action: '#e05a47',
                  inProgress: '#e05a47',
                  complete: '#20B832',
                  error: '#c43737',
                  textDark: '#000000',
                  textLight: '#fcfffd',
                },
              },
            },
            (error, result) => {
              // Si la subida fue exitosa, recargar fotos
              if (!error && result && result.event === 'success') {
                setLoading(true);
                getFotosCloudinary()
                  .then(setFotos)
                  .catch((err) => setError(err.message))
                  .finally(() => setLoading(false));
              }
            }
          );
        } else {
          // Si el widget aún no está disponible, reintenta hasta que cargue
          const interval = setInterval(() => {
            if (window.cloudinary && window.cloudinary.openUploadWidget) {
              clearInterval(interval);
              launchWidget();
            }
          }, 300);
        }
      }
      // Cargar el script solo si no existe
      if (!document.getElementById('cloudinary-widget-script')) {
        const script = document.createElement('script');
        script.id = 'cloudinary-widget-script';
        script.src = 'https://widget.cloudinary.com/v2.0/global/all.js';
        script.onload = launchWidget;
        document.body.appendChild(script);
      } else {
        launchWidget();
      }
    }
  }, []);

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

  // Recargar fotos tras subir una imagen con el widget
  const openCloudinaryWidget = () => {
    // Asegura que el script de Cloudinary esté cargado antes de llamar al widget
    function launchWidget() {
      if (window.cloudinary && window.cloudinary.openUploadWidget) {
        window.cloudinary.openUploadWidget(
          {
            cloudName: 'dyjw9xpgi',
            uploadPreset: 'fotos_boda',
            folder: 'fotos',
            sources: ['camera', 'local'],
            cropping: false,
            multiple: false,
            defaultSource: 'camera',
            showCompletedButton: true,
            showPoweredBy: false,
            resourceType: 'image',
            styles: {
              palette: {
                window: '#fff',
                sourceBg: '#f4f4f5',
                windowBorder: '#90a0b3',
                tabIcon: '#e05a47',
                inactiveTabIcon: '#69778A',
                menuIcons: '#e05a47',
                link: '#e05a47',
                action: '#e05a47',
                inProgress: '#e05a47',
                complete: '#20B832',
                error: '#c43737',
                textDark: '#000000',
                textLight: '#fcfffd',
              },
              fonts: {
                default: null,
                'sans-serif': {
                  url: null,
                  active: true,
                },
              },
            },
            text: {
              'sources.camera.title': 'Hacer foto',
              'sources.local.title': 'Subir desde galería',
              'menu.cancel': 'Cancelar',
              'menu.done': 'Listo',
              'menu.upload': 'Subir foto',
              'menu.back': 'Atrás',
              'menu.files': 'Mis fotos',
            },
          },
          (error, result) => {
            // Si la subida fue exitosa, recargar fotos
            if (!error && result && result.event === 'success') {
              setLoading(true);
              getFotosCloudinary()
                .then(setFotos)
                .catch((err) => setError(err.message))
                .finally(() => setLoading(false));
            }
          }
        );
      } else {
        // Si el widget aún no está disponible, reintenta hasta que cargue
        const interval = setInterval(() => {
          if (window.cloudinary && window.cloudinary.openUploadWidget) {
            clearInterval(interval);
            launchWidget();
          }
        }, 300);
      }
    }
    // Cargar el script solo si no existe
    if (!document.getElementById('cloudinary-widget-script')) {
      const script = document.createElement('script');
      script.id = 'cloudinary-widget-script';
      script.src = 'https://widget.cloudinary.com/v2.0/global/all.js';
      script.onload = launchWidget;
      document.body.appendChild(script);
    } else {
      launchWidget();
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
          onClick={() => setModalImgIdx(null)}
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
            onClick={() => setModalImgIdx(null)}
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
            Escanea el QR o click en "¡Sube tu Foto!"{' '}
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
                window.location.origin +
                window.location.pathname +
                '?cloudinary=1'
              }
              size={180}
            />
            <button
              type="button"
              style={{
                background: '#e05a47',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                padding: '12px 28px',
                cursor: 'pointer',
                fontSize: 18,
                fontWeight: 600,
                marginTop: 12,
                boxShadow: '0 2px 8px #0001',
              }}
              onClick={openCloudinaryWidget}
            >
              ¡Sube tu Foto!
            </button>
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
            gap: 16,
            justifyContent: 'center',
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
                    width: 180,
                    height: 180,
                    objectFit: 'cover',
                    borderRadius: 12,
                    cursor: 'pointer',
                    transition: 'box-shadow 0.2s',
                    boxShadow: '0 2px 8px #0001',
                  }}
                  onClick={() => setModalImgIdx(idx)}
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

export default Regalos;
