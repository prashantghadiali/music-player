const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { jwtSecret, emailConfig } = require("../config/config");
const { sendEmail } = require("../utils/sendEmail");

// Signup controller
const signup = async (req, res) => {
    const { email, password, isAdmin } = req.body;
  
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Determine role based on isAdmin flag
      let role = isAdmin ? 'admin' : 'user';
  
      // Create new user
      const newUser = new User({ email, password, role });
      await newUser.save();
  
      // Determine response message based on role
      let message = isAdmin ? 'Admin registered successfully' : 'User registered successfully';
  
      // Respond with success message
      res.status(201).json({ message, user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error registering user' });
    }
  };

// Login controller
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isValidPassword = await user.isValidPassword(password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const acess_token = jwt.sign(
      { userId: user._id, role: user.role },
      jwtSecret,
      { expiresIn: "1h" }
    );
    const refresh_token = jwt.sign(
      { userId: user._id, role: user.role },
      jwtSecret,
      { expiresIn: "8h" }
    );
    res.status(200).json({ code: 1, acess_token, refresh_token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging in" });
  }
};

// Forgot password controller
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate reset token
    const resetToken = jwt.sign(
      { userId: user._id, role: user.role },
      jwtSecret,
      { expiresIn: "1h" }
    );
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Send email with reset link
    const resetLink = `http://localhost:3000/reset-password/${resetToken}`; // Change this URL as per your frontend setup
    const mailOptions = {
      from: emailConfig.user,
      to: email,
      subject: "Password Reset Link",
      html: `Click <a href="${resetLink}">here</a> to reset your password.`,
    };
    await sendEmail(mailOptions);

    res
      .status(200)
      .json({ code: 1, message: "Password reset link sent to your email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending password reset email" });
  }
};

module.exports = {
  signup,
  login,
  forgotPassword,
};
