const express = require('express');



const cors = require('cors');



const dotenv = require('dotenv');



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



const routes = require('./src/routes');



app.use('/api', routes);



app.listen(PORT, () => {

  console.log(`Servidor corriendo en http://localhost:${PORT}`);

});

