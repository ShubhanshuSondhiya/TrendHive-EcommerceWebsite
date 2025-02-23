import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb connected");
  } catch (err) {
    console.error("MongoDB connection Failed", err);
    process.exit(1);
  }
}
