const express = require("express");
const app = express();
const path = require("node:path");

const indexRouter = require("./routes/index.js");
const addMessRouter = require("./routes/addMessage.js");

//to be able to get the data of the form from req.body
app.use(express.urlencoded({extended: true}));

//render static files
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//set the views and ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//render the index/home to the page
app.use("/", indexRouter);

//render addMessage to the page
app.use("/addMessage", addMessRouter)

//if no path exist
app.use((req, res, next) => {
  res.status(404);
  res.render("404.ejs")
});

//run server
const PORT = 3000;
app.listen(PORT, () => {
console.log(`Listening to port: ${PORT}`);
});