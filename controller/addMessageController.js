const db = require("../model/db.js");
const asyncHandler = require("express-async-handler");

const addMessageForm = asyncHandler(async (req, res) => {
  res.render("addMessage")
});

const addMessage = asyncHandler(async (req, res) => {
  const {userName, text} = req.body;
  db.addNewMessage(text, userName)

  res.redirect("/")
});

module.exports = {addMessageForm, addMessage}