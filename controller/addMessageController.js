const db = require("../db/queries");
const asyncHandler = require("express-async-handler");

const addMessageForm = asyncHandler(async (req, res) => {
  res.render("addMessage")
});

const addMessage = asyncHandler(async (req, res) => {
  const {username, message} = req.body;
  db.createMessage(message, username);

  res.redirect("/")
});

module.exports = {
  addMessageForm, 
  addMessage
}