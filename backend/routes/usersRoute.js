const express = require("express");
const generateToken = require("../utils/generateToken");
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
    res.json({
        _id: user._id,
        name: user.name,
        password: user.password,
        email: user.email,
        token: generateToken(user._id)

    })
  })
);

// Login
usersRoute.post(
    "/login",
    asyncHandler(async (req, res) => {
      // Login

      const {email,password} = req.body

      const user = await User.findOne({email: email})
      if (user && await(user.isPasswordVerified(password))) {
          // set status code
          res.status(200)
          res.json({
              _id: user._id,
              name: user.name,
              password: user.password,
              email: user.email,
              token: generateToken(user._id)

          })
      }else{
          res.status(401)
          throw new Error('Invalid credentials')
      }
    })
  );

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
