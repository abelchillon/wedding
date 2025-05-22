const Message = require('../models/message');



const messageController = {

  getAllMessages: async (req, res) => {

    try {

      const messages = await Message.findAll();

      res.json(messages);

    } catch (error) {

      res.status(500).json({ error: 'Error al obtener mensajes' });

    }

  },



  createMessage: async (req, res) => {

    try {

      const { name, email, message } = req.body;

      const newMessage = await Message.create({ name, email, message });

      res.status(201).json(newMessage);

    } catch (error) {

      res.status(400).json({ error: 'Error al crear mensaje' });

    }

  },

};



module.exports = messageController;

