const express = require('express');



const router = express.Router();



const cloudinaryController = require('../controllers/cloudinaryController');



// API para obtener imágenes de Cloudinary



router.get('/fotos', cloudinaryController.listFotos);



module.exports = router;

