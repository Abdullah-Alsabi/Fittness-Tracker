const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3001;
const usersRouter = require("./routers/users");
require("dotenv").config();
// Mongoose Here
const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// -------

app.use(cors());
app.use(express.json());
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server runnong on port: ${port} `);
});
