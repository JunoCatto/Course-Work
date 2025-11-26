const express = require("express");
const app = express();
require("dotenv").config();

// Forces dbConnection file to be loaded before server.js
require("./dbConnect");

// parse requests of content-type - application / json;
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
const combinedRouter = require("../routes/index");
app.use("/api/users", combinedRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}.`);
});
