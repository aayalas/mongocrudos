
// esta linea va si o si
import mongoose, { Schema } from "mongoose";

// crear schema
// crea tieme stamps de creacion y update
const refaccionSchema = new Schema(
  {
    car: String,
    model: String,
    year:String,
    description: String,
  },
  {
    timestamps: true,
  }
);

// refaccion es la clase en mongodb,
// si no se crea el modelo con el scchems
const Refaccion = mongoose.models.Refaccion || mongoose.model("Refaccion", refaccionSchema);

export default Refaccion;// devuelve el mmodelo Refaccion ysea que ya exista o se crea el modelo nuevo