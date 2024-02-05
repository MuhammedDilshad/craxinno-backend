import User from "../Model/UserModel.js";
import Personal from "../Model/PersonalMoel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  console.log(req.body);
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
    gender,
    fullname,
    date,
    address,
    addresslength,
    textdetails,
    employment,
    savings,
    userId,
  } = req.body;

  try {
    const personalInstance = new Personal({
      userId,
      gender,
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

export const userData = async (req, res) => {
  try {
    console.log("i am ain");
    const userId = req.params.userId;
    console.log(userId, "userId");
    const personalData = await Personal.findOne({ userId });

    if (!personalData) {
      console.log("Personal data not found");
      return res.status(404).json({ message: "Personal data not found" });
    }

    res.status(200).json(personalData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
