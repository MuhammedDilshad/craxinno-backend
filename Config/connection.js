import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    const connectionString = process.env.MONGODB;
    if (!connectionString) {
      throw new Error("MongoDB connection string is not defined.");
    }

    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Db Connected");
  } catch (error) {
    console.error(error, "Db error");
  }
};
