const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,

  api_key: process.env.CLOUDINARY_API_KEY,

  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET /api/fotos - Lista las imágenes subidas a la carpeta/tag 'fotos_boda'

exports.listFotos = async (req, res) => {
  try {
    const result = await cloudinary.search

      .expression('folder:fotos OR tags:fotos_boda')

      .sort_by('created_at', 'desc')

      .max_results(30)

      .execute();

    const images = result.resources.map((img) => ({
      url: img.secure_url,

      thumb: cloudinary.url(img.public_id, {
        width: 400,

        height: 400,

        crop: 'fill',

        secure: true,
      }),

      public_id: img.public_id,

      created_at: img.created_at,
    }));

    res.json(images);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener imágenes de Cloudinary' });
  }
};
