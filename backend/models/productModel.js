import {model, Schema} from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  }
  
});

export default model("productModel", productSchema)