import User from "../Model/UserModel.js";
import Personal from "../Model/PersonalMoel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { email, phone, password } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.json({
        errors: { field: "email", message: "Email is already in use" },
      });
    }

    const existingPhone = await User.findOne({ phone: phone });
    if (existingPhone) {
      return res.json({
        errors: { field: "phone", message: "Phone Number is already in use" },
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      phone,
      password: hashedPassword,
    });
    const user = await newUser.save();
    console.log(user, "nlaaaaaaaaaaaaa");
    const token = jwt.sign(
      {
        username: user.email,
        phone: user.phone,
        id: user._id,
      },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const personalData = async (req, res) => {
  const {
    title,
    fullname,
    date,
    address,
    addresslength,
    textdetails,
    employment,
    savings,
  } = req.body;

  try {
    const personalInstance = new Personal({
      title,
      fullname,
      date,
      address,
      addresslength,
      textdetails,
      employment,
      savings,
    });

    await personalInstance.save();

    res.status(201).json({ message: "Personal data saved successfully" });
  } catch (error) {
    console.error(error, "error");
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const userData = (req, res) => {
  try {
  } catch (error) {}
};
