const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

var app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", (err) => {
  console.log("Connection Error:", err);
});
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(express.json());
app.use("/", require("./routes/index"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
