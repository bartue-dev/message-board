const { Router } = require("express");
const addMessRouter = Router();

const addMessController = require("../controller/addMessageController.js")

//render add message to the page
addMessRouter.get("/", addMessController.addMessageForm);

addMessRouter.post("/", addMessController.addMessage)

module.exports = addMessRouter
