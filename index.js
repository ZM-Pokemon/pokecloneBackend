require("dotenv").config();

const express = require("express");
const app = express();
const normalizePort = require("normalize-port");
const PORT = normalizePort(process.env.PORT);
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
var path = require("path");

//db
require("./db/connection");

//routes import

const userRoutes = require("./routes/userRoutes");

//middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

//routes use
app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.json("Welcome to Project 4");
});

app.listen(PORT, () => {
  console.log("I'm feeling nothin on port", PORT);
});
