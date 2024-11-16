import mongoose from 'mongoose'

const dataSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  healthCenterId: {
    type: Number,
    required: true,
  },
  data: {
    type: Map, // Para permitir propiedades dinámicas
    of: {
      type: [Number], // Cada propiedad es un array de números
      validate: {
        validator: function (arr) {
          return arr.length === 22; // Validamos que siempre sean 22 elementos
        },
        message: 'Cada array debe tener exactamente 22 elementos',
      },
    },
    required: true,
  },

})

export const dataModel = mongoose.model('Data',dataSchema)