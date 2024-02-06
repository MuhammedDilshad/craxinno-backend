import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const ConnectDB = async () => {
  try {
    const connectionString =
      "mongodb+srv://mdmdsar:2M6NvB0rhY0qjVK4@craxinno.pnjoryf.mongodb.net/";
    if (!connectionString) {
      throw new Error("MongoDB connection string is not defined.");
    }

    await mongoose.connect(connectionString);

    console.log("Db Connected");
  } catch (error) {
    console.error(error, "Db error");
  }
};
