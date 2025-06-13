const express = require('express');



const cors = require('cors');



const dotenv = require('dotenv');



const path = require('path');



dotenv.config();



const app = express();



const PORT = process.env.PORT || 5000;



app.use(express.json());



app.use(express.urlencoded({ extended: true }));



const corsOptions = {

  origin:

    process.env.NODE_ENV === 'production'

      ? 'https://www.avboda.es'

      : 'http://localhost:3000',



  credentials: true,



  optionsSuccessStatus: 200,

};



app.use(cors(corsOptions));



// Serve static files from the public directory



app.use(express.static(path.join(__dirname, '../public')));



app.get('/favicon.ico', (req, res) => {

  res.sendFile(path.join(__dirname, '../public/favicon.ico'));

});



app.get('/manifest.json', (req, res) => {

  res.sendFile(path.join(__dirname, '../public/manifest.json'));

});



const routes = require('./src/routes');



app.use('/api', routes);



app.listen(PORT, () => {

  console.log(`Servidor corriendo en http://localhost:${PORT}`);

});

