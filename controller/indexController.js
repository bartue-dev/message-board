const db = require("../db/queries");
const asyncHandler = require("express-async-handler");

//all message
const getAllMessages = asyncHandler(async (req, res) => {
  const messages = await db.getAllMessage();

  res.render("index", {
    messages: messages})
});

//getSingleMessages
const getMessage = asyncHandler(async (req, res) => {
  const id = +req.params.id
  const message = await db.getMessage(id);

  if(!message) {
    res.status(404);
    res.render("404.ejs")
    return;
  }
    
  console.log(message);
  
  res.render("singleMessage", {message: message})
});

const deleteMessage = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await db.deleteMessage(id);
  res.redirect("/")
});

module.exports = {
  getAllMessages,
  getMessage,
  deleteMessage
  }