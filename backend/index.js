const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./src/config/database');
const routes = require('./src/routes');

dotenv.config();express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./src/config/database');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure CORS
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://avwedding.onrender.com'  // Replace with your Render frontend URL
    : 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));



// database(); // Initialize the database connection



// Test database connection

async function testConnection() {

  try {

    await sequelize.authenticate();

    console.log('Database connection established successfully.');

  } catch (error) {

    console.error('Unable to connect to the database:', error);

  }

}



testConnection();



app.use(cors());

app.use(express.json());



// Sample route

app.get('/api/hello', (req, res) => {

  res.json({ message: 'Hola desde el backend!' });

});



// Import routes

const routes = require('./src/routes/index');

app.use('/api', routes);



app.listen(PORT, () => {

  console.log(`Servidor corriendo en http://localhost:${PORT}`);

});
