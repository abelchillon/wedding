import React, { useEffect, useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, CldImage, CldUploadWidget } from '@cloudinary/react';
import { QRCodeCanvas } from 'qrcode.react';

import '../css/pages.css';

const cloudName = 'dyjw9xpgi';
const uploadPreset = 'fotos_boda'; // Puedes configurar uno personalizado en Cloudinary

const Regalos = () => {
  const [images, setImages] = useState([]);
  const uploadUrl = `https://upload.cloudinary.com/v1_1/${cloudName}/upload`;

  // Recuperar imágenes de la cuenta de Cloudinary (últimas 12)
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          `https://res.cloudinary.com/${cloudName}/image/list/fotos.json`
        );
        if (res.ok) {
          const data = await res.json();
          setImages(data.resources.slice(0, 12));
        }
      } catch (err) {
        // Puede que no exista el tag/lista, no mostrar error
      }
    };
    fetchImages();
  }, []);

  const subirFotoUrl = window.location.origin + '/subir-foto';

  return (
    <div className="page-container">
      <h1>¡Házte una foto!</h1>

      <div className="page-content">
        <section className="gifts-section">
          <h2>Escanea el código QR</h2>

          <p>¡Pon tu mejor o peor cara!</p>
        </section>
      </div>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h3>¡Sube tu foto a nuestra galería!</h3>
        <p>Escanea este QR para subir una foto directamente desde tu móvil:</p>
        <QRCodeCanvas value={subirFotoUrl} size={180} />
        <p style={{ marginTop: 8 }}>
          <a href={subirFotoUrl} target="_blank" rel="noopener noreferrer">
            O haz clic aquí para subir una foto
          </a>
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          justifyContent: 'center',
        }}
      >
        {images.length > 0 ? (
          images.map((img) => (
            <img
              key={img.public_id}
              src={`https://res.cloudinary.com/${cloudName}/image/upload/w_400,h_400,c_fill/${img.public_id}.jpg`}
              alt={img.public_id}
              style={{
                width: 180,
                height: 180,
                objectFit: 'cover',
                borderRadius: 12,
              }}
            />
          ))
        ) : (
          <p style={{ width: '100%', textAlign: 'center' }}>
            No hay fotos aún. ¡Sé el primero en subir una!
          </p>
        )}
      </div>
    </div>
  );
};

export default Regalos;
