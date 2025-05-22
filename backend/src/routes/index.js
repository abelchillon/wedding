const express = require('express');

const router = express.Router();

const Message = require('../models/message');



// Get all messages

router.get('/messages', async (req, res) => {

  try {

    const messages = await Message.findAll();

    res.json(messages);

  } catch (error) {

    res.status(500).json({ error: 'Error al obtener mensajes' });

  }

});



// Create a new message

router.post('/messages', async (req, res) => {

  try {

    const { name, email, message } = req.body;

    const newMessage = await Message.create({ name, email, message });

    res.status(201).json(newMessage);

  } catch (error) {

    res.status(400).json({ error: 'Error al crear mensaje' });

  }

});



// Test route

router.get('/hello', (req, res) => {

  res.json({ message: 'Hola desde el backend!' });

});



module.exports = router;
