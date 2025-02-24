import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import User from "./models/User.js";
import Cart from "./models/Cart.js";
import products from "./data/products.js";

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const seedData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    const createdUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "123456",
      role: "admin",
    });

    const userId = createdUser._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: userId };
    });
    await Product.insertMany(sampleProducts);
    console.log("Project data seeded successfully");
    process.exit();
  } catch (error) {
    console.log("Error Seeding the data");
    process.exit(1);
  }
};

seedData();
