const express = require("express");
// const cors = require('./middlewares/cors');
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const db = require("./db");
const { auth } = require("./middlewares/auth");
const errorHandler = require("./middlewares/errorHandler");

const port = 5000;
const app = express();

//#region Middlewares
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(auth);

//#endregion

//connection from db here
db.connect(app);

app.get("/", (req, res) => {
  res.json({ message: "Its working!" });
});

app.use("/api", routes);
app.use(errorHandler);

app.listen(
  port,
  console.log.bind(console, `Server is listening on port ${port}`)
);
