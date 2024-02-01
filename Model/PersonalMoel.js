import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  title: { type: String, required: true },
  fullname: { type: String, required: true },
  date: { type: String, required: true },
  address: { type: String, required: true },
  addresslength: { type: String, required: true },
  textdetails: { type: String, required: true },
  employment: { type: String, required: true },
  savings: { type: String, required: true },
});

const Personal = mongoose.model("Personal", userSchema);

export default Personal;
