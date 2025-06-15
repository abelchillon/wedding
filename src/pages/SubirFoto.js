import React, { useState, useRef } from 'react';

import '../css/pages.css';

import '../css/SubirFoto.css';

const cloudName = 'dyjw9xpgi';

const uploadPreset = 'fotos_boda';

const SubirFoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [success, setSuccess] = useState(false);

  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);

      setError(null);

      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async () => {
    if (!selectedFile) return;

    setLoading(true);

    setError(null);

    const formData = new FormData();

    formData.append('file', selectedFile);

    formData.append('upload_preset', uploadPreset);

    formData.append('folder', 'fotos');

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,

        {
          method: 'POST',

          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Error al subir la imagen');
      }

      await response.json();

      setSuccess(true);

      setTimeout(() => {
        window.location.href = '/fotos';
      }, 1500);
    } catch (err) {
      setError('Error al subir la imagen. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const openCamera = () => {
    if (fileInputRef.current) {
      fileInputRef.current.accept = 'image/*';

      fileInputRef.current.capture = 'environment';

      fileInputRef.current.click();
    }
  };

  const openFileSelector = () => {
    if (fileInputRef.current) {
      fileInputRef.current.accept = 'image/*';

      fileInputRef.current.removeAttribute('capture');

      fileInputRef.current.click();
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
          <h2 style={{ color: '#8B6B5D' }}>Compartir Fotos 📸</h2>
          <p
            style={{
              fontSize: '17px',
              lineHeight: '1.6',
              marginBottom: '20px',
            }}
          >
            ¡Ayúdanos a crear un álbum lleno de momentos especiales! Comparte
            tus fotos y forma parte de nuestros recuerdos. ✨
          </p>

          <div
            style={{
              background: 'rgba(139, 107, 93, 0.1)',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '20px',
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              ref={fileInputRef}
              style={{ display: 'none' }}
            />

            {!preview ? (
              <button
                onClick={() => fileInputRef.current.click()}
                style={{
                  background: '#8B6B5D',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: '#7A5D50',
                  },
                }}
              >
                Seleccionar Foto 🖼️
              </button>
            ) : (
              <div style={{ marginBottom: '20px' }}>
                <img
                  src={preview}
                  alt="Vista previa"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '300px',
                    borderRadius: '8px',
                    marginBottom: '15px',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                    justifyContent: 'center',
                  }}
                >
                  <button
                    onClick={uploadImage}
                    disabled={loading}
                    style={{
                      background: '#8B6B5D',
                      color: 'white',
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      cursor: loading ? 'default' : 'pointer',
                      opacity: loading ? 0.7 : 1,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {loading ? 'Subiendo... ⌛' : 'Subir Foto ⬆️'}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedFile(null);
                      setPreview(null);
                      setError(null);
                    }}
                    style={{
                      background: '#e74c3c',
                      color: 'white',
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Cancelar ❌
                  </button>
                </div>
              </div>
            )}
          </div>

          {error && (
            <div
              style={{
                background: 'rgba(231, 76, 60, 0.1)',
                color: '#e74c3c',
                padding: '15px',
                borderRadius: '8px',
                marginTop: '20px',
              }}
            >
              {error} 😢
            </div>
          )}

          {success && (
            <div
              style={{
                background: 'rgba(46, 204, 113, 0.1)',
                color: '#27ae60',
                padding: '15px',
                borderRadius: '8px',
                marginTop: '20px',
              }}
            >
              ¡Foto subida con éxito! 🎉
            </div>
          )}
        </section>

        <section
          style={{
            background: 'rgba(255,255,255,0.9)',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(139, 107, 93, 0.1)',
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
              lineHeight: '1.6',
            }}
          >
            También puedes abrir la cámara directamente desde la{' '}
            <a
              href="/fotos"
              style={{
                color: '#8B6B5D',
                textDecoration: 'none',
                fontWeight: '500',
                borderBottom: '1px solid',
              }}
            >
              galería de fotos
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default SubirFoto;
