require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

const connectDB = require("./db/connect");
const authenticateUser = require("./middleware/authentication");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/products");

app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, 
    max: 100, 
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.get("/", (req, res) => {
  res.send('<h1>coffee store</h1><a href="/login">login</a>');
});



// routes
app.use("/api/v1/auth", authRouter);

app.use("/api/v1/products", productRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
