const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");

// POST /api/users/signup — ALREADY IMPLEMENTED
const signup = async (req, res) => {
  const { name, username, password, phone_number, address } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ error: "Username already exists" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    name, username, password: hashedPassword, phone_number, address,
  });
  const token = jwt.sign({ userId: user._id }, config.SECRET);
  res.status(201).json({ token, username: user.username, name: user.name });
};

// POST /api/users/login — ALREADY IMPLEMENTED
const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ error: "Invalid username or password" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ error: "Invalid username or password" });
  }
  const token = jwt.sign({ userId: user._id }, config.SECRET);
  res.json({ token, username: user.username, name: user.name });
};

module.exports = { signup, login };
