import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

// Definición del esquema del producto
const ProductSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  brand: {
    type: String,
    required: [true, 'La marca es requerida'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'El precio es requerido'],
    min: [0, 'El precio no puede ser negativo'],
  },
  img_url: {
    type: String,
    required: [true, 'La URL de la imagen es requerida'],
    validate: {
      validator: function(v) {
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(v);
      },
      message: props => `${props.value} no es una URL válida!`
    },
  },
  available: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true, // Esto añadirá campos createdAt y updatedAt
});

// Middleware para manejar el _id
ProductSchema.pre('save', function(next) {
  if (this.isNew && !this._id) {
    this._id = uuidv4();
  }
  next();
});

// Crear el modelo
const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;