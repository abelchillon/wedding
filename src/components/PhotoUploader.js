import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';

import '../css/PhotoUploader.css';

const PhotoUploader = forwardRef(
  ({ onPhotoSelected, onUploadStart, onUploadComplete, onError }, ref) => {
    const [preview, setPreview] = useState(null);

    const [uploading, setUploading] = useState(false);

    const fileInputRef = useRef(null);

    // Exponemos los métodos al componente padre

    useImperativeHandle(ref, () => ({
      openCamera,

      openGallery,
    }));

    const openCamera = () => {
      if (fileInputRef.current) {
        fileInputRef.current.accept = 'image/*';

        fileInputRef.current.capture = 'environment';

        fileInputRef.current.click();
      }
    };

    const openGallery = () => {
      if (fileInputRef.current) {
        fileInputRef.current.accept = 'image/*';

        fileInputRef.current.removeAttribute('capture');

        fileInputRef.current.click();
      }
    };

    const handleFileChange = async (event) => {
      const file = event.target.files?.[0];

      if (!file) return;

      // Crear preview

      const reader = new FileReader();

      reader.onload = (e) => setPreview(e.target.result);

      reader.readAsDataURL(file);

      try {
        setUploading(true);

        onUploadStart?.();

        // Pasar el archivo al componente padre para su manejo

        await onPhotoSelected(file);

        setPreview(null);

        setUploading(false);

        onUploadComplete?.();
      } catch (error) {
        console.error('Error uploading photo:', error);

        onError?.(error);

        setUploading(false);
      }
    };

    return (
      <div className="photo-uploader">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: 'none' }}
        />

        <div className="upload-buttons">
          <button
            onClick={openCamera}
            className="upload-button camera-button"
            disabled={uploading}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="button-icon"
            >
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />

              <path
                fillRule="evenodd"
                d="M20 9c0-1.1-.9-2-2-2h-2.17l-1.7-1.7A2 2 0 0012.84 5H11.16A2 2 0 009.87 5.3L8.17 7H6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9zm-8 7a5 5 0 110-10 5 5 0 010 10z"
              />
            </svg>
            Hacer foto
          </button>

          <button
            onClick={openGallery}
            className="upload-button gallery-button"
            disabled={uploading}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="button-icon"
            >
              <path d="M4 5h16v14H4V5zm0 14h16v2H4v-2zm16-14H4V3h16v2zm-5 4l-3 3-2-2-4 4h12l-3-5z" />
            </svg>
            Galería
          </button>
        </div>

        {preview && (
          <div className="preview-container">
            <img src={preview} alt="Preview" className="photo-preview" />
          </div>
        )}

        {uploading && (
          <div className="upload-overlay">
            <div className="upload-spinner"></div>

            <p>Subiendo foto...</p>
          </div>
        )}
      </div>
    );
  }
);

export default PhotoUploader;
