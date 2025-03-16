const { Router } = require("express");
const indexRouter = Router();

const indexController = require("../controller/indexController.js");

//all messages
indexRouter.get("/", indexController.getAllMessages);

//single message
indexRouter.get("/messages/:id", indexController.getMessage);

//delete message
indexRouter.post("/:id/delete", indexController.deleteMessage)

module.exports = indexRouter