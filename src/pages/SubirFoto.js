import React from 'react';



import '../css/pages.css';



const cloudName = 'dyjw9xpgi';



const uploadPreset = 'fotos_boda';



const SubirFoto = () => {

  const openCloudinaryWidget = () => {

    if (window.cloudinary) {

      window.cloudinary.openUploadWidget(

        {

          cloudName: cloudName,



          uploadPreset: uploadPreset,



          sources: ['local', 'camera', 'url', 'facebook', 'instagram'],



          multiple: false,



          folder: 'fotos',



          cropping: false,



          showPoweredBy: false,



          resourceType: 'image',

        },



        (error, result) => {

          if (!error && result && result.event === 'success') {

            window.location.href = '/fotos';

          }

        }

      );

    }

  };



  React.useEffect(() => {

    // Cargar el script del widget si no está presente



    if (!window.cloudinary) {

      const script = document.createElement('script');



      script.src = 'https://widget.cloudinary.com/v2.0/global/all.js';



      script.async = true;



      script.onload = openCloudinaryWidget;



      document.body.appendChild(script);

    } else {

      openCloudinaryWidget();

    }



    // Abrir automáticamente al entrar en la página

  }, []);



  return (

    <div

      className="page-container"

      style={{

        minHeight: '60vh',



        display: 'flex',



        alignItems: 'center',



        justifyContent: 'center',

      }}

    >

      <div className="page-content" style={{ textAlign: 'center' }}>

        <h1>Sube tu foto</h1>



        <p>

          Se abrirá el formulario de subida automáticamente.

          <br />

          Si no se abre, pulsa el botón:

        </p>



        <button

          onClick={openCloudinaryWidget}

          style={{

            background: '#8b6b5d',



            color: '#fff',



            border: 'none',



            borderRadius: 8,



            padding: '0.8rem 2rem',



            fontSize: '1.1rem',



            cursor: 'pointer',



            marginTop: 12,

          }}

        >

          Subir foto

        </button>

      </div>

    </div>

  );

};



export default SubirFoto;

