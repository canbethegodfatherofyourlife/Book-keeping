const express = require("express");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const usersRoute = express.Router();
usersRoute.post(
  "/register",
  asyncHandler(async (req, res) => {
    // Register
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email: email });
    if (userExists) {
      throw new Error("User Exists");
    }
    const user = await User.create({ name, email, password });
    res.send(user);
  })
);

// Login
usersRoute.post("/login", (req, res) => {
  res.send("Login route");
});

// Update User
usersRoute.put("/update", (req, res) => {
  res.send("Update route");
});

// Delete User
usersRoute.delete("/delete/:id", (req, res) => {
  res.send("Delete route");
});

// Fetch User
usersRoute.get("/", (req, res) => {
  res.send("Fetch route");
});

module.exports = usersRoute;
