const express = require("express");
const User = require("../model/user.model");

module.exports.getUser = async (req, res) => {
  const user = await User.find({});
  res.send(user);
};

module.exports.createUser = async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username });
  User.register(user, password, (err) => {
    if (err) {
      console.log("error registering user!", err);
      return next(err);
    }
  });
  res.send(user);
};

module.exports.loginUser = async (req, res) => {};
