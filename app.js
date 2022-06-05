require("dotenv").config();
const connectDB = require("./db/connect");
const studentRoute = require("./routes/student");
const logger = require("./Logger/logger");
const path = require("path");
const express = require("express");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//view engine
app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//routes
app.use("/", studentRoute);
//port
const port = process.env.PORT || 4000;

//listening for requests
const start = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, logger.info(`listening for requests on ${port}`));
};

start();
