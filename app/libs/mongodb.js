// coneccion a mongo
import mongoose from "mongoose";


const connectMongoDB = async () => {
console.log('Variable VARIABLES:',process.env.MONGODB_URI);

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log('El error:',error);
  }
};

export default connectMongoDB;
