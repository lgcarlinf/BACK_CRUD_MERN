import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [10, "El nombre debe tener maximo 50 caracteres"],
  },
  comment: {
    type: String,
    required: true,
    completed: {
      type: Boolean,
      default: false,
    },
  },
  complete:{
    type: Boolean,
    default: false,
  }
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
