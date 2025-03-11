const db = require("../model/db.js");
const asyncHandler = require("express-async-handler");

//all message
const getAllMessages = asyncHandler(async (req, res) => {
  const allMessages = await db.getAllMessages();

  res.render("index", {messages: allMessages})
});

//getSingleMessages
const getMessage = asyncHandler(async (req, res) => {
  const id = +req.params.id
  const allMessages  = await db.getAllMessages();

  const message = allMessages.find(message => message.id === id)

  if(!message) {
    res.status(404);
    res.render("404.ejs")
    return;
  }
    
  res.render("singleMessage", {message: message})

});

module.exports = {getAllMessages, getMessage}