const { Pool } = require('pg');

require('dotenv').config();



const pool = new Pool({

  connectionString:
    process.env.DATABASE_URL ||
    `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,

  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,

});



const connectDB = async () => {

  try {

    await pool.connect();

    console.log('Connected to PostgreSQL database');

  } catch (error) {

    console.error('Database connection error:', error);

    process.exit(1);

  }

};



module.exports = {

  pool,

  connectDB,

};
