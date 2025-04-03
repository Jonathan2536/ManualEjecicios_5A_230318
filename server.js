const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a MongoDB (cambia la URI si es necesario)
mongoose.connect('mongodb://localhost:27017/Personas', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('Conectado a MongoDB en la base de datos "Personas"'))
.catch((error) => console.error('Error al conectar a MongoDB:', error));

// Definir el esquema para la colección "personas"
const personaSchema = new mongoose.Schema({
  nombre: String,
  primerApellido: String,
  segundoApellido: String
});

// Crear el modelo basado en la colección "personas"
const Persona = mongoose.model('Persona', personaSchema, 'personas');

// Ruta para obtener todas las personas desde la colección "personas"
app.get('/api/personas', async (req, res) => {
  try {
    const personas = await Persona.find();
    res.json(personas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
