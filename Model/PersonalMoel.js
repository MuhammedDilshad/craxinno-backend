import mongoose from "mongoose";

const personalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  gender: { type: String, required: true },
  fullname: { type: String, required: true },
  date: { type: String, required: true },
  address: { type: String, required: true },
  addresslength: { type: String, required: true },
  textdetails: { type: String, required: true },
  employment: { type: String, required: true },
  savings: { type: String, required: true },
});

const Personal = mongoose.model("Personal", personalSchema);

export default Personal;
